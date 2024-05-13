package com.blockhomes.tradings.exception.item;

public class ItemNotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "해당하는 매물 정보를 찾을 수 없습니다.";
    }
}
