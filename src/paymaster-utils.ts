import { BytesLike, ethers } from "ethers";

import {
    Address,
    ApprovalBasedPaymasterInput,
    GeneralPaymasterInput,
    PaymasterInput,
    PaymasterParams,
} from "./types";

export const PAYMASTER_FLOW_ABI = new ethers.utils.Interface(require("../abi/IPaymasterFlow.json"));

export function getApprovalBasedPaymasterInput(paymasterInput: ApprovalBasedPaymasterInput): BytesLike {
    return PAYMASTER_FLOW_ABI.encodeFunctionData("approvalBased", [
        paymasterInput.token,
        paymasterInput.minimalAllowance,
        paymasterInput.innerInput,
    ]);
}

export function getGeneralPaymasterInput(paymasterInput: GeneralPaymasterInput): BytesLike {
    return PAYMASTER_FLOW_ABI.encodeFunctionData("general", [paymasterInput.innerInput]);
}

export function getPaymasterParams(
    paymasterAddress: Address,
    paymasterInput: PaymasterInput,
): PaymasterParams {
    if (paymasterInput.type == "General") {
        return {
            paymaster: paymasterAddress,
            paymasterInput: getGeneralPaymasterInput(paymasterInput),
        };
    } else {
        return {
            paymaster: paymasterAddress,
            paymasterInput: getApprovalBasedPaymasterInput(paymasterInput),
        };
    }
}
