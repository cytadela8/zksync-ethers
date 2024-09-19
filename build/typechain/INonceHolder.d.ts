import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface INonceHolderInterface extends Interface {
    getFunction(nameOrSignature: "getDeploymentNonce" | "getMinNonce" | "getRawNonce" | "getValueUnderNonce" | "increaseMinNonce" | "incrementDeploymentNonce" | "incrementMinNonceIfEquals" | "isNonceUsed" | "setValueUnderNonce" | "validateNonceUsage"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ValueSetUnderNonce"): EventFragment;
    encodeFunctionData(functionFragment: "getDeploymentNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getMinNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRawNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getValueUnderNonce", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseMinNonce", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "incrementDeploymentNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "incrementMinNonceIfEquals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isNonceUsed", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setValueUnderNonce", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "validateNonceUsage", values: [AddressLike, BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "getDeploymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRawNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValueUnderNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseMinNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementDeploymentNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementMinNonceIfEquals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isNonceUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValueUnderNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateNonceUsage", data: BytesLike): Result;
}
export declare namespace ValueSetUnderNonceEvent {
    type InputTuple = [
        accountAddress: AddressLike,
        key: BigNumberish,
        value: BigNumberish
    ];
    type OutputTuple = [
        accountAddress: string,
        key: bigint,
        value: bigint
    ];
    interface OutputObject {
        accountAddress: string;
        key: bigint;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface INonceHolder extends BaseContract {
    connect(runner?: ContractRunner | null): INonceHolder;
    waitForDeployment(): Promise<this>;
    interface: INonceHolderInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getDeploymentNonce: TypedContractMethod<[
        _address: AddressLike
    ], [
        bigint
    ], "view">;
    getMinNonce: TypedContractMethod<[_address: AddressLike], [bigint], "view">;
    getRawNonce: TypedContractMethod<[_address: AddressLike], [bigint], "view">;
    getValueUnderNonce: TypedContractMethod<[
        _key: BigNumberish
    ], [
        bigint
    ], "view">;
    increaseMinNonce: TypedContractMethod<[
        _value: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    incrementDeploymentNonce: TypedContractMethod<[
        _address: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    incrementMinNonceIfEquals: TypedContractMethod<[
        _expectedNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    isNonceUsed: TypedContractMethod<[
        _address: AddressLike,
        _nonce: BigNumberish
    ], [
        boolean
    ], "view">;
    setValueUnderNonce: TypedContractMethod<[
        _key: BigNumberish,
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    validateNonceUsage: TypedContractMethod<[
        _address: AddressLike,
        _key: BigNumberish,
        _shouldBeUsed: boolean
    ], [
        void
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getDeploymentNonce"): TypedContractMethod<[_address: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getMinNonce"): TypedContractMethod<[_address: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRawNonce"): TypedContractMethod<[_address: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getValueUnderNonce"): TypedContractMethod<[_key: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "increaseMinNonce"): TypedContractMethod<[_value: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "incrementDeploymentNonce"): TypedContractMethod<[_address: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "incrementMinNonceIfEquals"): TypedContractMethod<[_expectedNonce: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "isNonceUsed"): TypedContractMethod<[
        _address: AddressLike,
        _nonce: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "setValueUnderNonce"): TypedContractMethod<[
        _key: BigNumberish,
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "validateNonceUsage"): TypedContractMethod<[
        _address: AddressLike,
        _key: BigNumberish,
        _shouldBeUsed: boolean
    ], [
        void
    ], "view">;
    getEvent(key: "ValueSetUnderNonce"): TypedContractEvent<ValueSetUnderNonceEvent.InputTuple, ValueSetUnderNonceEvent.OutputTuple, ValueSetUnderNonceEvent.OutputObject>;
    filters: {
        "ValueSetUnderNonce(address,uint256,uint256)": TypedContractEvent<ValueSetUnderNonceEvent.InputTuple, ValueSetUnderNonceEvent.OutputTuple, ValueSetUnderNonceEvent.OutputObject>;
        ValueSetUnderNonce: TypedContractEvent<ValueSetUnderNonceEvent.InputTuple, ValueSetUnderNonceEvent.OutputTuple, ValueSetUnderNonceEvent.OutputObject>;
    };
}
