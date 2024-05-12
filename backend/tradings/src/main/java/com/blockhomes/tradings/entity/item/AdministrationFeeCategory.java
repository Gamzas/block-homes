package com.blockhomes.tradings.entity.item;

import lombok.Getter;

@Getter
public enum AdministrationFeeCategory {
    ELECTRIC(1),
    GAS(2),
    WATER(3),
    INTERNET(4),
    TV(5);

    private final Integer value;

    AdministrationFeeCategory(Integer value) {
        this.value = value;
    }

    public static AdministrationFeeCategory valueToEnum(Integer value) {
        for (AdministrationFeeCategory a : AdministrationFeeCategory.values()) {
            if (a.getValue().equals(value)) return a;
        }

        return null;
    }

    public static Integer enumToValue(AdministrationFeeCategory administrationFeeCategory) {
        for (AdministrationFeeCategory a : AdministrationFeeCategory.values()) {
            if (a.equals(administrationFeeCategory)) return a.getValue();
        }

        return null;
    }

}
