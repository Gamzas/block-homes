package com.blockhomes.tradings.exception.chat;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DuplicateChatRoomException extends RuntimeException {

    private final Integer itemNo;
    private final String walletAddress;

    @Override
    public String getMessage() {
        return "매물 번호 " + itemNo + ", 판매자 " + walletAddress + " 에 해당하는 채팅방이 이미 존재합니다.";
    }
}
