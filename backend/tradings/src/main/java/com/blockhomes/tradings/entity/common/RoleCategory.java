package com.blockhomes.tradings.entity.common;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum RoleCategory {
    BUYER(1, "구매자"),
    SELLER(2, "판매자");

    private final Integer value;
    private final String role;

    RoleCategory(Integer value, String role) {
        this.value = value;
        this.role = role;
    }

    public static RoleCategory valueToEnum(Integer value) {
        for (RoleCategory r : RoleCategory.values()) {
            if (r.getValue().equals(value)) return r;
        }

        throw new EnumNotMatchException(RoleCategory.class, value);
    }

    public static Integer enumToValue(RoleCategory roleCategory) {
        for (RoleCategory r : RoleCategory.values()) {
            if (r.equals(roleCategory)) return r.getValue();
        }

        return 0;
    }

}
