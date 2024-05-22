package com.blockhomes.tradings.entity.item.enums;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum RealEstateType {
    APARTMENT(1),
    VILLA(2),
    ONE_ROOM(3),
    OFFICE_TEL(4);

    private final Integer value;

    RealEstateType(Integer value) {
        this.value = value;
    }

    public static RealEstateType valueToEnum(Integer value) {
        for (RealEstateType r : RealEstateType.values()) {
            if (r.getValue().equals(value)) return r;
        }

        throw new EnumNotMatchException(RealEstateType.class, value);
    }

    public static Integer enumToValue(RealEstateType realEstateType) {
        for (RealEstateType r : RealEstateType.values()) {
            if (r.equals(realEstateType)) return r.getValue();
        }

        return 0;
    }

}
