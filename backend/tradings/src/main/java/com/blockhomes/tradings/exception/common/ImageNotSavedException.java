package com.blockhomes.tradings.exception.common;

public class ImageNotSavedException extends RuntimeException {

    @Override
    public String getMessage() {
        return "이미지 저장에 실패하였습니다.";
    }

}
