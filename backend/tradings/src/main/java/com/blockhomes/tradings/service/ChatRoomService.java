package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.request.CreateChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.CheckChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.ListChatRoomsReq;
import com.blockhomes.tradings.dto.chat.response.CreateChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.DetailChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.ListChatRoomsRes;

public interface ChatRoomService {

    ListChatRoomsRes listChatRooms(ListChatRoomsReq req);

    CreateChatRoomRes createChatRoom(CreateChatRoomReq req);

    DetailChatRoomRes detailChatRoom(Integer chatRoomNo);

    Integer checkChatRoom(CheckChatRoomReq req);
}
