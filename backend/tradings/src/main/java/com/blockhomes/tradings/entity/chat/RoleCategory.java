package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum RoleCategory {
    BUYER(1),
    SELLER(2);

    private final Integer value;

    RoleCategory(Integer value) {
        this.value = value;
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
