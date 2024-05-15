package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.entity.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {

    List<ChatRoom> getChatRoomByChatRoomId(String chatRoomId);

}
