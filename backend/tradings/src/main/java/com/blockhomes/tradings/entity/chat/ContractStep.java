package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum ContractStep {

    CONTRACT_REQUEST(1),
    CONTRACT_ACCEPTED(2),
    SPECIAL_PROVISION_REQUEST(3),
    SPECIAL_PROVISION_ACCEPTED(4),
    SELLER_CONTRACT_SIGNED(5),
    BUYER_CONTRACT_SIGNED(6),
    BUYER_FINAL_CHECKED(7),
    SELLER_FINAL_CHECKED(8),
    CONTRACT_DONE(9);

    private final Integer value;

    ContractStep(Integer value) {
        this.value = value;
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
