package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.dto.chat.response.ListChatRoomsRes;
import com.blockhomes.tradings.entity.chat.RoleCategory;

import java.util.List;
import java.util.Optional;

public interface ChatRoomRepositoryCustom {

    List<ChatRoomInstance> getChatRoomsByWalletAndRole(String walletAddress, RoleCategory roleCategory);

    Integer getChatRoomByItemNoAndWallet(Integer itemNo, String walletAddress);



}
