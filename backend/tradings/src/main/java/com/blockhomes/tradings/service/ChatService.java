package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.payload.ChatPayload;
import com.blockhomes.tradings.dto.chat.payload.EnterPayload;
import com.blockhomes.tradings.dto.chat.payload.ProgressPayload;
import com.blockhomes.tradings.dto.chat.payload.ProvisionPayload;
import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.dto.chat.response.ProgressRes;
import com.blockhomes.tradings.dto.chat.response.ProvisionRes;

public interface ChatService {

    ChatRes enterUser(Integer chatRoomNo, ChatPayload enterPayload);

    ChatRes chatTalk(Integer chatRoomNo, ChatPayload chatPayload);

    ChatRes progressContract(Integer chatRoomNo, ChatPayload progressPayload);

//    ChatRes createSpecialProvision(Integer chatRoomNo, ChatPayload provisionPayload);

    ChatRes rejectProvision(Integer chatRoomNo, ChatPayload chatPayload);

}
