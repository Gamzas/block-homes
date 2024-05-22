package com.blockhomes.tradings.exception.common;

public class DateNotFormattedException extends RuntimeException {

    @Override
    public String getMessage() {
        return "Date 문자열이 형식에 맞지 않거나, 올바르지 않습니다.";
    }

}
