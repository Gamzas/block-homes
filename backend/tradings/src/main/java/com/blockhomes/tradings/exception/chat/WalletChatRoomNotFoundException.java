package com.blockhomes.tradings.exception.chat;

public class WalletChatRoomNotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "채팅방 유저 연관 관계 테이블이 존재하지 않습니다.";
    }

}
