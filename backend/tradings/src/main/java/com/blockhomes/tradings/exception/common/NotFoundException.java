package com.blockhomes.tradings.exception.common;

public class NotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "Resource not found";
    }

}
