/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Il1SharedBridge } from "./Il1SharedBridge";

export class Il1SharedBridgeFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Il1SharedBridge {
    return new Contract(address, _abi, signerOrProvider) as Il1SharedBridge;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_l1WethAddress",
        type: "address",
      },
      {
        internalType: "contract IBridgehub",
        name: "_bridgehub",
        type: "address",
      },
      {
        internalType: "contract IL1ERC20Bridge",
        name: "_legacyBridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txDataHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "l2DepositTxHash",
        type: "bytes32",
      },
    ],
    name: "BridgehubDepositFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txDataHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BridgehubDepositInitiatedSharedBridge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimedFailedDepositSharedBridge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "l2DepositTxHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositInitiatedSharedBridge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthWithdrawalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawalFinalizedSharedBridge",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgehub",
    outputs: [
      {
        internalType: "contract IBridgehub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_txDataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_txHash",
        type: "bytes32",
      },
    ],
    name: "bridgehubConfirmL2Transaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_prevMsgSender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "bridgehubDeposit",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "magicValue",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "l2Contract",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "l2Calldata",
            type: "bytes",
          },
          {
            internalType: "bytes[]",
            name: "factoryDeps",
            type: "bytes[]",
          },
          {
            internalType: "bytes32",
            name: "txDataHash",
            type: "bytes32",
          },
        ],
        internalType: "struct L2TransactionRequestTwoBridgesInner",
        name: "request",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_prevMsgSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "bridgehubDepositBaseToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_depositSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_l2TxHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBatch",
        type: "uint16",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claimFailedDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_l2TxHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBatch",
        type: "uint16",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claimFailedDepositLegacyErc20Bridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "l2DepositTxHash",
        type: "bytes32",
      },
    ],
    name: "depositHappened",
    outputs: [
      {
        internalType: "bytes32",
        name: "depositDataHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2TxGasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2TxGasPerPubdataByte",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundRecipient",
        type: "address",
      },
    ],
    name: "depositLegacyErc20Bridge",
    outputs: [
      {
        internalType: "bytes32",
        name: "l2TxHash",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBatch",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "finalizeWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBatch",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "finalizeWithdrawalLegacyErc20Bridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eraIsEthWithdrawalFinalizedStorageSwitchBatchNumber",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_l2BridgeAddress",
        type: "address",
      },
    ],
    name: "initializeChainGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "l2ToL1MessageNumber",
        type: "uint256",
      },
    ],
    name: "isWithdrawalFinalizedShared",
    outputs: [
      {
        internalType: "bool",
        name: "isFinalized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1WethAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "l2BridgeAddress",
    outputs: [
      {
        internalType: "address",
        name: "l2Bridge",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "legacyBridge",
    outputs: [
      {
        internalType: "contract IL1ERC20Bridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];