package com.blockhomes.tradings.exception.chat;

import com.blockhomes.tradings.entity.chat.ContractStep;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class InvalidContractStepException extends RuntimeException {

    private final ContractStep contractStep;

    @Override
    public String getMessage() {
        return "계약 단계 수정 값이 올바르지 않습니다 (현재 : " + contractStep.getValue() + ")";
    }

}
