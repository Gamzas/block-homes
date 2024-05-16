package com.blockhomes.tradings.exception.chat;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UnsupportedTypeException extends RuntimeException {

    private final String type;

    @Override
    public String getMessage() {
        return "지원되지 않는 파일 형식입니다 : " + type;
    }
}
