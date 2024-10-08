import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export type VerifierParamsStruct = {
    recursionNodeLevelVkHash: BytesLike;
    recursionLeafLevelVkHash: BytesLike;
    recursionCircuitsSetVksHash: BytesLike;
};
export type VerifierParamsStructOutput = [
    recursionNodeLevelVkHash: string,
    recursionLeafLevelVkHash: string,
    recursionCircuitsSetVksHash: string
] & {
    recursionNodeLevelVkHash: string;
    recursionLeafLevelVkHash: string;
    recursionCircuitsSetVksHash: string;
};
export type PriorityOperationStruct = {
    canonicalTxHash: BytesLike;
    expirationTimestamp: BigNumberish;
    layer2Tip: BigNumberish;
};
export type PriorityOperationStructOutput = [
    canonicalTxHash: string,
    expirationTimestamp: bigint,
    layer2Tip: bigint
] & {
    canonicalTxHash: string;
    expirationTimestamp: bigint;
    layer2Tip: bigint;
};
export type L2LogStruct = {
    l2ShardId: BigNumberish;
    isService: boolean;
    txNumberInBatch: BigNumberish;
    sender: AddressLike;
    key: BytesLike;
    value: BytesLike;
};
export type L2LogStructOutput = [
    l2ShardId: bigint,
    isService: boolean,
    txNumberInBatch: bigint,
    sender: string,
    key: string,
    value: string
] & {
    l2ShardId: bigint;
    isService: boolean;
    txNumberInBatch: bigint;
    sender: string;
    key: string;
    value: string;
};
export type L2MessageStruct = {
    txNumberInBatch: BigNumberish;
    sender: AddressLike;
    data: BytesLike;
};
export type L2MessageStructOutput = [
    txNumberInBatch: bigint,
    sender: string,
    data: string
] & {
    txNumberInBatch: bigint;
    sender: string;
    data: string;
};
export declare namespace Diamond {
    type FacetCutStruct = {
        facet: AddressLike;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
    };
    type FacetCutStructOutput = [
        facet: string,
        action: bigint,
        isFreezable: boolean,
        selectors: string[]
    ] & {
        facet: string;
        action: bigint;
        isFreezable: boolean;
        selectors: string[];
    };
    type DiamondCutDataStruct = {
        facetCuts: Diamond.FacetCutStruct[];
        initAddress: AddressLike;
        initCalldata: BytesLike;
    };
    type DiamondCutDataStructOutput = [
        facetCuts: Diamond.FacetCutStructOutput[],
        initAddress: string,
        initCalldata: string
    ] & {
        facetCuts: Diamond.FacetCutStructOutput[];
        initAddress: string;
        initCalldata: string;
    };
}
export declare namespace IMailbox {
    type L2CanonicalTransactionStruct = {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BigNumberish[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
    };
    type L2CanonicalTransactionStructOutput = [
        txType: bigint,
        from: bigint,
        to: bigint,
        gasLimit: bigint,
        gasPerPubdataByteLimit: bigint,
        maxFeePerGas: bigint,
        maxPriorityFeePerGas: bigint,
        paymaster: bigint,
        nonce: bigint,
        value: bigint,
        reserved: [bigint, bigint, bigint, bigint],
        data: string,
        signature: string,
        factoryDeps: bigint[],
        paymasterInput: string,
        reservedDynamic: string
    ] & {
        txType: bigint;
        from: bigint;
        to: bigint;
        gasLimit: bigint;
        gasPerPubdataByteLimit: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        paymaster: bigint;
        nonce: bigint;
        value: bigint;
        reserved: [bigint, bigint, bigint, bigint];
        data: string;
        signature: string;
        factoryDeps: bigint[];
        paymasterInput: string;
        reservedDynamic: string;
    };
}
export declare namespace IExecutor {
    type StoredBatchInfoStruct = {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
    };
    type StoredBatchInfoStructOutput = [
        batchNumber: bigint,
        batchHash: string,
        indexRepeatedStorageChanges: bigint,
        numberOfLayer1Txs: bigint,
        priorityOperationsHash: string,
        l2LogsTreeRoot: string,
        timestamp: bigint,
        commitment: string
    ] & {
        batchNumber: bigint;
        batchHash: string;
        indexRepeatedStorageChanges: bigint;
        numberOfLayer1Txs: bigint;
        priorityOperationsHash: string;
        l2LogsTreeRoot: string;
        timestamp: bigint;
        commitment: string;
    };
    type CommitBatchInfoStruct = {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
    };
    type CommitBatchInfoStructOutput = [
        batchNumber: bigint,
        timestamp: bigint,
        indexRepeatedStorageChanges: bigint,
        newStateRoot: string,
        numberOfLayer1Txs: bigint,
        priorityOperationsHash: string,
        bootloaderHeapInitialContentsHash: string,
        eventsQueueStateHash: string,
        systemLogs: string,
        totalL2ToL1Pubdata: string
    ] & {
        batchNumber: bigint;
        timestamp: bigint;
        indexRepeatedStorageChanges: bigint;
        newStateRoot: string;
        numberOfLayer1Txs: bigint;
        priorityOperationsHash: string;
        bootloaderHeapInitialContentsHash: string;
        eventsQueueStateHash: string;
        systemLogs: string;
        totalL2ToL1Pubdata: string;
    };
    type ProofInputStruct = {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
    };
    type ProofInputStructOutput = [
        recursiveAggregationInput: bigint[],
        serializedProof: bigint[]
    ] & {
        recursiveAggregationInput: bigint[];
        serializedProof: bigint[];
    };
}
export declare namespace IGetters {
    type FacetStruct = {
        addr: AddressLike;
        selectors: BytesLike[];
    };
    type FacetStructOutput = [addr: string, selectors: string[]] & {
        addr: string;
        selectors: string[];
    };
}
export interface IZkSyncInterface extends Interface {
    getFunction(nameOrSignature: "acceptAdmin" | "acceptGovernor" | "commitBatches" | "executeBatches" | "executeUpgrade" | "facetAddress" | "facetAddresses" | "facetFunctionSelectors" | "facets" | "finalizeEthWithdrawal" | "freezeDiamond" | "getFirstUnprocessedPriorityTx" | "getGovernor" | "getL2BootloaderBytecodeHash" | "getL2DefaultAccountBytecodeHash" | "getL2SystemContractsUpgradeBatchNumber" | "getL2SystemContractsUpgradeTxHash" | "getName" | "getPendingGovernor" | "getPriorityQueueSize" | "getPriorityTxMaxGasLimit" | "getProtocolVersion" | "getTotalBatchesCommitted" | "getTotalBatchesExecuted" | "getTotalBatchesVerified" | "getTotalPriorityTxs" | "getVerifier" | "getVerifierParams" | "isDiamondStorageFrozen" | "isEthWithdrawalFinalized" | "isFacetFreezable" | "isFunctionFreezable" | "isValidator" | "l2LogsRootHash" | "l2TransactionBaseCost" | "priorityQueueFrontOperation" | "proveBatches" | "proveL1ToL2TransactionStatus" | "proveL2LogInclusion" | "proveL2MessageInclusion" | "requestL2Transaction" | "revertBatches" | "setPendingAdmin" | "setPendingGovernor" | "setPorterAvailability" | "setPriorityTxMaxGasLimit" | "setValidator" | "storedBatchHash" | "unfreezeDiamond"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BlockCommit" | "BlockExecution" | "BlocksRevert" | "BlocksVerification" | "EthWithdrawalFinalized" | "ExecuteUpgrade" | "Freeze" | "IsPorterAvailableStatusUpdate" | "NewAdmin" | "NewGovernor" | "NewPendingAdmin" | "NewPendingGovernor" | "NewPriorityRequest" | "NewPriorityTxMaxGasLimit" | "Unfreeze" | "ValidatorStatusUpdate"): EventFragment;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptGovernor", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitBatches", values: [IExecutor.StoredBatchInfoStruct, IExecutor.CommitBatchInfoStruct[]]): string;
    encodeFunctionData(functionFragment: "executeBatches", values: [IExecutor.StoredBatchInfoStruct[]]): string;
    encodeFunctionData(functionFragment: "executeUpgrade", values: [Diamond.DiamondCutDataStruct]): string;
    encodeFunctionData(functionFragment: "facetAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeEthWithdrawal", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "freezeDiamond", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFirstUnprocessedPriorityTx", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGovernor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL2BootloaderBytecodeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL2DefaultAccountBytecodeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL2SystemContractsUpgradeBatchNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL2SystemContractsUpgradeTxHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingGovernor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriorityQueueSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriorityTxMaxGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProtocolVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalBatchesCommitted", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalBatchesExecuted", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalBatchesVerified", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalPriorityTxs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVerifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVerifierParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "isDiamondStorageFrozen", values?: undefined): string;
    encodeFunctionData(functionFragment: "isEthWithdrawalFinalized", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isFacetFreezable", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isFunctionFreezable", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "l2LogsRootHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "l2TransactionBaseCost", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "priorityQueueFrontOperation", values?: undefined): string;
    encodeFunctionData(functionFragment: "proveBatches", values: [
        IExecutor.StoredBatchInfoStruct,
        IExecutor.StoredBatchInfoStruct[],
        IExecutor.ProofInputStruct
    ]): string;
    encodeFunctionData(functionFragment: "proveL1ToL2TransactionStatus", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "proveL2LogInclusion", values: [BigNumberish, BigNumberish, L2LogStruct, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "proveL2MessageInclusion", values: [BigNumberish, BigNumberish, L2MessageStruct, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "requestL2Transaction", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BytesLike[],
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "revertBatches", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPendingAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPendingGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPorterAvailability", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setPriorityTxMaxGasLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setValidator", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "storedBatchHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unfreezeDiamond", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeEthWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeDiamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstUnprocessedPriorityTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2BootloaderBytecodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2DefaultAccountBytecodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2SystemContractsUpgradeBatchNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2SystemContractsUpgradeTxHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorityQueueSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorityTxMaxGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalBatchesCommitted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalBatchesExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalBatchesVerified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalPriorityTxs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVerifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVerifierParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDiamondStorageFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isEthWithdrawalFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFacetFreezable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionFreezable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2LogsRootHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2TransactionBaseCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priorityQueueFrontOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveL1ToL2TransactionStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveL2LogInclusion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveL2MessageInclusion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestL2Transaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPendingGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPorterAvailability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriorityTxMaxGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedBatchHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfreezeDiamond", data: BytesLike): Result;
}
export declare namespace BlockCommitEvent {
    type InputTuple = [
        batchNumber: BigNumberish,
        batchHash: BytesLike,
        commitment: BytesLike
    ];
    type OutputTuple = [
        batchNumber: bigint,
        batchHash: string,
        commitment: string
    ];
    interface OutputObject {
        batchNumber: bigint;
        batchHash: string;
        commitment: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BlockExecutionEvent {
    type InputTuple = [
        batchNumber: BigNumberish,
        batchHash: BytesLike,
        commitment: BytesLike
    ];
    type OutputTuple = [
        batchNumber: bigint,
        batchHash: string,
        commitment: string
    ];
    interface OutputObject {
        batchNumber: bigint;
        batchHash: string;
        commitment: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BlocksRevertEvent {
    type InputTuple = [
        totalBatchesCommitted: BigNumberish,
        totalBatchesVerified: BigNumberish,
        totalBatchesExecuted: BigNumberish
    ];
    type OutputTuple = [
        totalBatchesCommitted: bigint,
        totalBatchesVerified: bigint,
        totalBatchesExecuted: bigint
    ];
    interface OutputObject {
        totalBatchesCommitted: bigint;
        totalBatchesVerified: bigint;
        totalBatchesExecuted: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BlocksVerificationEvent {
    type InputTuple = [
        previousLastVerifiedBatch: BigNumberish,
        currentLastVerifiedBatch: BigNumberish
    ];
    type OutputTuple = [
        previousLastVerifiedBatch: bigint,
        currentLastVerifiedBatch: bigint
    ];
    interface OutputObject {
        previousLastVerifiedBatch: bigint;
        currentLastVerifiedBatch: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace EthWithdrawalFinalizedEvent {
    type InputTuple = [to: AddressLike, amount: BigNumberish];
    type OutputTuple = [to: string, amount: bigint];
    interface OutputObject {
        to: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExecuteUpgradeEvent {
    type InputTuple = [diamondCut: Diamond.DiamondCutDataStruct];
    type OutputTuple = [diamondCut: Diamond.DiamondCutDataStructOutput];
    interface OutputObject {
        diamondCut: Diamond.DiamondCutDataStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FreezeEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IsPorterAvailableStatusUpdateEvent {
    type InputTuple = [isPorterAvailable: boolean];
    type OutputTuple = [isPorterAvailable: boolean];
    interface OutputObject {
        isPorterAvailable: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewAdminEvent {
    type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
    type OutputTuple = [oldAdmin: string, newAdmin: string];
    interface OutputObject {
        oldAdmin: string;
        newAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewGovernorEvent {
    type InputTuple = [oldGovernor: AddressLike, newGovernor: AddressLike];
    type OutputTuple = [oldGovernor: string, newGovernor: string];
    interface OutputObject {
        oldGovernor: string;
        newGovernor: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPendingAdminEvent {
    type InputTuple = [
        oldPendingAdmin: AddressLike,
        newPendingAdmin: AddressLike
    ];
    type OutputTuple = [oldPendingAdmin: string, newPendingAdmin: string];
    interface OutputObject {
        oldPendingAdmin: string;
        newPendingAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPendingGovernorEvent {
    type InputTuple = [
        oldPendingGovernor: AddressLike,
        newPendingGovernor: AddressLike
    ];
    type OutputTuple = [
        oldPendingGovernor: string,
        newPendingGovernor: string
    ];
    interface OutputObject {
        oldPendingGovernor: string;
        newPendingGovernor: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPriorityRequestEvent {
    type InputTuple = [
        txId: BigNumberish,
        txHash: BytesLike,
        expirationTimestamp: BigNumberish,
        transaction: IMailbox.L2CanonicalTransactionStruct,
        factoryDeps: BytesLike[]
    ];
    type OutputTuple = [
        txId: bigint,
        txHash: string,
        expirationTimestamp: bigint,
        transaction: IMailbox.L2CanonicalTransactionStructOutput,
        factoryDeps: string[]
    ];
    interface OutputObject {
        txId: bigint;
        txHash: string;
        expirationTimestamp: bigint;
        transaction: IMailbox.L2CanonicalTransactionStructOutput;
        factoryDeps: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPriorityTxMaxGasLimitEvent {
    type InputTuple = [
        oldPriorityTxMaxGasLimit: BigNumberish,
        newPriorityTxMaxGasLimit: BigNumberish
    ];
    type OutputTuple = [
        oldPriorityTxMaxGasLimit: bigint,
        newPriorityTxMaxGasLimit: bigint
    ];
    interface OutputObject {
        oldPriorityTxMaxGasLimit: bigint;
        newPriorityTxMaxGasLimit: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnfreezeEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ValidatorStatusUpdateEvent {
    type InputTuple = [validatorAddress: AddressLike, isActive: boolean];
    type OutputTuple = [validatorAddress: string, isActive: boolean];
    interface OutputObject {
        validatorAddress: string;
        isActive: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IZkSync extends BaseContract {
    connect(runner?: ContractRunner | null): IZkSync;
    waitForDeployment(): Promise<this>;
    interface: IZkSyncInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    acceptAdmin: TypedContractMethod<[], [void], "nonpayable">;
    acceptGovernor: TypedContractMethod<[], [void], "nonpayable">;
    commitBatches: TypedContractMethod<[
        _lastCommittedBatchData: IExecutor.StoredBatchInfoStruct,
        _newBatchesData: IExecutor.CommitBatchInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    executeBatches: TypedContractMethod<[
        _batchesData: IExecutor.StoredBatchInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    executeUpgrade: TypedContractMethod<[
        _diamondCut: Diamond.DiamondCutDataStruct
    ], [
        void
    ], "nonpayable">;
    facetAddress: TypedContractMethod<[_selector: BytesLike], [string], "view">;
    facetAddresses: TypedContractMethod<[], [string[]], "view">;
    facetFunctionSelectors: TypedContractMethod<[
        _facet: AddressLike
    ], [
        string[]
    ], "view">;
    facets: TypedContractMethod<[], [IGetters.FacetStructOutput[]], "view">;
    finalizeEthWithdrawal: TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _message: BytesLike,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    freezeDiamond: TypedContractMethod<[], [void], "nonpayable">;
    getFirstUnprocessedPriorityTx: TypedContractMethod<[], [bigint], "view">;
    getGovernor: TypedContractMethod<[], [string], "view">;
    getL2BootloaderBytecodeHash: TypedContractMethod<[], [string], "view">;
    getL2DefaultAccountBytecodeHash: TypedContractMethod<[], [string], "view">;
    getL2SystemContractsUpgradeBatchNumber: TypedContractMethod<[
    ], [
        bigint
    ], "view">;
    getL2SystemContractsUpgradeTxHash: TypedContractMethod<[], [string], "view">;
    getName: TypedContractMethod<[], [string], "view">;
    getPendingGovernor: TypedContractMethod<[], [string], "view">;
    getPriorityQueueSize: TypedContractMethod<[], [bigint], "view">;
    getPriorityTxMaxGasLimit: TypedContractMethod<[], [bigint], "view">;
    getProtocolVersion: TypedContractMethod<[], [bigint], "view">;
    getTotalBatchesCommitted: TypedContractMethod<[], [bigint], "view">;
    getTotalBatchesExecuted: TypedContractMethod<[], [bigint], "view">;
    getTotalBatchesVerified: TypedContractMethod<[], [bigint], "view">;
    getTotalPriorityTxs: TypedContractMethod<[], [bigint], "view">;
    getVerifier: TypedContractMethod<[], [string], "view">;
    getVerifierParams: TypedContractMethod<[
    ], [
        VerifierParamsStructOutput
    ], "view">;
    isDiamondStorageFrozen: TypedContractMethod<[], [boolean], "view">;
    isEthWithdrawalFinalized: TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish
    ], [
        boolean
    ], "view">;
    isFacetFreezable: TypedContractMethod<[
        _facet: AddressLike
    ], [
        boolean
    ], "view">;
    isFunctionFreezable: TypedContractMethod<[
        _selector: BytesLike
    ], [
        boolean
    ], "view">;
    isValidator: TypedContractMethod<[_address: AddressLike], [boolean], "view">;
    l2LogsRootHash: TypedContractMethod<[
        _batchNumber: BigNumberish
    ], [
        string
    ], "view">;
    l2TransactionBaseCost: TypedContractMethod<[
        _gasPrice: BigNumberish,
        _l2GasLimit: BigNumberish,
        _l2GasPerPubdataByteLimit: BigNumberish
    ], [
        bigint
    ], "view">;
    priorityQueueFrontOperation: TypedContractMethod<[
    ], [
        PriorityOperationStructOutput
    ], "view">;
    proveBatches: TypedContractMethod<[
        _prevBatch: IExecutor.StoredBatchInfoStruct,
        _committedBatches: IExecutor.StoredBatchInfoStruct[],
        _proof: IExecutor.ProofInputStruct
    ], [
        void
    ], "nonpayable">;
    proveL1ToL2TransactionStatus: TypedContractMethod<[
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[],
        _status: BigNumberish
    ], [
        boolean
    ], "view">;
    proveL2LogInclusion: TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _index: BigNumberish,
        _log: L2LogStruct,
        _proof: BytesLike[]
    ], [
        boolean
    ], "view">;
    proveL2MessageInclusion: TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _index: BigNumberish,
        _message: L2MessageStruct,
        _proof: BytesLike[]
    ], [
        boolean
    ], "view">;
    requestL2Transaction: TypedContractMethod<[
        _contractL2: AddressLike,
        _l2Value: BigNumberish,
        _calldata: BytesLike,
        _l2GasLimit: BigNumberish,
        _l2GasPerPubdataByteLimit: BigNumberish,
        _factoryDeps: BytesLike[],
        _refundRecipient: AddressLike
    ], [
        string
    ], "payable">;
    revertBatches: TypedContractMethod<[
        _newLastBatch: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setPendingAdmin: TypedContractMethod<[
        _newPendingAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPendingGovernor: TypedContractMethod<[
        _newPendingGovernor: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPorterAvailability: TypedContractMethod<[
        _zkPorterIsAvailable: boolean
    ], [
        void
    ], "nonpayable">;
    setPriorityTxMaxGasLimit: TypedContractMethod<[
        _newPriorityTxMaxGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setValidator: TypedContractMethod<[
        _validator: AddressLike,
        _active: boolean
    ], [
        void
    ], "nonpayable">;
    storedBatchHash: TypedContractMethod<[
        _batchNumber: BigNumberish
    ], [
        string
    ], "view">;
    unfreezeDiamond: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "acceptAdmin"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "acceptGovernor"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "commitBatches"): TypedContractMethod<[
        _lastCommittedBatchData: IExecutor.StoredBatchInfoStruct,
        _newBatchesData: IExecutor.CommitBatchInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeBatches"): TypedContractMethod<[
        _batchesData: IExecutor.StoredBatchInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeUpgrade"): TypedContractMethod<[
        _diamondCut: Diamond.DiamondCutDataStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "facetAddress"): TypedContractMethod<[_selector: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "facetAddresses"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "facetFunctionSelectors"): TypedContractMethod<[_facet: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "facets"): TypedContractMethod<[], [IGetters.FacetStructOutput[]], "view">;
    getFunction(nameOrSignature: "finalizeEthWithdrawal"): TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _message: BytesLike,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "freezeDiamond"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "getFirstUnprocessedPriorityTx"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getGovernor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getL2BootloaderBytecodeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getL2DefaultAccountBytecodeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getL2SystemContractsUpgradeBatchNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getL2SystemContractsUpgradeTxHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPendingGovernor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriorityQueueSize"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPriorityTxMaxGasLimit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getProtocolVersion"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalBatchesCommitted"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalBatchesExecuted"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalBatchesVerified"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalPriorityTxs"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getVerifier"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getVerifierParams"): TypedContractMethod<[], [VerifierParamsStructOutput], "view">;
    getFunction(nameOrSignature: "isDiamondStorageFrozen"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "isEthWithdrawalFinalized"): TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isFacetFreezable"): TypedContractMethod<[_facet: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isFunctionFreezable"): TypedContractMethod<[_selector: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isValidator"): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "l2LogsRootHash"): TypedContractMethod<[_batchNumber: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "l2TransactionBaseCost"): TypedContractMethod<[
        _gasPrice: BigNumberish,
        _l2GasLimit: BigNumberish,
        _l2GasPerPubdataByteLimit: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "priorityQueueFrontOperation"): TypedContractMethod<[], [PriorityOperationStructOutput], "view">;
    getFunction(nameOrSignature: "proveBatches"): TypedContractMethod<[
        _prevBatch: IExecutor.StoredBatchInfoStruct,
        _committedBatches: IExecutor.StoredBatchInfoStruct[],
        _proof: IExecutor.ProofInputStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proveL1ToL2TransactionStatus"): TypedContractMethod<[
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[],
        _status: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "proveL2LogInclusion"): TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _index: BigNumberish,
        _log: L2LogStruct,
        _proof: BytesLike[]
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "proveL2MessageInclusion"): TypedContractMethod<[
        _l2BatchNumber: BigNumberish,
        _index: BigNumberish,
        _message: L2MessageStruct,
        _proof: BytesLike[]
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "requestL2Transaction"): TypedContractMethod<[
        _contractL2: AddressLike,
        _l2Value: BigNumberish,
        _calldata: BytesLike,
        _l2GasLimit: BigNumberish,
        _l2GasPerPubdataByteLimit: BigNumberish,
        _factoryDeps: BytesLike[],
        _refundRecipient: AddressLike
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "revertBatches"): TypedContractMethod<[_newLastBatch: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPendingAdmin"): TypedContractMethod<[_newPendingAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPendingGovernor"): TypedContractMethod<[
        _newPendingGovernor: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPorterAvailability"): TypedContractMethod<[_zkPorterIsAvailable: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPriorityTxMaxGasLimit"): TypedContractMethod<[
        _newPriorityTxMaxGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setValidator"): TypedContractMethod<[
        _validator: AddressLike,
        _active: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "storedBatchHash"): TypedContractMethod<[_batchNumber: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "unfreezeDiamond"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "BlockCommit"): TypedContractEvent<BlockCommitEvent.InputTuple, BlockCommitEvent.OutputTuple, BlockCommitEvent.OutputObject>;
    getEvent(key: "BlockExecution"): TypedContractEvent<BlockExecutionEvent.InputTuple, BlockExecutionEvent.OutputTuple, BlockExecutionEvent.OutputObject>;
    getEvent(key: "BlocksRevert"): TypedContractEvent<BlocksRevertEvent.InputTuple, BlocksRevertEvent.OutputTuple, BlocksRevertEvent.OutputObject>;
    getEvent(key: "BlocksVerification"): TypedContractEvent<BlocksVerificationEvent.InputTuple, BlocksVerificationEvent.OutputTuple, BlocksVerificationEvent.OutputObject>;
    getEvent(key: "EthWithdrawalFinalized"): TypedContractEvent<EthWithdrawalFinalizedEvent.InputTuple, EthWithdrawalFinalizedEvent.OutputTuple, EthWithdrawalFinalizedEvent.OutputObject>;
    getEvent(key: "ExecuteUpgrade"): TypedContractEvent<ExecuteUpgradeEvent.InputTuple, ExecuteUpgradeEvent.OutputTuple, ExecuteUpgradeEvent.OutputObject>;
    getEvent(key: "Freeze"): TypedContractEvent<FreezeEvent.InputTuple, FreezeEvent.OutputTuple, FreezeEvent.OutputObject>;
    getEvent(key: "IsPorterAvailableStatusUpdate"): TypedContractEvent<IsPorterAvailableStatusUpdateEvent.InputTuple, IsPorterAvailableStatusUpdateEvent.OutputTuple, IsPorterAvailableStatusUpdateEvent.OutputObject>;
    getEvent(key: "NewAdmin"): TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
    getEvent(key: "NewGovernor"): TypedContractEvent<NewGovernorEvent.InputTuple, NewGovernorEvent.OutputTuple, NewGovernorEvent.OutputObject>;
    getEvent(key: "NewPendingAdmin"): TypedContractEvent<NewPendingAdminEvent.InputTuple, NewPendingAdminEvent.OutputTuple, NewPendingAdminEvent.OutputObject>;
    getEvent(key: "NewPendingGovernor"): TypedContractEvent<NewPendingGovernorEvent.InputTuple, NewPendingGovernorEvent.OutputTuple, NewPendingGovernorEvent.OutputObject>;
    getEvent(key: "NewPriorityRequest"): TypedContractEvent<NewPriorityRequestEvent.InputTuple, NewPriorityRequestEvent.OutputTuple, NewPriorityRequestEvent.OutputObject>;
    getEvent(key: "NewPriorityTxMaxGasLimit"): TypedContractEvent<NewPriorityTxMaxGasLimitEvent.InputTuple, NewPriorityTxMaxGasLimitEvent.OutputTuple, NewPriorityTxMaxGasLimitEvent.OutputObject>;
    getEvent(key: "Unfreeze"): TypedContractEvent<UnfreezeEvent.InputTuple, UnfreezeEvent.OutputTuple, UnfreezeEvent.OutputObject>;
    getEvent(key: "ValidatorStatusUpdate"): TypedContractEvent<ValidatorStatusUpdateEvent.InputTuple, ValidatorStatusUpdateEvent.OutputTuple, ValidatorStatusUpdateEvent.OutputObject>;
    filters: {
        "BlockCommit(uint256,bytes32,bytes32)": TypedContractEvent<BlockCommitEvent.InputTuple, BlockCommitEvent.OutputTuple, BlockCommitEvent.OutputObject>;
        BlockCommit: TypedContractEvent<BlockCommitEvent.InputTuple, BlockCommitEvent.OutputTuple, BlockCommitEvent.OutputObject>;
        "BlockExecution(uint256,bytes32,bytes32)": TypedContractEvent<BlockExecutionEvent.InputTuple, BlockExecutionEvent.OutputTuple, BlockExecutionEvent.OutputObject>;
        BlockExecution: TypedContractEvent<BlockExecutionEvent.InputTuple, BlockExecutionEvent.OutputTuple, BlockExecutionEvent.OutputObject>;
        "BlocksRevert(uint256,uint256,uint256)": TypedContractEvent<BlocksRevertEvent.InputTuple, BlocksRevertEvent.OutputTuple, BlocksRevertEvent.OutputObject>;
        BlocksRevert: TypedContractEvent<BlocksRevertEvent.InputTuple, BlocksRevertEvent.OutputTuple, BlocksRevertEvent.OutputObject>;
        "BlocksVerification(uint256,uint256)": TypedContractEvent<BlocksVerificationEvent.InputTuple, BlocksVerificationEvent.OutputTuple, BlocksVerificationEvent.OutputObject>;
        BlocksVerification: TypedContractEvent<BlocksVerificationEvent.InputTuple, BlocksVerificationEvent.OutputTuple, BlocksVerificationEvent.OutputObject>;
        "EthWithdrawalFinalized(address,uint256)": TypedContractEvent<EthWithdrawalFinalizedEvent.InputTuple, EthWithdrawalFinalizedEvent.OutputTuple, EthWithdrawalFinalizedEvent.OutputObject>;
        EthWithdrawalFinalized: TypedContractEvent<EthWithdrawalFinalizedEvent.InputTuple, EthWithdrawalFinalizedEvent.OutputTuple, EthWithdrawalFinalizedEvent.OutputObject>;
        "ExecuteUpgrade(tuple)": TypedContractEvent<ExecuteUpgradeEvent.InputTuple, ExecuteUpgradeEvent.OutputTuple, ExecuteUpgradeEvent.OutputObject>;
        ExecuteUpgrade: TypedContractEvent<ExecuteUpgradeEvent.InputTuple, ExecuteUpgradeEvent.OutputTuple, ExecuteUpgradeEvent.OutputObject>;
        "Freeze()": TypedContractEvent<FreezeEvent.InputTuple, FreezeEvent.OutputTuple, FreezeEvent.OutputObject>;
        Freeze: TypedContractEvent<FreezeEvent.InputTuple, FreezeEvent.OutputTuple, FreezeEvent.OutputObject>;
        "IsPorterAvailableStatusUpdate(bool)": TypedContractEvent<IsPorterAvailableStatusUpdateEvent.InputTuple, IsPorterAvailableStatusUpdateEvent.OutputTuple, IsPorterAvailableStatusUpdateEvent.OutputObject>;
        IsPorterAvailableStatusUpdate: TypedContractEvent<IsPorterAvailableStatusUpdateEvent.InputTuple, IsPorterAvailableStatusUpdateEvent.OutputTuple, IsPorterAvailableStatusUpdateEvent.OutputObject>;
        "NewAdmin(address,address)": TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        NewAdmin: TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        "NewGovernor(address,address)": TypedContractEvent<NewGovernorEvent.InputTuple, NewGovernorEvent.OutputTuple, NewGovernorEvent.OutputObject>;
        NewGovernor: TypedContractEvent<NewGovernorEvent.InputTuple, NewGovernorEvent.OutputTuple, NewGovernorEvent.OutputObject>;
        "NewPendingAdmin(address,address)": TypedContractEvent<NewPendingAdminEvent.InputTuple, NewPendingAdminEvent.OutputTuple, NewPendingAdminEvent.OutputObject>;
        NewPendingAdmin: TypedContractEvent<NewPendingAdminEvent.InputTuple, NewPendingAdminEvent.OutputTuple, NewPendingAdminEvent.OutputObject>;
        "NewPendingGovernor(address,address)": TypedContractEvent<NewPendingGovernorEvent.InputTuple, NewPendingGovernorEvent.OutputTuple, NewPendingGovernorEvent.OutputObject>;
        NewPendingGovernor: TypedContractEvent<NewPendingGovernorEvent.InputTuple, NewPendingGovernorEvent.OutputTuple, NewPendingGovernorEvent.OutputObject>;
        "NewPriorityRequest(uint256,bytes32,uint64,tuple,bytes[])": TypedContractEvent<NewPriorityRequestEvent.InputTuple, NewPriorityRequestEvent.OutputTuple, NewPriorityRequestEvent.OutputObject>;
        NewPriorityRequest: TypedContractEvent<NewPriorityRequestEvent.InputTuple, NewPriorityRequestEvent.OutputTuple, NewPriorityRequestEvent.OutputObject>;
        "NewPriorityTxMaxGasLimit(uint256,uint256)": TypedContractEvent<NewPriorityTxMaxGasLimitEvent.InputTuple, NewPriorityTxMaxGasLimitEvent.OutputTuple, NewPriorityTxMaxGasLimitEvent.OutputObject>;
        NewPriorityTxMaxGasLimit: TypedContractEvent<NewPriorityTxMaxGasLimitEvent.InputTuple, NewPriorityTxMaxGasLimitEvent.OutputTuple, NewPriorityTxMaxGasLimitEvent.OutputObject>;
        "Unfreeze()": TypedContractEvent<UnfreezeEvent.InputTuple, UnfreezeEvent.OutputTuple, UnfreezeEvent.OutputObject>;
        Unfreeze: TypedContractEvent<UnfreezeEvent.InputTuple, UnfreezeEvent.OutputTuple, UnfreezeEvent.OutputObject>;
        "ValidatorStatusUpdate(address,bool)": TypedContractEvent<ValidatorStatusUpdateEvent.InputTuple, ValidatorStatusUpdateEvent.OutputTuple, ValidatorStatusUpdateEvent.OutputObject>;
        ValidatorStatusUpdate: TypedContractEvent<ValidatorStatusUpdateEvent.InputTuple, ValidatorStatusUpdateEvent.OutputTuple, ValidatorStatusUpdateEvent.OutputObject>;
    };
}