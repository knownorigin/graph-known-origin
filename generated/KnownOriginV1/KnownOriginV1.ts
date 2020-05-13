// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PurchasedWithEther extends ethereum.Event {
  get params(): PurchasedWithEther__Params {
    return new PurchasedWithEther__Params(this);
  }
}

export class PurchasedWithEther__Params {
  _event: PurchasedWithEther;

  constructor(event: PurchasedWithEther) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PurchasedWithFiat extends ethereum.Event {
  get params(): PurchasedWithFiat__Params {
    return new PurchasedWithFiat__Params(this);
  }
}

export class PurchasedWithFiat__Params {
  _event: PurchasedWithFiat;

  constructor(event: PurchasedWithFiat) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PurchasedWithFiatReversed extends ethereum.Event {
  get params(): PurchasedWithFiatReversed__Params {
    return new PurchasedWithFiatReversed__Params(this);
  }
}

export class PurchasedWithFiatReversed__Params {
  _event: PurchasedWithFiatReversed;

  constructor(event: PurchasedWithFiatReversed) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class KnownOriginV1__getCommissionForTypeResult {
  value0: i32;
  value1: i32;

  constructor(value0: i32, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class KnownOriginV1__assetInfoResult {
  value0: BigInt;
  value1: Address;
  value2: i32;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: i32,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class KnownOriginV1__editionInfoResult {
  value0: BigInt;
  value1: Bytes;
  value2: BigInt;
  value3: string;
  value4: Address;

  constructor(
    value0: BigInt,
    value1: Bytes,
    value2: BigInt,
    value3: string,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }
}

export class KnownOriginV1 extends ethereum.SmartContract {
  static bind(address: Address): KnownOriginV1 {
    return new KnownOriginV1("KnownOriginV1", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(_tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalPurchaseValueInWei(): BigInt {
    let result = super.call(
      "totalPurchaseValueInWei",
      "totalPurchaseValueInWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalPurchaseValueInWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPurchaseValueInWei",
      "totalPurchaseValueInWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(_owner: Address, _index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    _owner: Address,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenIdPointer(): BigInt {
    let result = super.call("tokenIdPointer", "tokenIdPointer():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenIdPointer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenIdPointer",
      "tokenIdPointer():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalNumberOfPurchases(): BigInt {
    let result = super.call(
      "totalNumberOfPurchases",
      "totalNumberOfPurchases():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalNumberOfPurchases(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalNumberOfPurchases",
      "totalNumberOfPurchases():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  exists(_tokenId: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_exists(_tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenByIndex(_index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(_index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  InterfaceSignature_ERC721Optional(): Bytes {
    let result = super.call(
      "InterfaceSignature_ERC721Optional",
      "InterfaceSignature_ERC721Optional():(bytes4)",
      []
    );

    return result[0].toBytes();
  }

  try_InterfaceSignature_ERC721Optional(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "InterfaceSignature_ERC721Optional",
      "InterfaceSignature_ERC721Optional():(bytes4)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ownerOf(_tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  curatorAccount(): Address {
    let result = super.call("curatorAccount", "curatorAccount():(address)", []);

    return result[0].toAddress();
  }

  try_curatorAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "curatorAccount",
      "curatorAccount():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  developerAccount(): Address {
    let result = super.call(
      "developerAccount",
      "developerAccount():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_developerAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "developerAccount",
      "developerAccount():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(_interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCommissionForType(
    _type: string
  ): KnownOriginV1__getCommissionForTypeResult {
    let result = super.call(
      "getCommissionForType",
      "getCommissionForType(string):(uint8,uint8)",
      [ethereum.Value.fromString(_type)]
    );

    return new KnownOriginV1__getCommissionForTypeResult(
      result[0].toI32(),
      result[1].toI32()
    );
  }

  try_getCommissionForType(
    _type: string
  ): ethereum.CallResult<KnownOriginV1__getCommissionForTypeResult> {
    let result = super.tryCall(
      "getCommissionForType",
      "getCommissionForType(string):(uint8,uint8)",
      [ethereum.Value.fromString(_type)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KnownOriginV1__getCommissionForTypeResult(
        value[0].toI32(),
        value[1].toI32()
      )
    );
  }

  assetInfo(_tokenId: BigInt): KnownOriginV1__assetInfoResult {
    let result = super.call(
      "assetInfo",
      "assetInfo(uint256):(uint256,address,uint8,uint256,uint32)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return new KnownOriginV1__assetInfoResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toI32(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_assetInfo(
    _tokenId: BigInt
  ): ethereum.CallResult<KnownOriginV1__assetInfoResult> {
    let result = super.tryCall(
      "assetInfo",
      "assetInfo(uint256):(uint256,address,uint8,uint256,uint32)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KnownOriginV1__assetInfoResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toI32(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  editionInfo(_tokenId: BigInt): KnownOriginV1__editionInfoResult {
    let result = super.call(
      "editionInfo",
      "editionInfo(uint256):(uint256,bytes16,uint256,string,address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return new KnownOriginV1__editionInfoResult(
      result[0].toBigInt(),
      result[1].toBytes(),
      result[2].toBigInt(),
      result[3].toString(),
      result[4].toAddress()
    );
  }

  try_editionInfo(
    _tokenId: BigInt
  ): ethereum.CallResult<KnownOriginV1__editionInfoResult> {
    let result = super.tryCall(
      "editionInfo",
      "editionInfo(uint256):(uint256,bytes16,uint256,string,address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KnownOriginV1__editionInfoResult(
        value[0].toBigInt(),
        value[1].toBytes(),
        value[2].toBigInt(),
        value[3].toString(),
        value[4].toAddress()
      )
    );
  }

  tokensOf(_owner: Address): Array<BigInt> {
    let result = super.call("tokensOf", "tokensOf(address):(uint256[])", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigIntArray();
  }

  try_tokensOf(_owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("tokensOf", "tokensOf(address):(uint256[])", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  numberOf(_edition: Bytes): BigInt {
    let result = super.call("numberOf", "numberOf(bytes16):(uint256)", [
      ethereum.Value.fromFixedBytes(_edition)
    ]);

    return result[0].toBigInt();
  }

  try_numberOf(_edition: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numberOf", "numberOf(bytes16):(uint256)", [
      ethereum.Value.fromFixedBytes(_edition)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isPurchased(_tokenId: BigInt): i32 {
    let result = super.call("isPurchased", "isPurchased(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toI32();
  }

  try_isPurchased(_tokenId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("isPurchased", "isPurchased(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  editionOf(_tokenId: BigInt): Bytes {
    let result = super.call("editionOf", "editionOf(uint256):(bytes16)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBytes();
  }

  try_editionOf(_tokenId: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("editionOf", "editionOf(uint256):(bytes16)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  purchaseFromTime(_tokenId: BigInt): BigInt {
    let result = super.call(
      "purchaseFromTime",
      "purchaseFromTime(uint256):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_purchaseFromTime(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "purchaseFromTime",
      "purchaseFromTime(uint256):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  priceInWei(_tokenId: BigInt): BigInt {
    let result = super.call("priceInWei", "priceInWei(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_priceInWei(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("priceInWei", "priceInWei(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTypeFromEdition(_edition: Bytes): string {
    let result = super.call(
      "getTypeFromEdition",
      "getTypeFromEdition(bytes16):(string)",
      [ethereum.Value.fromFixedBytes(_edition)]
    );

    return result[0].toString();
  }

  try_getTypeFromEdition(_edition: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getTypeFromEdition",
      "getTypeFromEdition(bytes16):(string)",
      [ethereum.Value.fromFixedBytes(_edition)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _curatorAccount(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _edition(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _priceInWei(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _auctionStartDate(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _artistAccount(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }
}

export class SetPriceInWeiCall extends ethereum.Call {
  get inputs(): SetPriceInWeiCall__Inputs {
    return new SetPriceInWeiCall__Inputs(this);
  }

  get outputs(): SetPriceInWeiCall__Outputs {
    return new SetPriceInWeiCall__Outputs(this);
  }
}

export class SetPriceInWeiCall__Inputs {
  _call: SetPriceInWeiCall;

  constructor(call: SetPriceInWeiCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _priceInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPriceInWeiCall__Outputs {
  _call: SetPriceInWeiCall;

  constructor(call: SetPriceInWeiCall) {
    this._call = call;
  }
}

export class UpdateCommissionCall extends ethereum.Call {
  get inputs(): UpdateCommissionCall__Inputs {
    return new UpdateCommissionCall__Inputs(this);
  }

  get outputs(): UpdateCommissionCall__Outputs {
    return new UpdateCommissionCall__Outputs(this);
  }
}

export class UpdateCommissionCall__Inputs {
  _call: UpdateCommissionCall;

  constructor(call: UpdateCommissionCall) {
    this._call = call;
  }

  get _type(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _curator(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _developer(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class UpdateCommissionCall__Outputs {
  _call: UpdateCommissionCall;

  constructor(call: UpdateCommissionCall) {
    this._call = call;
  }
}

export class PurchaseWithEtherCall extends ethereum.Call {
  get inputs(): PurchaseWithEtherCall__Inputs {
    return new PurchaseWithEtherCall__Inputs(this);
  }

  get outputs(): PurchaseWithEtherCall__Outputs {
    return new PurchaseWithEtherCall__Outputs(this);
  }
}

export class PurchaseWithEtherCall__Inputs {
  _call: PurchaseWithEtherCall;

  constructor(call: PurchaseWithEtherCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PurchaseWithEtherCall__Outputs {
  _call: PurchaseWithEtherCall;

  constructor(call: PurchaseWithEtherCall) {
    this._call = call;
  }
}

export class PurchaseWithFiatCall extends ethereum.Call {
  get inputs(): PurchaseWithFiatCall__Inputs {
    return new PurchaseWithFiatCall__Inputs(this);
  }

  get outputs(): PurchaseWithFiatCall__Outputs {
    return new PurchaseWithFiatCall__Outputs(this);
  }
}

export class PurchaseWithFiatCall__Inputs {
  _call: PurchaseWithFiatCall;

  constructor(call: PurchaseWithFiatCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PurchaseWithFiatCall__Outputs {
  _call: PurchaseWithFiatCall;

  constructor(call: PurchaseWithFiatCall) {
    this._call = call;
  }
}

export class ReverseFiatPurchaseCall extends ethereum.Call {
  get inputs(): ReverseFiatPurchaseCall__Inputs {
    return new ReverseFiatPurchaseCall__Inputs(this);
  }

  get outputs(): ReverseFiatPurchaseCall__Outputs {
    return new ReverseFiatPurchaseCall__Outputs(this);
  }
}

export class ReverseFiatPurchaseCall__Inputs {
  _call: ReverseFiatPurchaseCall;

  constructor(call: ReverseFiatPurchaseCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReverseFiatPurchaseCall__Outputs {
  _call: ReverseFiatPurchaseCall;

  constructor(call: ReverseFiatPurchaseCall) {
    this._call = call;
  }
}

export class SetTokenBaseURICall extends ethereum.Call {
  get inputs(): SetTokenBaseURICall__Inputs {
    return new SetTokenBaseURICall__Inputs(this);
  }

  get outputs(): SetTokenBaseURICall__Outputs {
    return new SetTokenBaseURICall__Outputs(this);
  }
}

export class SetTokenBaseURICall__Inputs {
  _call: SetTokenBaseURICall;

  constructor(call: SetTokenBaseURICall) {
    this._call = call;
  }

  get _newBaseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetTokenBaseURICall__Outputs {
  _call: SetTokenBaseURICall;

  constructor(call: SetTokenBaseURICall) {
    this._call = call;
  }
}

export class SetArtistAccountCall extends ethereum.Call {
  get inputs(): SetArtistAccountCall__Inputs {
    return new SetArtistAccountCall__Inputs(this);
  }

  get outputs(): SetArtistAccountCall__Outputs {
    return new SetArtistAccountCall__Outputs(this);
  }
}

export class SetArtistAccountCall__Inputs {
  _call: SetArtistAccountCall;

  constructor(call: SetArtistAccountCall) {
    this._call = call;
  }

  get _edition(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _artistAccount(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetArtistAccountCall__Outputs {
  _call: SetArtistAccountCall;

  constructor(call: SetArtistAccountCall) {
    this._call = call;
  }
}
