// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TokenEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenEvent", id.toString(), this);
  }

  static load(id: string): TokenEvent | null {
    return store.get("TokenEvent", id) as TokenEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get edition(): string {
    let value = this.get("edition");
    return value.toString();
  }

  set edition(value: string) {
    this.set("edition", Value.fromString(value));
  }

  get buyer(): string | null {
    let value = this.get("buyer");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set buyer(value: string | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromString(value as string));
    }
  }

  get bidder(): string | null {
    let value = this.get("bidder");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bidder(value: string | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromString(value as string));
    }
  }

  get currentOwner(): string | null {
    let value = this.get("currentOwner");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentOwner(value: string | null) {
    if (value === null) {
      this.unset("currentOwner");
    } else {
      this.set("currentOwner", Value.fromString(value as string));
    }
  }

  get ethValue(): BigDecimal {
    let value = this.get("ethValue");
    return value.toBigDecimal();
  }

  set ethValue(value: BigDecimal) {
    this.set("ethValue", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TransferEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferEvent", id.toString(), this);
  }

  static load(id: string): TransferEvent | null {
    return store.get("TransferEvent", id) as TransferEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class AuctionEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AuctionEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AuctionEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AuctionEvent", id.toString(), this);
  }

  static load(id: string): AuctionEvent | null {
    return store.get("AuctionEvent", id) as AuctionEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get edition(): string {
    let value = this.get("edition");
    return value.toString();
  }

  set edition(value: string) {
    this.set("edition", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get caller(): Bytes {
    let value = this.get("caller");
    return value.toBytes();
  }

  set caller(value: Bytes) {
    this.set("caller", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get ethValue(): BigDecimal {
    let value = this.get("ethValue");
    return value.toBigDecimal();
  }

  set ethValue(value: BigDecimal) {
    this.set("ethValue", Value.fromBigDecimal(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Day extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Day entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Day entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Day", id.toString(), this);
  }

  static load(id: string): Day | null {
    return store.get("Day", id) as Day | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): string {
    let value = this.get("date");
    return value.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }

  get transferCount(): BigInt {
    let value = this.get("transferCount");
    return value.toBigInt();
  }

  set transferCount(value: BigInt) {
    this.set("transferCount", Value.fromBigInt(value));
  }

  get editionsCount(): BigInt {
    let value = this.get("editionsCount");
    return value.toBigInt();
  }

  set editionsCount(value: BigInt) {
    this.set("editionsCount", Value.fromBigInt(value));
  }

  get bidsAcceptedCount(): BigInt {
    let value = this.get("bidsAcceptedCount");
    return value.toBigInt();
  }

  set bidsAcceptedCount(value: BigInt) {
    this.set("bidsAcceptedCount", Value.fromBigInt(value));
  }

  get bidsPlacedCount(): BigInt {
    let value = this.get("bidsPlacedCount");
    return value.toBigInt();
  }

  set bidsPlacedCount(value: BigInt) {
    this.set("bidsPlacedCount", Value.fromBigInt(value));
  }

  get bidsRejectedCount(): BigInt {
    let value = this.get("bidsRejectedCount");
    return value.toBigInt();
  }

  set bidsRejectedCount(value: BigInt) {
    this.set("bidsRejectedCount", Value.fromBigInt(value));
  }

  get bidsWithdrawnCount(): BigInt {
    let value = this.get("bidsWithdrawnCount");
    return value.toBigInt();
  }

  set bidsWithdrawnCount(value: BigInt) {
    this.set("bidsWithdrawnCount", Value.fromBigInt(value));
  }

  get bidsIncreasedCount(): BigInt {
    let value = this.get("bidsIncreasedCount");
    return value.toBigInt();
  }

  set bidsIncreasedCount(value: BigInt) {
    this.set("bidsIncreasedCount", Value.fromBigInt(value));
  }

  get totalValuePlaceInBids(): BigDecimal {
    let value = this.get("totalValuePlaceInBids");
    return value.toBigDecimal();
  }

  set totalValuePlaceInBids(value: BigDecimal) {
    this.set("totalValuePlaceInBids", Value.fromBigDecimal(value));
  }

  get totalValueCycledInBids(): BigDecimal {
    let value = this.get("totalValueCycledInBids");
    return value.toBigDecimal();
  }

  set totalValueCycledInBids(value: BigDecimal) {
    this.set("totalValueCycledInBids", Value.fromBigDecimal(value));
  }

  get issuedCount(): BigInt {
    let value = this.get("issuedCount");
    return value.toBigInt();
  }

  set issuedCount(value: BigInt) {
    this.set("issuedCount", Value.fromBigInt(value));
  }

  get salesCount(): BigInt {
    let value = this.get("salesCount");
    return value.toBigInt();
  }

  set salesCount(value: BigInt) {
    this.set("salesCount", Value.fromBigInt(value));
  }

  get totalValueInEth(): BigDecimal {
    let value = this.get("totalValueInEth");
    return value.toBigDecimal();
  }

  set totalValueInEth(value: BigDecimal) {
    this.set("totalValueInEth", Value.fromBigDecimal(value));
  }

  get highestValueInEth(): BigDecimal {
    let value = this.get("highestValueInEth");
    return value.toBigDecimal();
  }

  set highestValueInEth(value: BigDecimal) {
    this.set("highestValueInEth", Value.fromBigDecimal(value));
  }

  get highestValueToken(): string | null {
    let value = this.get("highestValueToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set highestValueToken(value: string | null) {
    if (value === null) {
      this.unset("highestValueToken");
    } else {
      this.set("highestValueToken", Value.fromString(value as string));
    }
  }

  get issued(): Array<string> {
    let value = this.get("issued");
    return value.toStringArray();
  }

  set issued(value: Array<string>) {
    this.set("issued", Value.fromStringArray(value));
  }

  get editions(): Array<string> {
    let value = this.get("editions");
    return value.toStringArray();
  }

  set editions(value: Array<string>) {
    this.set("editions", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get transferCount(): BigInt {
    let value = this.get("transferCount");
    return value.toBigInt();
  }

  set transferCount(value: BigInt) {
    this.set("transferCount", Value.fromBigInt(value));
  }

  get editionNumber(): BigInt {
    let value = this.get("editionNumber");
    return value.toBigInt();
  }

  set editionNumber(value: BigInt) {
    this.set("editionNumber", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get birthTimestamp(): BigInt {
    let value = this.get("birthTimestamp");
    return value.toBigInt();
  }

  set birthTimestamp(value: BigInt) {
    this.set("birthTimestamp", Value.fromBigInt(value));
  }

  get primaryValueInEth(): BigDecimal {
    let value = this.get("primaryValueInEth");
    return value.toBigDecimal();
  }

  set primaryValueInEth(value: BigDecimal) {
    this.set("primaryValueInEth", Value.fromBigDecimal(value));
  }

  get lastSalePriceInEth(): BigDecimal {
    let value = this.get("lastSalePriceInEth");
    return value.toBigDecimal();
  }

  set lastSalePriceInEth(value: BigDecimal) {
    this.set("lastSalePriceInEth", Value.fromBigDecimal(value));
  }

  get lastTransferTimestamp(): BigInt {
    let value = this.get("lastTransferTimestamp");
    return value.toBigInt();
  }

  set lastTransferTimestamp(value: BigInt) {
    this.set("lastTransferTimestamp", Value.fromBigInt(value));
  }

  get currentOwner(): string {
    let value = this.get("currentOwner");
    return value.toString();
  }

  set currentOwner(value: string) {
    this.set("currentOwner", Value.fromString(value));
  }

  get allOwners(): Array<string> {
    let value = this.get("allOwners");
    return value.toStringArray();
  }

  set allOwners(value: Array<string>) {
    this.set("allOwners", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get tokenEvents(): Array<string> {
    let value = this.get("tokenEvents");
    return value.toStringArray();
  }

  set tokenEvents(value: Array<string>) {
    this.set("tokenEvents", Value.fromStringArray(value));
  }

  get openOffer(): string | null {
    let value = this.get("openOffer");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set openOffer(value: string | null) {
    if (value === null) {
      this.unset("openOffer");
    } else {
      this.set("openOffer", Value.fromString(value as string));
    }
  }

  get currentTopBidder(): Bytes | null {
    let value = this.get("currentTopBidder");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set currentTopBidder(value: Bytes | null) {
    if (value === null) {
      this.unset("currentTopBidder");
    } else {
      this.set("currentTopBidder", Value.fromBytes(value as Bytes));
    }
  }

  get artistAccount(): Bytes {
    let value = this.get("artistAccount");
    return value.toBytes();
  }

  set artistAccount(value: Bytes) {
    this.set("artistAccount", Value.fromBytes(value));
  }

  get editionTotalAvailable(): BigInt {
    let value = this.get("editionTotalAvailable");
    return value.toBigInt();
  }

  set editionTotalAvailable(value: BigInt) {
    this.set("editionTotalAvailable", Value.fromBigInt(value));
  }

  get editionActive(): boolean {
    let value = this.get("editionActive");
    return value.toBoolean();
  }

  set editionActive(value: boolean) {
    this.set("editionActive", Value.fromBoolean(value));
  }
}

export class Edition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Edition entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Edition entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Edition", id.toString(), this);
  }

  static load(id: string): Edition | null {
    return store.get("Edition", id) as Edition | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get editionType(): BigInt {
    let value = this.get("editionType");
    return value.toBigInt();
  }

  set editionType(value: BigInt) {
    this.set("editionType", Value.fromBigInt(value));
  }

  get editionData(): Bytes | null {
    let value = this.get("editionData");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set editionData(value: Bytes | null) {
    if (value === null) {
      this.unset("editionData");
    } else {
      this.set("editionData", Value.fromBytes(value as Bytes));
    }
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt {
    let value = this.get("endDate");
    return value.toBigInt();
  }

  set endDate(value: BigInt) {
    this.set("endDate", Value.fromBigInt(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get tokenIds(): Array<BigInt> {
    let value = this.get("tokenIds");
    return value.toBigIntArray();
  }

  set tokenIds(value: Array<BigInt>) {
    this.set("tokenIds", Value.fromBigIntArray(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get artistAccount(): Bytes {
    let value = this.get("artistAccount");
    return value.toBytes();
  }

  set artistAccount(value: Bytes) {
    this.set("artistAccount", Value.fromBytes(value));
  }

  get artistCommission(): BigInt {
    let value = this.get("artistCommission");
    return value.toBigInt();
  }

  set artistCommission(value: BigInt) {
    this.set("artistCommission", Value.fromBigInt(value));
  }

  get optionalCommissionAccount(): Bytes | null {
    let value = this.get("optionalCommissionAccount");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set optionalCommissionAccount(value: Bytes | null) {
    if (value === null) {
      this.unset("optionalCommissionAccount");
    } else {
      this.set("optionalCommissionAccount", Value.fromBytes(value as Bytes));
    }
  }

  get optionalCommissionRate(): BigInt | null {
    let value = this.get("optionalCommissionRate");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set optionalCommissionRate(value: BigInt | null) {
    if (value === null) {
      this.unset("optionalCommissionRate");
    } else {
      this.set("optionalCommissionRate", Value.fromBigInt(value as BigInt));
    }
  }

  get priceInWei(): BigInt {
    let value = this.get("priceInWei");
    return value.toBigInt();
  }

  set priceInWei(value: BigInt) {
    this.set("priceInWei", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get totalAvailable(): BigInt {
    let value = this.get("totalAvailable");
    return value.toBigInt();
  }

  set totalAvailable(value: BigInt) {
    this.set("totalAvailable", Value.fromBigInt(value));
  }

  get totalSold(): BigInt {
    let value = this.get("totalSold");
    return value.toBigInt();
  }

  set totalSold(value: BigInt) {
    this.set("totalSold", Value.fromBigInt(value));
  }

  get sales(): Array<string> {
    let value = this.get("sales");
    return value.toStringArray();
  }

  set sales(value: Array<string>) {
    this.set("sales", Value.fromStringArray(value));
  }

  get totalEthSpentOnEdition(): BigDecimal {
    let value = this.get("totalEthSpentOnEdition");
    return value.toBigDecimal();
  }

  set totalEthSpentOnEdition(value: BigDecimal) {
    this.set("totalEthSpentOnEdition", Value.fromBigDecimal(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (value === null) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(value as string));
    }
  }

  get auctionEnabled(): boolean {
    let value = this.get("auctionEnabled");
    return value.toBoolean();
  }

  set auctionEnabled(value: boolean) {
    this.set("auctionEnabled", Value.fromBoolean(value));
  }

  get activeBid(): string | null {
    let value = this.get("activeBid");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set activeBid(value: string | null) {
    if (value === null) {
      this.unset("activeBid");
    } else {
      this.set("activeBid", Value.fromString(value as string));
    }
  }

  get biddingHistory(): Array<string> {
    let value = this.get("biddingHistory");
    return value.toStringArray();
  }

  set biddingHistory(value: Array<string>) {
    this.set("biddingHistory", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get allOwners(): Array<string | null> {
    let value = this.get("allOwners");
    return value.toStringArray();
  }

  set allOwners(value: Array<string | null>) {
    this.set("allOwners", Value.fromStringArray(value));
  }

  get currentOwners(): Array<string> {
    let value = this.get("currentOwners");
    return value.toStringArray();
  }

  set currentOwners(value: Array<string>) {
    this.set("currentOwners", Value.fromStringArray(value));
  }

  get primaryOwners(): Array<string> {
    let value = this.get("primaryOwners");
    return value.toStringArray();
  }

  set primaryOwners(value: Array<string>) {
    this.set("primaryOwners", Value.fromStringArray(value));
  }
}

export class MetaData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MetaData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MetaData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MetaData", id.toString(), this);
  }

  static load(id: string): MetaData | null {
    return store.get("MetaData", id) as MetaData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (value === null) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(value as string));
    }
  }

  get scarcity(): string | null {
    let value = this.get("scarcity");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set scarcity(value: string | null) {
    if (value === null) {
      this.unset("scarcity");
    } else {
      this.set("scarcity", Value.fromString(value as string));
    }
  }

  get artist(): string | null {
    let value = this.get("artist");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artist(value: string | null) {
    if (value === null) {
      this.unset("artist");
    } else {
      this.set("artist", Value.fromString(value as string));
    }
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (value === null) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class TokenOffer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenOffer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenOffer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenOffer", id.toString(), this);
  }

  static load(id: string): TokenOffer | null {
    return store.get("TokenOffer", id) as TokenOffer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get edition(): string {
    let value = this.get("edition");
    return value.toString();
  }

  set edition(value: string) {
    this.set("edition", Value.fromString(value));
  }

  get ownerAtTimeOfBid(): string {
    let value = this.get("ownerAtTimeOfBid");
    return value.toString();
  }

  set ownerAtTimeOfBid(value: string) {
    this.set("ownerAtTimeOfBid", Value.fromString(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get ethValue(): BigDecimal {
    let value = this.get("ethValue");
    return value.toBigDecimal();
  }

  set ethValue(value: BigDecimal) {
    this.set("ethValue", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Offer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Offer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Offer", id.toString(), this);
  }

  static load(id: string): Offer | null {
    return store.get("Offer", id) as Offer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get edition(): string {
    let value = this.get("edition");
    return value.toString();
  }

  set edition(value: string) {
    this.set("edition", Value.fromString(value));
  }

  get currentOwner(): string {
    let value = this.get("currentOwner");
    return value.toString();
  }

  set currentOwner(value: string) {
    this.set("currentOwner", Value.fromString(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get ethValue(): BigDecimal {
    let value = this.get("ethValue");
    return value.toBigDecimal();
  }

  set ethValue(value: BigDecimal) {
    this.set("ethValue", Value.fromBigDecimal(value));
  }

  get weiValue(): BigInt {
    let value = this.get("weiValue");
    return value.toBigInt();
  }

  set weiValue(value: BigInt) {
    this.set("weiValue", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }
}

export class Artist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Artist entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Artist entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Artist", id.toString(), this);
  }

  static load(id: string): Artist | null {
    return store.get("Artist", id) as Artist | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get editionsCount(): BigInt {
    let value = this.get("editionsCount");
    return value.toBigInt();
  }

  set editionsCount(value: BigInt) {
    this.set("editionsCount", Value.fromBigInt(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get issuedCount(): BigInt {
    let value = this.get("issuedCount");
    return value.toBigInt();
  }

  set issuedCount(value: BigInt) {
    this.set("issuedCount", Value.fromBigInt(value));
  }

  get salesCount(): BigInt {
    let value = this.get("salesCount");
    return value.toBigInt();
  }

  set salesCount(value: BigInt) {
    this.set("salesCount", Value.fromBigInt(value));
  }

  get totalValueInEth(): BigDecimal {
    let value = this.get("totalValueInEth");
    return value.toBigDecimal();
  }

  set totalValueInEth(value: BigDecimal) {
    this.set("totalValueInEth", Value.fromBigDecimal(value));
  }

  get highestSaleValueInEth(): BigDecimal {
    let value = this.get("highestSaleValueInEth");
    return value.toBigDecimal();
  }

  set highestSaleValueInEth(value: BigDecimal) {
    this.set("highestSaleValueInEth", Value.fromBigDecimal(value));
  }

  get highestSaleToken(): string | null {
    let value = this.get("highestSaleToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set highestSaleToken(value: string | null) {
    if (value === null) {
      this.unset("highestSaleToken");
    } else {
      this.set("highestSaleToken", Value.fromString(value as string));
    }
  }

  get firstEdition(): string | null {
    let value = this.get("firstEdition");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set firstEdition(value: string | null) {
    if (value === null) {
      this.unset("firstEdition");
    } else {
      this.set("firstEdition", Value.fromString(value as string));
    }
  }

  get firstEditionTimestamp(): BigInt {
    let value = this.get("firstEditionTimestamp");
    return value.toBigInt();
  }

  set firstEditionTimestamp(value: BigInt) {
    this.set("firstEditionTimestamp", Value.fromBigInt(value));
  }

  get lastEdition(): string | null {
    let value = this.get("lastEdition");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastEdition(value: string | null) {
    if (value === null) {
      this.unset("lastEdition");
    } else {
      this.set("lastEdition", Value.fromString(value as string));
    }
  }

  get lastEditionTimestamp(): BigInt {
    let value = this.get("lastEditionTimestamp");
    return value.toBigInt();
  }

  set lastEditionTimestamp(value: BigInt) {
    this.set("lastEditionTimestamp", Value.fromBigInt(value));
  }
}

export class Collector extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Collector entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Collector entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Collector", id.toString(), this);
  }

  static load(id: string): Collector | null {
    return store.get("Collector", id) as Collector | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get firstSeen(): BigInt {
    let value = this.get("firstSeen");
    return value.toBigInt();
  }

  set firstSeen(value: BigInt) {
    this.set("firstSeen", Value.fromBigInt(value));
  }

  get firstPurchaseTimeStamp(): BigInt {
    let value = this.get("firstPurchaseTimeStamp");
    return value.toBigInt();
  }

  set firstPurchaseTimeStamp(value: BigInt) {
    this.set("firstPurchaseTimeStamp", Value.fromBigInt(value));
  }

  get lastPurchaseTimeStamp(): BigInt {
    let value = this.get("lastPurchaseTimeStamp");
    return value.toBigInt();
  }

  set lastPurchaseTimeStamp(value: BigInt) {
    this.set("lastPurchaseTimeStamp", Value.fromBigInt(value));
  }

  get primarySaleCount(): BigInt {
    let value = this.get("primarySaleCount");
    return value.toBigInt();
  }

  set primarySaleCount(value: BigInt) {
    this.set("primarySaleCount", Value.fromBigInt(value));
  }

  get primarySaleEthSpent(): BigInt {
    let value = this.get("primarySaleEthSpent");
    return value.toBigInt();
  }

  set primarySaleEthSpent(value: BigInt) {
    this.set("primarySaleEthSpent", Value.fromBigInt(value));
  }
}
