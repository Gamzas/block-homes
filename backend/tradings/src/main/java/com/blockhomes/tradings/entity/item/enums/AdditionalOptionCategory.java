package com.blockhomes.tradings.entity.item.enums;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum AdditionalOptionCategory {
    AIR_CONDITIONER(1),
    REFRIGERATOR(2),
    WASHING_MACHINE(3),
    GAS_RANGE(4),
    INDUCTION(5),
    MICROWAVE(6),
    DESK(7),
    BOOKSHELF(8),
    BED(9),
    CLOSET(10),
    SHOE_CLOSET(11),
    SINK(12);

    private final Integer value;

    AdditionalOptionCategory(Integer value) {
        this.value = value;
    }

    public static AdditionalOptionCategory valueToEnum(Integer value) {
        for (AdditionalOptionCategory a : AdditionalOptionCategory.values()) {
            if (a.getValue().equals(value)) return a;
        }

        throw new EnumNotMatchException(AdditionalOptionCategory.class, value);
    }

    public static Integer enumToValue(AdditionalOptionCategory additionalOptionCategory) {
        for (AdditionalOptionCategory a : AdditionalOptionCategory.values()) {
            if (a.equals(additionalOptionCategory)) return a.getValue();
        }

        return 0;
    }

}
