package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.entity.chat.ChatProvision;
import com.blockhomes.tradings.entity.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatProvisionRepository extends JpaRepository<ChatProvision, Integer> {

    List<ChatProvision> getChatProvisionsByChatRoom(ChatRoom chatRoom);

    void deleteAllByChatRoom(ChatRoom chatRoom);

}
