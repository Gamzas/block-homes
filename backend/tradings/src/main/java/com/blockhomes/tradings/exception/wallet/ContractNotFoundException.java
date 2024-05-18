package com.blockhomes.tradings.exception.wallet;

public class ContractNotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "해당하는 계약서를 찾을 수 없습니다.";
    }
}
