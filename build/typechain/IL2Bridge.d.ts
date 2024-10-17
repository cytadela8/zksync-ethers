import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IL2BridgeInterface extends Interface {
    getFunction(nameOrSignature: "finalizeDeposit" | "l1Bridge" | "l1TokenAddress" | "l2TokenAddress" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "finalizeDeposit", values: [AddressLike, AddressLike, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "l1Bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "l1TokenAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "l2TokenAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "finalizeDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface IL2Bridge extends BaseContract {
    connect(runner?: ContractRunner | null): IL2Bridge;
    waitForDeployment(): Promise<this>;
    interface: IL2BridgeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    finalizeDeposit: TypedContractMethod<[
        _l1Sender: AddressLike,
        _l2Receiver: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    l1Bridge: TypedContractMethod<[], [string], "view">;
    l1TokenAddress: TypedContractMethod<[
        _l2Token: AddressLike
    ], [
        string
    ], "view">;
    l2TokenAddress: TypedContractMethod<[
        _l1Token: AddressLike
    ], [
        string
    ], "view">;
    withdraw: TypedContractMethod<[
        _l1Receiver: AddressLike,
        _l2Token: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "finalizeDeposit"): TypedContractMethod<[
        _l1Sender: AddressLike,
        _l2Receiver: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "l1Bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "l1TokenAddress"): TypedContractMethod<[_l2Token: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "l2TokenAddress"): TypedContractMethod<[_l1Token: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        _l1Receiver: AddressLike,
        _l2Token: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}