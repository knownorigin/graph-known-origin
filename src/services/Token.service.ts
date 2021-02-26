import {BigInt, ethereum, log} from "@graphprotocol/graph-ts/index";
import {Token} from "../../generated/schema";
import {ZERO, ZERO_ADDRESS, ZERO_BIG_DECIMAL} from "../constants";
import {
    KnownOriginV2,
    KnownOriginV2__detailsOfEditionResult,
    KnownOriginV2__tokenDataResult
} from "../../generated/KnownOriginV2/KnownOriginV2";
import {constructMetaData} from "./MetaData.service";
import {loadOrCreateCollector} from "./Collector.service";
import {getArtistAddress} from "./AddressMapping.service";
import * as KodaVersions from "../KodaVersions";
import {KnownOriginV3} from "../../generated/KnownOriginV3/KnownOriginV3";

function newTokenEntity(tokenId: BigInt, version: BigInt): Token {
    const tokenEntity = new Token(tokenId.toString())
    tokenEntity.version = version
    tokenEntity.transfers = new Array<string>()
    tokenEntity.allOwners = new Array<string>()
    tokenEntity.openOffer = null
    tokenEntity.tokenEvents = new Array<string>()

    // Entity fields can be set using simple assignments
    tokenEntity.transferCount = ZERO // set up the owner count
    tokenEntity.tokenId = tokenId
    tokenEntity.editionNumber = ZERO
    tokenEntity.tokenURI = ""
    tokenEntity.birthTimestamp = ZERO
    tokenEntity.lastTransferTimestamp = ZERO
    tokenEntity.primaryValueInEth = ZERO_BIG_DECIMAL
    tokenEntity.lastSalePriceInEth = ZERO_BIG_DECIMAL
    tokenEntity.totalPurchaseValue = ZERO_BIG_DECIMAL
    tokenEntity.totalPurchaseCount = ZERO
    tokenEntity.editionTotalAvailable = ZERO
    tokenEntity.editionActive = true
    tokenEntity.artistAccount = ZERO_ADDRESS
    tokenEntity.isListed = false
    tokenEntity.listPrice = ZERO_BIG_DECIMAL
    tokenEntity.lister = null
    tokenEntity.listingTimestamp = ZERO

    return tokenEntity
}

function attemptToLoadV2TokenData(contract: KnownOriginV2, block: ethereum.Block, tokenId: BigInt, tokenEntity: Token | null): Token | null {
    let _tokenDataResult: ethereum.CallResult<KnownOriginV2__tokenDataResult> = contract.try_tokenData(tokenId)
    if (!_tokenDataResult.reverted) {
        let _tokenData = _tokenDataResult.value;
        tokenEntity.version = KodaVersions.KODA_V2
        tokenEntity.editionNumber = _tokenData.value0
        tokenEntity.edition = _tokenData.value0.toString()
        tokenEntity.tokenURI = _tokenData.value3

        let collector = loadOrCreateCollector(_tokenData.value4, block);
        collector.save();
        tokenEntity.currentOwner = collector.id

        let metaData = constructMetaData(_tokenData.value3);
        metaData.save()
        tokenEntity.metadata = metaData.id

        let _editionDataResult: ethereum.CallResult<KnownOriginV2__detailsOfEditionResult> = contract.try_detailsOfEdition(tokenEntity.editionNumber)
        if (!_editionDataResult.reverted) {
            let _editionData = _editionDataResult.value;
            tokenEntity.editionTotalAvailable = _editionData.value9
            tokenEntity.editionActive = _editionData.value10
            tokenEntity.artistAccount = getArtistAddress(_editionData.value4)
        } else {
            log.error("Handled reverted  detailsOfEdition() call for {}", [tokenEntity.editionNumber.toString()])
            return null;
        }
    } else {
        log.error("Handled reverted tokenData() call for ... why? {}", [tokenId.toString()])
        return null;
    }
    return tokenEntity;
}

export function loadOrCreateV2Token(tokenId: BigInt, contract: KnownOriginV2, block: ethereum.Block): Token | null {
    log.info("Calling loadOrCreateV2Token() call for {} ", [tokenId.toString()])

    let tokenEntity = Token.load(tokenId.toString())

    if (tokenEntity == null) {
        // Create new instance
        tokenEntity = newTokenEntity(tokenId, KodaVersions.KODA_V2)

        // Populate it
        tokenEntity = attemptToLoadV2TokenData(contract, block, tokenId, tokenEntity);
        tokenEntity.save();
    }

    return tokenEntity;
}

///////////////
// V3 tokens //
///////////////

function attemptToLoadV3TokenData(contract: KnownOriginV3, block: ethereum.Block, tokenId: BigInt, tokenEntity: Token | null): Token | null {

    //address _originalCreator, address _owner, uint256 _editionId, uint256 _size, string memory _uri
    const editionDetails = contract.getEditionDetails(tokenId);
    const editionNumber = contract.getEditionIdOfToken(tokenId);
    const tokenURI = contract.tokenURI(tokenId);
    const ownerOf = contract.ownerOf(tokenId);

    tokenEntity.version = KodaVersions.KODA_V3
    tokenEntity.editionNumber = editionNumber
    tokenEntity.edition = editionNumber.toString()
    tokenEntity.tokenURI = tokenURI

    let collector = loadOrCreateCollector(ownerOf, block);
    collector.save();
    tokenEntity.currentOwner = collector.id

    let metaData = constructMetaData(tokenURI);
    metaData.save()
    tokenEntity.metadata = metaData.id

    tokenEntity.editionTotalAvailable = editionDetails.value3
    tokenEntity.editionActive = contract.reportedEditionIds(editionNumber)
    tokenEntity.artistAccount = editionDetails.value1

    return tokenEntity;
}

export function loadOrCreateV3Token(tokenId: BigInt, contract: KnownOriginV3, block: ethereum.Block): Token | null {
    log.info("Calling loadOrCreateV3Token() call for {} ", [tokenId.toString()])

    let tokenEntity = Token.load(tokenId.toString())

    if (tokenEntity == null) {
        // Create new instance
        tokenEntity = newTokenEntity(tokenId, KodaVersions.KODA_V3)

        // Populate it
        tokenEntity = attemptToLoadV3TokenData(contract, block, tokenId, tokenEntity);
        tokenEntity.save();
    }

    return tokenEntity;
}
