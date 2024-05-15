package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.item.enums.AdditionalOptionCategory;
import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum SpecialProvisionCategory {
    LIMIT_ADDITIONAL_MORTGAGE(1), // 잔금일까지 해당 주택에 근저당 추가 설정하지 않는다
    REPAIR_COSTS_TO_OWNER(2), // 임차기간 중 시설물 등 노후나 하자로 인한 고장 수선비는 임대인이 부담한다
    DEPOSIT_UNCONDITIONALLY_RETURN(3), // 계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다
    PETS_ALLOWED(4), // 반려동물을 허용하고 반려동물로 인한 훼손 등은 임차인이 수리한다
    TENANT_RESTORE_DAMAGE(5), // 세입자는 주택의 기본 시설을 훼손했을 경우 원상복구 한다
    MONTHLY_2_TERMINATION(6), // 월세 2개월 이상 연체 시 계약을 해지 한다
    ADDITIONAL_PAY_OVERDUE(7); // 별다른 사유없이 임대료 연체 시 법정 이자를 추가해 지급한다

    private final Integer value;

    SpecialProvisionCategory(Integer value) {
        this.value = value;
    }

    public static SpecialProvisionCategory valueToEnum(Integer value) {
        for (SpecialProvisionCategory s : SpecialProvisionCategory.values()) {
            if (s.getValue().equals(value)) return s;
        }

        throw new EnumNotMatchException(SpecialProvisionCategory.class, value);
    }

    public static Integer enumToValue(SpecialProvisionCategory specialProvisionCategory) {
        for (SpecialProvisionCategory s : SpecialProvisionCategory.values()) {
            if (s.equals(specialProvisionCategory)) return s.getValue();
        }

        return 0;
    }

}
