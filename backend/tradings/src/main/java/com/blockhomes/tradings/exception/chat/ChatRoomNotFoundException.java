package com.blockhomes.tradings.exception.chat;

public class ChatRoomNotFoundException extends RuntimeException {

    @Override
    public String getMessage() {
        return "해당하는 채팅방이 존재하지 않습니다.";
    }

}
