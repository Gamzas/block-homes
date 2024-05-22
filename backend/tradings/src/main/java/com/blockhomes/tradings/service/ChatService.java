package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.payload.ChatPayload;
import com.blockhomes.tradings.dto.chat.response.ChatRes;

public interface ChatService {

    ChatRes enterUser(Integer chatRoomNo, ChatPayload enterPayload);

    ChatRes chatTalk(Integer chatRoomNo, ChatPayload chatPayload);

    ChatRes progressContract(Integer chatRoomNo, ChatPayload progressPayload);

//    ChatRes createSpecialProvision(Integer chatRoomNo, ChatPayload provisionPayload);

    ChatRes rejectProvision(Integer chatRoomNo, ChatPayload chatPayload);

}
