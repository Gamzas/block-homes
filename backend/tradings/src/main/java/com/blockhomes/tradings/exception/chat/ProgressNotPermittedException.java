package com.blockhomes.tradings.exception.chat;

import com.blockhomes.tradings.entity.chat.ContractStep;
import com.blockhomes.tradings.entity.chat.RoleCategory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ProgressNotPermittedException extends RuntimeException {

    private final RoleCategory roleCategory;
    private final ContractStep contractStep;

    @Override
    public String getMessage() {
        return "해당 단계 (" + contractStep.getValue() + ") 를 진행시킬 차례가 아닙니다. (" + roleCategory.getRole() + ").";
    }
}
