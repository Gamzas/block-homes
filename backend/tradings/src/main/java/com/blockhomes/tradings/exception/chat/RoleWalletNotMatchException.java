package com.blockhomes.tradings.exception.chat;

import com.blockhomes.tradings.entity.chat.RoleCategory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RoleWalletNotMatchException extends RuntimeException {

    private final String senderWalletAddress;
    private final RoleCategory roleCategory;

    @Override
    public String getMessage() {
        return "요청한 사용자 " + senderWalletAddress + "와 역할 (" + roleCategory.getRole() + ") 이 일치하지 않습니다.";
    }

}
