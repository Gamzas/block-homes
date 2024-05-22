package com.blockhomes.tradings.exception.wallet;

public class WalletContractNotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "해당하는 계약서-지갑 연관관계 테이블을 찾을 수 없습니다.";
    }

}
