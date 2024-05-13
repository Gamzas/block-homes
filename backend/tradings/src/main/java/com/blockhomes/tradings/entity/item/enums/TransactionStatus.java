package com.blockhomes.tradings.entity.item.enums;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum TransactionStatus {
    READY(1),
    ON_TRANSACTION(2),
    COMPLETED(3);

    private final Integer value;

    TransactionStatus(Integer value) {
        this.value = value;
    }

    public static TransactionStatus valueToEnum(Integer value) {
        for (TransactionStatus t : TransactionStatus.values()) {
            if (t.getValue().equals(value)) return t;
        }

        throw new EnumNotMatchException(TransactionStatus.class, value);
    }

    public static Integer enumToValue(TransactionStatus transactionStatus) {
        for (TransactionStatus t : TransactionStatus.values()) {
            if (t.equals(transactionStatus)) return t.getValue();
        }

        return 0;
    }

}
