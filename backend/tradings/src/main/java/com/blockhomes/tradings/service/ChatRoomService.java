package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.request.*;
import com.blockhomes.tradings.dto.chat.response.*;

public interface ChatRoomService {

    ListChatRoomsRes listChatRooms(ListChatRoomsReq req);

    CreateChatRoomRes createChatRoom(CreateChatRoomReq req);

    DetailChatRoomRes detailChatRoom(Integer chatRoomNo);

    Integer checkChatRoom(CheckChatRoomReq req);

    RegisterProvisionRes registerProvision(RegisterProvisionReq req);

    GetProvisionRes getSpecialProvision(GetProvisionReq req);

}
