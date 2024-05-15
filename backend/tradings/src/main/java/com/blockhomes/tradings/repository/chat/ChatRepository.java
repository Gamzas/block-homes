package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.entity.chat.Chat;
import com.blockhomes.tradings.entity.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Integer> {

    List<Chat> getChatsByChatRoom(ChatRoom chatRoom);

}
