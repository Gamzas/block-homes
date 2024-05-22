package com.blockhomes.tradings.entity.item.enums;

import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum ItemImageCategory {
    MAIN(1),
    ROOMS(2),
    KITCHEN_TOILET(3);

    private final Integer value;

    ItemImageCategory(Integer value) {
        this.value = value;
    }

    public static ItemImageCategory valueToEnum(Integer value) {
        for (ItemImageCategory i : ItemImageCategory.values()) {
            if (i.getValue().equals(value)) return i;
        }

        throw new EnumNotMatchException(ItemImageCategory.class, value);
    }

    public static Integer enumToValue(ItemImageCategory itemImageCategory) {
        for (ItemImageCategory i : ItemImageCategory.values()) {
            if (i.equals(itemImageCategory)) return i.getValue();
        }

        return 0;
    }

}
