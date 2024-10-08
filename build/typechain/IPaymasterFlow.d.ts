import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IPaymasterFlowInterface extends Interface {
    getFunction(nameOrSignature: "approvalBased" | "general"): FunctionFragment;
    encodeFunctionData(functionFragment: "approvalBased", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "general", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "approvalBased", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "general", data: BytesLike): Result;
}
export interface IPaymasterFlow extends BaseContract {
    connect(runner?: ContractRunner | null): IPaymasterFlow;
    waitForDeployment(): Promise<this>;
    interface: IPaymasterFlowInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    approvalBased: TypedContractMethod<[
        _token: AddressLike,
        _minAllowance: BigNumberish,
        _innerInput: BytesLike
    ], [
        void
    ], "nonpayable">;
    general: TypedContractMethod<[input: BytesLike], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approvalBased"): TypedContractMethod<[
        _token: AddressLike,
        _minAllowance: BigNumberish,
        _innerInput: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "general"): TypedContractMethod<[input: BytesLike], [void], "nonpayable">;
    filters: {};
}