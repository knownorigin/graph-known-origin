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

  get salesCount(): BigInt {
    let value = this.get("salesCount");
    return value.toBigInt();
  }

  set salesCount(value: BigInt) {
    this.set("salesCount", Value.fromBigInt(value));
  }

  get giftsCount(): BigInt {
    let value = this.get("giftsCount");
    return value.toBigInt();
  }

  set giftsCount(value: BigInt) {
    this.set("giftsCount", Value.fromBigInt(value));
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

  get sales(): Array<string> {
    let value = this.get("sales");
    return value.toStringArray();
  }

  set sales(value: Array<string>) {
    this.set("sales", Value.fromStringArray(value));
  }

  get gifts(): Array<string> {
    let value = this.get("gifts");
    return value.toStringArray();
  }

  set gifts(value: Array<string>) {
    this.set("gifts", Value.fromStringArray(value));
  }

  get editions(): Array<string> {
    let value = this.get("editions");
    return value.toStringArray();
  }

  set editions(value: Array<string>) {
    this.set("editions", Value.fromStringArray(value));
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

  get editionData(): Bytes {
    let value = this.get("editionData");
    return value.toBytes();
  }

  set editionData(value: Bytes) {
    this.set("editionData", Value.fromBytes(value));
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

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get auctionEnabled(): boolean {
    let value = this.get("auctionEnabled");
    return value.toBoolean();
  }

  set auctionEnabled(value: boolean) {
    this.set("auctionEnabled", Value.fromBoolean(value));
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

  get salesCount(): BigInt {
    let value = this.get("salesCount");
    return value.toBigInt();
  }

  set salesCount(value: BigInt) {
    this.set("salesCount", Value.fromBigInt(value));
  }

  get giftsCount(): BigInt {
    let value = this.get("giftsCount");
    return value.toBigInt();
  }

  set giftsCount(value: BigInt) {
    this.set("giftsCount", Value.fromBigInt(value));
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