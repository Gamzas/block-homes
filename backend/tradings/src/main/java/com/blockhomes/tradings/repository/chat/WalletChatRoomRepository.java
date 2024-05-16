package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.chat.WalletChatRoom;
import com.blockhomes.tradings.entity.wallet.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WalletChatRoomRepository extends JpaRepository<WalletChatRoom, Integer> {

    List<WalletChatRoom> getWalletChatRoomsByChatRoom(ChatRoom chatRoom);

    Optional<WalletChatRoom> getWalletChatRoomByWalletAndChatRoom(Wallet wallet, ChatRoom chatRoom);

    Optional<WalletChatRoom> getWalletChatRoomByChatRoomAndRoleCategory(ChatRoom chatRoom, RoleCategory roleCategory);

}
