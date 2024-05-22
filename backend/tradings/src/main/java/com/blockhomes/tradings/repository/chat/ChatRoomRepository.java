package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.entity.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer>, ChatRoomRepositoryCustom {

    Optional<ChatRoom> getChatRoomByChatRoomNo(Integer chatRoomNo);

}
