package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.exception.chat.InvalidContractStepException;
import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum ContractStep {
    CONTRACT_CREATED(0),
    BUYER_CONTRACT_REQUEST(1),
    SELLER_CONTRACT_ACCEPTED(2),
    BUYER_SPECIAL_PROVISION_REQUEST(3),
    SELLER_SPECIAL_PROVISION_REQUEST(4),
    BUYER_CONTRACT_SIGNED(5),
    SELLER_CONTRACT_SIGNED(6),
    BUYER_FINAL_CHECKED(7),
    SELLER_FINAL_CHECKED(8);

    private final Integer value;

    public static ContractStep getPreviousStep(ContractStep currentStep) {
        if (currentStep.equals(ContractStep.CONTRACT_CREATED)) {
            throw new InvalidContractStepException(currentStep);
        }

        return valueToEnum(currentStep.getValue() - 1);
    }

    public static ContractStep getNextStep(ContractStep currentStep) {
        if (currentStep.equals(ContractStep.SELLER_FINAL_CHECKED)) {
            throw new InvalidContractStepException(currentStep);
        }

        return valueToEnum(currentStep.getValue() + 1);
    }

    public static ContractStep valueToEnum(Integer value) {
        for (ContractStep c : ContractStep.values()) {
            if (c.getValue().equals(value)) return c;
        }

        throw new EnumNotMatchException(ContractStep.class, value);
    }

    public static Integer enumToValue(ContractStep contractStep) {
        for (ContractStep c : ContractStep.values()) {
            if (c.equals(contractStep)) return c.getValue();
        }

        return 0;
    }

}
