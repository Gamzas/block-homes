package com.blockhomes.tradings.entity.item.enums;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum TransactionType {
    MONTHLY_RENT(1),
    LONG_TERM_RENT(2),
    TRADING(3);

    private final Integer value;

    TransactionType(Integer value) {
        this.value = value;
    }

    public static TransactionType valueToEnum(Integer value) {
        for (TransactionType t : TransactionType.values()) {
            if (t.getValue().equals(value)) return t;
        }

        throw new EnumNotMatchException(TransactionType.class, value);
    }

    public static Integer enumToValue(TransactionType transactionType) {
        for (TransactionType t : TransactionType.values()) {
            if (t.equals(transactionType)) return t.getValue();
        }

        return 0;
    }

}
