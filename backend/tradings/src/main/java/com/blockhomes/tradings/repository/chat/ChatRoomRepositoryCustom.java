package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.dto.chat.response.DetailChatRoomRes;
import com.blockhomes.tradings.entity.common.RoleCategory;

import java.util.List;

public interface ChatRoomRepositoryCustom {

    List<ChatRoomInstance> getChatRoomsByWalletAndRole(String walletAddress, RoleCategory roleCategory);

    Integer getChatRoomNoByItemNoAndWallet(Integer itemNo, String walletAddress);

    ChatRoomInstance getChatRoomByItemNoAndWallet(Integer itemNo, String walletAddress);

    DetailChatRoomRes getDetailChatRoom(Integer chatRoomNo);

    List<ChatRes> getChatResList(Integer chatRoomNo);

}
