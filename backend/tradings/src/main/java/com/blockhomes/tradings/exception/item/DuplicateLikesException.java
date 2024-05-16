package com.blockhomes.tradings.exception.item;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DuplicateLikesException extends RuntimeException {

    private final String walletAddress;
    private final Integer itemNo;

    @Override
    public String getMessage() {
        return "해당 사용자 " + walletAddress + "의 " + itemNo + "번 매물 좋아요는 이미 존재합니다.";
    }
}
