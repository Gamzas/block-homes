package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum ContractStep {
    CONTRACT_CREATED(0, "거래 대화방이 생성되었어요."),
    BUYER_CONTRACT_REQUEST(1, "구매자가 판매자에게 거래 요청을 보냈어요."),
    SELLER_CONTRACT_ACCEPTED(2, "판매자가 부동산 거래 요청을 수락했어요."),
    BUYER_SPECIAL_PROVISION_REQUEST(3, "구매자가 특약 사항 내용을 입력했어요."),
    SELLER_SPECIAL_PROVISION_REQUEST(4, "판매자가 특약 사항 내용을 입력했어요."),
    BUYER_SPECIAL_PROVISION_ACCEPTED(5, "구매자가 특약 사항 요청을 수락했어요."),
    SELLER_SPECIAL_PROVISION_ACCEPTED(6, "구매자가 특약 사항 요청을 수락했어요."),
    BUYER_CONTRACT_SIGNED(7, "구매자가 계약서에 서명했어요."),
    SELLER_CONTRACT_SIGNED(8, "판매자가 계약서에 서명했어요."),
    BUYER_FINAL_CHECKED(9, "구매자가 계약을 최종 확인했어요."),
    SELLER_FINAL_CHECKED(10, "판매자가 계약을 최종 확인했어요."),
    CONTRACT_DONE(11, "계약이 완료되었어요.");

    private final Integer value;
    private final String messageText;

    public static Boolean checkRoleStep(RoleCategory roleCategory, ContractStep contractStep) {
        if (Objects.isNull(roleCategory) || Objects.isNull(contractStep)) return false;

        if (roleCategory.equals(RoleCategory.BUYER)) {
            return contractStep.getValue() % 2 == 0;
        } else if (roleCategory.equals(RoleCategory.SELLER)) {
            return contractStep.getValue() % 2 != 0;
        }

        return false;
    }

    public static Boolean isProvisionStep(ContractStep contractStep) {
        if (Objects.isNull(contractStep)) return false;
        return contractStep.getValue() == 3 || contractStep.getValue() == 4;
    }

    public static ContractStep getNextContractStep(ContractStep contractStep) {
        if (contractStep.getValue() == 11) return CONTRACT_DONE;
        return valueToEnum(contractStep.getValue() + 1);
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
