import {
    KnownOrigin,
    Purchase,
    Minted,
    EditionCreated,
    Transfer,
    KnownOrigin__detailsOfEditionResult,
    UpdateActiveCall, UpdateArtistsAccountCall, UpdateArtistCommissionCall, UpdatePriceInWeiCall
} from "../../generated/KnownOrigin/KnownOrigin"

import {loadOrCreateEdition, loadOrCreateEditionFromTokenId} from "../services/Edition.service";
import {
    addEditionToDay,
    recordDayCounts,
    recordDayIssued,
    recordDayTransfer,
    recordDayValue
} from "../services/Day.service";
import {
    addEditionToArtist,
    recordArtistValue,
    recordArtistCounts,
    recordArtistIssued, loadOrCreateArtist
} from "../services/Artist.service";
import {loadOrCreateToken} from "../services/Token.service";
import {CallResult, log, Address} from "@graphprotocol/graph-ts/index";
import {toEther} from "../utils";
import {KODA_MAINNET, ONE, ZERO} from "../constants";
import {createTransferEvent} from "../services/TransferEvent.factory";
import {
    addPrimarySaleToCollector,
    collectorInList,
    loadOrCreateCollector
} from "../services/Collector.service";
import {getArtistAddress} from "../services/AddressMapping.service";

export function handleEditionCreated(event: EditionCreated): void {
    let contract = KnownOrigin.bind(event.address)

    let editionEntity = loadOrCreateEdition(event.params._editionNumber, event.block, contract)
    editionEntity.save()

    addEditionToDay(event, editionEntity.id);

    // Update artist
    let _editionDataResult: CallResult<KnownOrigin__detailsOfEditionResult> = contract.try_detailsOfEdition(event.params._editionNumber)
    if (!_editionDataResult.reverted) {
        let _editionData = _editionDataResult.value;
        addEditionToArtist(_editionData.value4, event.params._editionNumber.toString(), _editionData.value9, event.block.timestamp)
    } else {
        log.error("Handled unknown reverted detailsOfEdition() call for {}", [event.params._editionNumber.toString()]);
    }
}

export function handleTransfer(event: Transfer): void {
    let contract = KnownOrigin.bind(event.address)

    ///////////////
    // Transfers //
    ///////////////

    // Transfer Event
    let transferEvent = createTransferEvent(event);
    transferEvent.save();

    ////////////////
    // Day Counts //
    ////////////////

    recordDayTransfer(event);

    /////////////////////
    // Collector Logic //
    /////////////////////

    let collector = loadOrCreateCollector(event.params._to, event.block);
    collector.save();

    ///////////////////
    // Edition Logic //
    ///////////////////

    // Record transfer against the edition
    let editionEntity = loadOrCreateEditionFromTokenId(event.params._tokenId, event.block);

    // Set Transfers on edition
    let editionTransfers = editionEntity.transfers;
    editionTransfers.push(transferEvent.id);
    editionEntity.transfers = editionTransfers;

    // Check if the edition already has the owner
    if (!collectorInList(collector, editionEntity.allOwners)) {
        let allOwners = editionEntity.allOwners;
        allOwners.push(collector.id);
        editionEntity.allOwners = allOwners;
    }
    editionEntity.save();

    /////////////////
    // Token Logic //
    /////////////////

    // TOKEN
    let tokenEntity = loadOrCreateToken(event.params._tokenId, contract)

    // set birth on Token
    if (event.params._from.equals(Address.fromString("0x0000000000000000000000000000000000000000"))) {
        tokenEntity.birthTimestamp = event.block.timestamp
        tokenEntity.primaryValueInEth = toEther(event.transaction.value)
    }

    // Record transfer against token
    let tokenTransfers = tokenEntity.transfers;
    tokenTransfers.push(transferEvent.id);
    tokenEntity.transfers = tokenTransfers;

    // Check if the token already has the owner
    if (!collectorInList(collector, tokenEntity.allOwners)) {
        let allOwners = tokenEntity.allOwners;
        allOwners.push(collector.id);
        tokenEntity.allOwners = allOwners;
    }

    // Keep track of current owner
    tokenEntity.currentOwner = transferEvent.id;
    tokenEntity.save();
}

// Direct primary "Buy it now" purchase form the website
export function handlePurchase(event: Purchase): void {
    let contract = KnownOrigin.bind(event.address)

    // Create token
    let tokenEntity = loadOrCreateToken(event.params._tokenId, contract)
    tokenEntity.save()

    // Create collector
    let collector = loadOrCreateCollector(event.params._buyer, event.block);
    collector.save();

    // Record Artist Data
    let editionNumber = event.params._editionNumber
    let artistAddress = getArtistAddress(contract.artistCommission(editionNumber).value0)

    recordArtistValue(artistAddress, event.params._tokenId, event.transaction.value)
    recordDayValue(event, event.params._tokenId, event.transaction.value)

    recordDayCounts(event, event.transaction.value)
    recordArtistCounts(artistAddress, event.transaction.value)

    // Action edition data changes
    let editionEntity = loadOrCreateEdition(event.params._editionNumber, event.block, contract)
    editionEntity.totalEthSpentOnEdition = editionEntity.totalEthSpentOnEdition + toEther(event.params._priceInWei);

    // Only count Purchases with value attached as sale - primary sales trigger this event
    if (event.transaction.value > ZERO) {
        // Record sale against the edition
        let sales = editionEntity.sales
        sales.push(event.params._tokenId.toString())
        editionEntity.sales = sales
        editionEntity.totalSold = editionEntity.totalSold.plus(ONE)

        // Tally up primary sale owners
        if (!collectorInList(collector, editionEntity.primaryOwners)) {
            let primaryOwners = editionEntity.primaryOwners;
            primaryOwners.push(collector.id);
            editionEntity.primaryOwners = primaryOwners;
        }

        addPrimarySaleToCollector(event.block, event.transaction.from, event.transaction.value, event.params._editionNumber, event.params._tokenId);
    }
    editionEntity.save()
}

// A token has been issued - could be purchase, gift, accepted offer
export function handleMinted(event: Minted): void {
    let contract = KnownOrigin.bind(event.address)

    let editionEntity = loadOrCreateEdition(event.params._editionNumber, event.block, contract)

    // Record supply being consumed (useful to know how many are left in a edition i.e. available = supply = remaining)
    editionEntity.totalSupply = editionEntity.totalSupply.plus(ONE)

    // Maintain a list of tokenId issued from the edition
    let tokenIds = editionEntity.tokenIds
    tokenIds.push(event.params._tokenId)
    editionEntity.tokenIds = tokenIds

    // Save edition entity
    editionEntity.save();

    let tokenEntity = loadOrCreateToken(event.params._tokenId, contract)
    tokenEntity.save();

    // record running total of issued tokens
    recordDayIssued(event, event.params._tokenId)

    let editionNumber = event.params._editionNumber
    let artistAddress = getArtistAddress(contract.artistCommission(editionNumber).value0)
    recordArtistIssued(artistAddress)
}

export function handleUpdateActive(call: UpdateActiveCall): void {
    let contract = KnownOrigin.bind(Address.fromString(KODA_MAINNET))

    let editionNumber = call.inputs._editionNumber
    let editionEntity = loadOrCreateEdition(editionNumber, call.block, contract)
    editionEntity.active = call.inputs._active;
    editionEntity.save()

    let artist = loadOrCreateArtist(Address.fromString(editionEntity.artistAccount.toHexString()));
    artist.editionsCount = artist.editionsCount.minus(ONE);
    artist.supply = artist.supply.minus(editionEntity.totalAvailable);
    artist.save();
}

export function handleUpdateArtistsAccount(call: UpdateArtistsAccountCall): void {
    let contract = KnownOrigin.bind(Address.fromString(KODA_MAINNET))

    let editionNumber = call.inputs._editionNumber
    let editionEntity = loadOrCreateEdition(editionNumber, call.block, contract)
    editionEntity.artistAccount = getArtistAddress(call.inputs._artistAccount);
    editionEntity.save()
}

export function handleUpdateArtistCommission(call: UpdateArtistCommissionCall): void {
    let contract = KnownOrigin.bind(Address.fromString(KODA_MAINNET))

    let editionNumber = call.inputs._editionNumber
    let editionEntity = loadOrCreateEdition(editionNumber, call.block, contract)
    editionEntity.artistCommission = call.inputs._rate;
    editionEntity.save()
}

export function handleUpdatePriceInWei(call: UpdatePriceInWeiCall): void {
    let contract = KnownOrigin.bind(Address.fromString(KODA_MAINNET))

    let editionNumber = call.inputs._editionNumber
    let editionEntity = loadOrCreateEdition(editionNumber, call.block, contract)
    editionEntity.priceInWei = call.inputs._priceInWei;
    editionEntity.save()
}