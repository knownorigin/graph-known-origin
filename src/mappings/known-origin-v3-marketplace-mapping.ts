import {ONE, ZERO} from "../utils/constants";
import {KnownOriginV3} from "../../generated/KnownOriginV3/KnownOriginV3";
import {Address, log} from "@graphprotocol/graph-ts/index";
import {BigInt} from "@graphprotocol/graph-ts";
import {
    EditionAcceptingOffer,
    EditionBidAccepted,
    EditionBidPlaced,
    EditionBidRejected,
    EditionBidWithdrawn,
    EditionDeListed,
    EditionListed,
    EditionPriceChanged,
    EditionPurchased,
    AdminUpdateModulo,
    AdminUpdateMinBidAmount,
    AdminUpdateSecondaryRoyalty,
    AdminUpdatePlatformPrimarySaleCommission,
    AdminUpdateSecondarySaleCommission, KODAV3Marketplace, EditionSteppedSaleBuy, EditionSteppedSaleListed
} from "../../generated/KODAV3Marketplace/KODAV3Marketplace";

import {getPlatformConfig} from "../services/PlatformConfig.factory";
import {toEther} from "../utils/utils";

import {
    loadNonNullableEdition, loadOrCreateV3Edition,
    loadOrCreateV3EditionFromTokenId
} from "../services/Edition.service";
import {
    createBidAccepted,
    createBidPlacedEvent,
    createBidRejected,
    createBidWithdrawn
} from "../services/AuctionEvent.factory";
import {
    recordDayBidAcceptedCount,
    recordDayBidPlacedCount, recordDayBidRejectedCount, recordDayBidWithdrawnCount, recordDayCounts, recordDayIssued,
    recordDayTotalValueCycledInBids,
    recordDayTotalValuePlaceInBids, recordDayValue
} from "../services/Day.service";
import {recordActiveEditionBid, removeActiveBidOnEdition} from "../services/AuctionEvent.service";

import {clearEditionOffer, recordEditionOffer} from "../services/Offers.service";
import {addPrimarySaleToCollector, collectorInList, loadOrCreateCollector} from "../services/Collector.service";
import {recordArtistCounts, recordArtistIssued, recordArtistValue} from "../services/Artist.service";
import {loadNonNullableToken, loadOrCreateV3Token} from "../services/Token.service";
import {createTokenPrimaryPurchaseEvent} from "../services/TokenEvent.factory";

import {recordPrimarySaleEvent} from "../services/ActivityEvent.service";
import * as EVENT_TYPES from "../utils/EventTypes";
import * as SaleTypes from "../utils/SaleTypes";

export function handleAdminUpdateModulo(event: AdminUpdateModulo): void {
    log.info("KO V3 handleAdminUpdateModulo() called - modulo {}", [event.params._modulo.toString()]);
    let marketConfig = getPlatformConfig()
    marketConfig.modulo = event.params._modulo;
    marketConfig.save();
}

export function handleAdminUpdateMinBidAmount(event: AdminUpdateMinBidAmount): void {
    log.info("KO V3 handleAdminUpdateModulo() called - minBidAmount {}", [event.params._minBidAmount.toString()]);
    let marketConfig = getPlatformConfig()
    marketConfig.modulo = event.params._minBidAmount;
    marketConfig.save();
}

export function handleAdminUpdateSecondaryRoyalty(event: AdminUpdateSecondaryRoyalty): void {
    log.info("KO V3 handleAdminUpdateSecondaryRoyalty() called - secondarySaleRoyalty {}", [event.params._secondarySaleRoyalty.toString()]);
    let marketConfig = getPlatformConfig()
    marketConfig.secondarySaleRoyalty = event.params._secondarySaleRoyalty;
    marketConfig.save();
}

export function handleAdminUpdatePlatformPrimarySaleCommission(event: AdminUpdatePlatformPrimarySaleCommission): void {
    log.info("KO V3 handleAdminUpdatePlatformPrimarySaleCommission() called - platformPrimarySaleCommission {}", [event.params._platformPrimarySaleCommission.toString()]);
    let marketConfig = getPlatformConfig()
    marketConfig.primarySaleCommission = event.params._platformPrimarySaleCommission;
    marketConfig.save();
}

export function handleAdminUpdateSecondarySaleCommission(event: AdminUpdateSecondarySaleCommission): void {
    log.info("KO V3 handleAdminUpdatePlatformPrimarySaleCommission() called - platformSecondarySaleCommission {}", [event.params._platformSecondarySaleCommission.toString()]);
    let marketConfig = getPlatformConfig()
    marketConfig.marketplaceSecondarySaleRoyalty = event.params._platformSecondarySaleCommission;
    marketConfig.save();
}

/////////////////////
// Edition Buy Now //
/////////////////////

export function handleEditionPriceChanged(event: EditionPriceChanged): void {
    log.info("KO V3 handleEditionPriceChanged() called - editionId {}", [event.params._editionId.toString()]);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );
    let editionEntity = loadOrCreateV3EditionFromTokenId(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.priceInWei = event.params._price;
    editionEntity.save()
}

export function handleEditionListed(event: EditionListed): void {
    log.info("KO V3 handleEditionListed() called - editionId {}", [event.params._editionId.toString()]);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );
    let editionEntity = loadOrCreateV3EditionFromTokenId(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.priceInWei = event.params._price;
    editionEntity.startDate = event.params._startDate;
    editionEntity.salesType = SaleTypes.BUY_NOW
    // clear stepped sale
    editionEntity.stepSaleStepPrice = ZERO
    editionEntity.stepSaleBasePrice = ZERO
    editionEntity.currentStep = ZERO
    editionEntity.save()
}

export function handleEditionDeListed(event: EditionDeListed): void {
    log.info("KO V3 handleEditionDeListed() called - editionId {}", [event.params._editionId.toString()]);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );
    let editionEntity = loadOrCreateV3EditionFromTokenId(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.priceInWei = ZERO;
    editionEntity.startDate = ZERO
    editionEntity.salesType = SaleTypes.OFFERS_ONLY // fall back to offers
    editionEntity.save()
}

export function handleEditionPurchased(event: EditionPurchased): void {
    log.info("KO V3 handleEditionPurchased() called - editionId {}", [event.params._editionId.toString()]);

    // Action edition data changes
    let editionEntity = loadNonNullableEdition(event.params._editionId)
    editionEntity.totalEthSpentOnEdition = editionEntity.totalEthSpentOnEdition.plus(
        toEther(event.params._price)
    );

    // Record supply being consumed (useful to know how many are left in a edition i.e. available = supply = remaining)
    editionEntity.totalSupply = editionEntity.totalSupply.plus(ONE)

    // Reduce remaining supply for each mint
    editionEntity.remainingSupply = editionEntity.remainingSupply.minus(ONE)

    // Total sold
    editionEntity.totalSold = editionEntity.totalSold.plus(ONE)

    // Maintain a list of tokenId issued from the edition
    let tokenIds = editionEntity.tokenIds
    tokenIds.push(event.params._tokenId)
    editionEntity.tokenIds = tokenIds

    // Record sale against the edition
    let sales = editionEntity.sales
    sales.push(event.params._tokenId.toString())
    editionEntity.sales = sales

    // Create collector
    let collector = loadOrCreateCollector(event.params._buyer, event.block);
    collector.save();

    // Tally up primary sale owners
    if (!collectorInList(collector, editionEntity.primaryOwners)) {
        let primaryOwners = editionEntity.primaryOwners;
        primaryOwners.push(collector.id);
        editionEntity.primaryOwners = primaryOwners;
    }

    editionEntity.save()

    let tokenTransferEvent = createTokenPrimaryPurchaseEvent(event, event.params._tokenId, event.params._buyer, event.params._price);
    tokenTransferEvent.save();

    // Set price against token
    let tokenEntity = loadNonNullableToken(event.params._tokenId)
    tokenEntity.primaryValueInEth = toEther(event.params._price)
    tokenEntity.lastSalePriceInEth = toEther(event.params._price)
    tokenEntity.totalPurchaseCount = tokenEntity.totalPurchaseCount.plus(ONE)
    tokenEntity.totalPurchaseValue = tokenEntity.totalPurchaseValue.plus(toEther(event.params._price))
    tokenEntity.save()

    addPrimarySaleToCollector(event.block, event.params._buyer, event.params._price);

    // Record Artist Data
    let artistAddress = Address.fromString(editionEntity.artistAccount.toHexString());

    recordArtistIssued(artistAddress)
    recordArtistValue(artistAddress, event.params._tokenId, event.transaction.value)
    recordArtistCounts(artistAddress, event.transaction.value)

    recordDayValue(event, event.params._tokenId, event.transaction.value)
    recordDayCounts(event, event.transaction.value)

    // record running total of issued tokens
    recordDayIssued(event, event.params._tokenId)

    recordPrimarySaleEvent(event, EVENT_TYPES.PURCHASE, editionEntity, tokenEntity, event.params._price, event.params._buyer)
}

////////////////////
// Edition Offers //
////////////////////

export function handleEditionAcceptingOffer(event: EditionAcceptingOffer): void {
    log.info("KO V3 handleEditionAcceptingOffer() called - editionId {}", [event.params._editionId.toString()]);

    // clear out offers
    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );
    let editionEntity = loadOrCreateV3EditionFromTokenId(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.auctionEnabled = true
    editionEntity.salesType = SaleTypes.OFFERS_ONLY
    editionEntity.offersOnly = true
    editionEntity.activeBid = null
    editionEntity.save()
}

export function handleEditionBidPlaced(event: EditionBidPlaced): void {
    log.info("KO V3 handleEditionBidPlaced() called - editionId {}", [event.params._editionId.toString()]);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    )
    let editionEntity = loadOrCreateV3Edition(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.save()

    let auctionEvent = createBidPlacedEvent(event.block, event.transaction, editionEntity, event.params._bidder, event.params._amount);
    auctionEvent.save()

    let biddingHistory = editionEntity.biddingHistory
    biddingHistory.push(auctionEvent.id.toString())
    editionEntity.biddingHistory = biddingHistory
    editionEntity.save()

    // TODO handle user lockout period before then can withdraw

    recordDayBidPlacedCount(event)

    recordDayTotalValueCycledInBids(event, event.params._amount)
    recordDayTotalValuePlaceInBids(event, event.params._amount)

    recordActiveEditionBid(event.params._editionId, auctionEvent)

    recordEditionOffer(event.block, event.transaction, event.params._bidder, event.params._amount, event.params._editionId)

    recordPrimarySaleEvent(event, EVENT_TYPES.BID_PLACED, editionEntity, null, event.params._amount, event.params._bidder)
}

export function handleEditionBidWithdrawn(event: EditionBidWithdrawn): void {
    log.info("KO V3 handleEditionBidWithdrawn() called - editionId {}", [event.params._editionId.toString()]);

    let editionEntity = loadNonNullableEdition(event.params._editionId)

    let auctionEvent = createBidWithdrawn(event.block, event.transaction, editionEntity, event.params._bidder);
    auctionEvent.save()

    let biddingHistory = editionEntity.biddingHistory
    biddingHistory.push(auctionEvent.id.toString())
    editionEntity.biddingHistory = biddingHistory
    editionEntity.save()

    recordDayBidWithdrawnCount(event)

    removeActiveBidOnEdition(event.params._editionId)

    clearEditionOffer(event.block, event.params._editionId)

    recordPrimarySaleEvent(event, EVENT_TYPES.BID_WITHDRAWN, editionEntity, null, null, event.params._bidder)
}

export function handleEditionBidAccepted(event: EditionBidAccepted): void {
    log.info("KO V3 handleEditionBidAccepted() called - editionId {}", [event.params._editionId.toString()]);

    let collector = loadOrCreateCollector(event.params._bidder, event.block);
    collector.save();

    let editionEntity = loadNonNullableEdition(event.params._editionId)
    editionEntity.totalEthSpentOnEdition = editionEntity.totalEthSpentOnEdition.plus(toEther(event.params._amount));

    let auctionEvent = createBidAccepted(event.block, event.transaction, editionEntity, event.params._bidder, event.params._amount);
    auctionEvent.save()

    // Record sale against the edition
    let sales = editionEntity.sales
    sales.push(event.params._tokenId.toString())
    editionEntity.sales = sales
    editionEntity.totalSold = editionEntity.totalSold.plus(ONE)

    // Maintain bidding history list
    let biddingHistory = editionEntity.biddingHistory
    biddingHistory.push(auctionEvent.id.toString())
    editionEntity.biddingHistory = biddingHistory

    // Tally up primary sale owners
    if (!collectorInList(collector, editionEntity.primaryOwners)) {
        let primaryOwners = editionEntity.primaryOwners;
        primaryOwners.push(collector.id);
        editionEntity.primaryOwners = primaryOwners;
    }

    editionEntity.save();

    let artistAddress = Address.fromString(editionEntity.artistAccount.toHexString());

    // BidAccepted emit Transfer events
    recordDayValue(event, event.params._tokenId, event.params._amount)
    recordArtistValue(artistAddress, event.params._tokenId, event.params._amount)

    recordDayCounts(event, event.params._amount)
    recordArtistCounts(artistAddress, event.params._amount)

    recordDayBidAcceptedCount(event)

    recordDayTotalValueCycledInBids(event, event.params._amount)

    removeActiveBidOnEdition(event.params._editionId)

    clearEditionOffer(event.block, event.params._editionId)

    addPrimarySaleToCollector(event.block, event.params._bidder, event.params._amount);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );

    // Set price against token
    let tokenEntity = loadOrCreateV3Token(event.params._tokenId, kodaV3Contract, event.block)
    tokenEntity.primaryValueInEth = toEther(event.params._amount)
    tokenEntity.lastSalePriceInEth = toEther(event.params._amount)
    tokenEntity.totalPurchaseCount = tokenEntity.totalPurchaseCount.plus(ONE)
    tokenEntity.totalPurchaseValue = tokenEntity.totalPurchaseValue.plus(toEther(event.params._amount))
    tokenEntity.save()

    recordPrimarySaleEvent(event, EVENT_TYPES.BID_ACCEPTED, editionEntity, tokenEntity, event.params._amount, event.params._bidder)

    recordPrimarySaleEvent(event, EVENT_TYPES.PURCHASE, editionEntity, tokenEntity, event.params._amount, event.params._bidder)
}

export function handleEditionBidRejected(event: EditionBidRejected): void {
    log.info("KO V3 handleEditionBidRejected() called - editionId {}", [event.params._editionId.toString()]);

    let editionEntity = loadNonNullableEdition(event.params._editionId)

    let auctionEvent = createBidRejected(event.block, event.transaction, editionEntity, event.params._bidder, event.params._amount);
    auctionEvent.save()

    let biddingHistory = editionEntity.biddingHistory
    biddingHistory.push(auctionEvent.id.toString())
    editionEntity.biddingHistory = biddingHistory
    editionEntity.save()

    recordDayBidRejectedCount(event)

    recordDayTotalValueCycledInBids(event, event.params._amount)

    removeActiveBidOnEdition(event.params._editionId)

    clearEditionOffer(event.block, event.params._editionId)

    recordPrimarySaleEvent(event, EVENT_TYPES.BID_REJECTED, editionEntity, null, event.params._amount, event.params._bidder)
}

export function handleEditionSteppedSaleBuy(event: EditionSteppedSaleBuy): void {
    log.info("KO V3 handleEditionSteppedSaleBuy() called - editionId {}", [event.params._editionId.toString()]);

    let collector = loadOrCreateCollector(event.params._buyer, event.block);
    collector.save();

    let editionEntity = loadNonNullableEdition(event.params._editionId)
    editionEntity.totalEthSpentOnEdition = editionEntity.totalEthSpentOnEdition.plus(toEther(event.params._price));
    editionEntity.priceInWei = event.params._price.plus(editionEntity.stepSaleStepPrice || ZERO)
    editionEntity.currentStep = BigInt.fromI32(event.params._currentStep)

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
    editionEntity.save()

    let artistAddress = Address.fromString(editionEntity.artistAccount.toHexString());

    // BidAccepted emit Transfer events
    recordDayValue(event, event.params._tokenId, event.params._price)
    recordArtistValue(artistAddress, event.params._tokenId, event.params._price)

    recordDayCounts(event, event.params._price)
    recordArtistCounts(artistAddress, event.params._price)

    addPrimarySaleToCollector(event.block, event.params._buyer, event.params._price);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    );

    // Set price against token
    let tokenEntity = loadOrCreateV3Token(event.params._tokenId, kodaV3Contract, event.block)
    tokenEntity.primaryValueInEth = toEther(event.params._price)
    tokenEntity.lastSalePriceInEth = toEther(event.params._price)
    tokenEntity.totalPurchaseCount = tokenEntity.totalPurchaseCount.plus(ONE)
    tokenEntity.totalPurchaseValue = tokenEntity.totalPurchaseValue.plus(toEther(event.params._price))
    tokenEntity.save()

    recordPrimarySaleEvent(event, EVENT_TYPES.PURCHASE, editionEntity, tokenEntity, event.params._price, event.params._buyer)
}

export function handleEditionSteppedSaleListed(event: EditionSteppedSaleListed): void {
    log.info("KO V3 handleEditionSteppedSaleListed() called - editionId {}", [event.params._editionId.toString()]);

    let kodaV3Contract = KnownOriginV3.bind(
        KODAV3Marketplace.bind(event.address).koda()
    )
    let editionEntity = loadOrCreateV3Edition(event.params._editionId, event.block, kodaV3Contract)
    editionEntity.stepSaleBasePrice = event.params._basePrice;
    editionEntity.stepSaleStepPrice = event.params._stepPrice;
    editionEntity.currentStep = ZERO // assume when listed we are on step 0
    editionEntity.salesType = SaleTypes.STEPPED_SALE
    editionEntity.startDate = event.params._startDate;
    editionEntity.priceInWei = event.params._basePrice

    editionEntity.save()
}
