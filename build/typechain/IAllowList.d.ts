import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace IAllowList {
    type DepositStruct = {
        depositLimitation: boolean;
        depositCap: BigNumberish;
    };
    type DepositStructOutput = [
        depositLimitation: boolean,
        depositCap: bigint
    ] & {
        depositLimitation: boolean;
        depositCap: bigint;
    };
}
export interface IAllowListInterface extends Interface {
    getFunction(nameOrSignature: "canCall" | "getAccessMode" | "getTokenDepositLimitData" | "hasSpecialAccessToCall" | "setAccessMode" | "setBatchAccessMode" | "setBatchPermissionToCall" | "setDepositLimit" | "setPermissionToCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateAccessMode" | "UpdateCallPermission" | "UpdateDepositLimit"): EventFragment;
    encodeFunctionData(functionFragment: "canCall", values: [AddressLike, AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAccessMode", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTokenDepositLimitData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "hasSpecialAccessToCall", values: [AddressLike, AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setAccessMode", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBatchAccessMode", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setBatchPermissionToCall", values: [AddressLike[], AddressLike[], BytesLike[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setDepositLimit", values: [AddressLike, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPermissionToCall", values: [AddressLike, AddressLike, BytesLike, boolean]): string;
    decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccessMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenDepositLimitData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasSpecialAccessToCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBatchAccessMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBatchPermissionToCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDepositLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPermissionToCall", data: BytesLike): Result;
}
export declare namespace UpdateAccessModeEvent {
    type InputTuple = [
        target: AddressLike,
        previousMode: BigNumberish,
        newMode: BigNumberish
    ];
    type OutputTuple = [
        target: string,
        previousMode: bigint,
        newMode: bigint
    ];
    interface OutputObject {
        target: string;
        previousMode: bigint;
        newMode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateCallPermissionEvent {
    type InputTuple = [
        caller: AddressLike,
        target: AddressLike,
        functionSig: BytesLike,
        status: boolean
    ];
    type OutputTuple = [
        caller: string,
        target: string,
        functionSig: string,
        status: boolean
    ];
    interface OutputObject {
        caller: string;
        target: string;
        functionSig: string;
        status: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateDepositLimitEvent {
    type InputTuple = [
        l1Token: AddressLike,
        depositLimitation: boolean,
        depositCap: BigNumberish
    ];
    type OutputTuple = [
        l1Token: string,
        depositLimitation: boolean,
        depositCap: bigint
    ];
    interface OutputObject {
        l1Token: string;
        depositLimitation: boolean;
        depositCap: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IAllowList extends BaseContract {
    connect(runner?: ContractRunner | null): IAllowList;
    waitForDeployment(): Promise<this>;
    interface: IAllowListInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    canCall: TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike
    ], [
        boolean
    ], "view">;
    getAccessMode: TypedContractMethod<[_target: AddressLike], [bigint], "view">;
    getTokenDepositLimitData: TypedContractMethod<[
        _l1Token: AddressLike
    ], [
        IAllowList.DepositStructOutput
    ], "view">;
    hasSpecialAccessToCall: TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike
    ], [
        boolean
    ], "view">;
    setAccessMode: TypedContractMethod<[
        _target: AddressLike,
        _accessMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setBatchAccessMode: TypedContractMethod<[
        _targets: AddressLike[],
        _accessMode: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setBatchPermissionToCall: TypedContractMethod<[
        _callers: AddressLike[],
        _targets: AddressLike[],
        _functionSigs: BytesLike[],
        _enables: boolean[]
    ], [
        void
    ], "nonpayable">;
    setDepositLimit: TypedContractMethod<[
        _l1Token: AddressLike,
        _depositLimitation: boolean,
        _depositCap: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setPermissionToCall: TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike,
        _enable: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "canCall"): TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "getAccessMode"): TypedContractMethod<[_target: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getTokenDepositLimitData"): TypedContractMethod<[
        _l1Token: AddressLike
    ], [
        IAllowList.DepositStructOutput
    ], "view">;
    getFunction(nameOrSignature: "hasSpecialAccessToCall"): TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "setAccessMode"): TypedContractMethod<[
        _target: AddressLike,
        _accessMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBatchAccessMode"): TypedContractMethod<[
        _targets: AddressLike[],
        _accessMode: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBatchPermissionToCall"): TypedContractMethod<[
        _callers: AddressLike[],
        _targets: AddressLike[],
        _functionSigs: BytesLike[],
        _enables: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setDepositLimit"): TypedContractMethod<[
        _l1Token: AddressLike,
        _depositLimitation: boolean,
        _depositCap: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPermissionToCall"): TypedContractMethod<[
        _caller: AddressLike,
        _target: AddressLike,
        _functionSig: BytesLike,
        _enable: boolean
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "UpdateAccessMode"): TypedContractEvent<UpdateAccessModeEvent.InputTuple, UpdateAccessModeEvent.OutputTuple, UpdateAccessModeEvent.OutputObject>;
    getEvent(key: "UpdateCallPermission"): TypedContractEvent<UpdateCallPermissionEvent.InputTuple, UpdateCallPermissionEvent.OutputTuple, UpdateCallPermissionEvent.OutputObject>;
    getEvent(key: "UpdateDepositLimit"): TypedContractEvent<UpdateDepositLimitEvent.InputTuple, UpdateDepositLimitEvent.OutputTuple, UpdateDepositLimitEvent.OutputObject>;
    filters: {
        "UpdateAccessMode(address,uint8,uint8)": TypedContractEvent<UpdateAccessModeEvent.InputTuple, UpdateAccessModeEvent.OutputTuple, UpdateAccessModeEvent.OutputObject>;
        UpdateAccessMode: TypedContractEvent<UpdateAccessModeEvent.InputTuple, UpdateAccessModeEvent.OutputTuple, UpdateAccessModeEvent.OutputObject>;
        "UpdateCallPermission(address,address,bytes4,bool)": TypedContractEvent<UpdateCallPermissionEvent.InputTuple, UpdateCallPermissionEvent.OutputTuple, UpdateCallPermissionEvent.OutputObject>;
        UpdateCallPermission: TypedContractEvent<UpdateCallPermissionEvent.InputTuple, UpdateCallPermissionEvent.OutputTuple, UpdateCallPermissionEvent.OutputObject>;
        "UpdateDepositLimit(address,bool,uint256)": TypedContractEvent<UpdateDepositLimitEvent.InputTuple, UpdateDepositLimitEvent.OutputTuple, UpdateDepositLimitEvent.OutputObject>;
        UpdateDepositLimit: TypedContractEvent<UpdateDepositLimitEvent.InputTuple, UpdateDepositLimitEvent.OutputTuple, UpdateDepositLimitEvent.OutputObject>;
    };
}
