package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.item.request.RegisterItemReq;
import com.blockhomes.tradings.dto.item.response.RegisterItemRes;

public interface ItemService {

    RegisterItemRes registerItem(RegisterItemReq req);

}
