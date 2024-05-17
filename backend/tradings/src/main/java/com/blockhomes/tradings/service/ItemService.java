package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.item.request.*;
import com.blockhomes.tradings.dto.item.response.*;
import org.springframework.web.multipart.MultipartFile;

public interface ItemService {

    RegisterItemRes registerItem(RegisterItemReq req, MultipartFile mainImage, MultipartFile[] roomImages, MultipartFile[] kitchenToiletImages);

    ListItemRes listItems(ListItemReq req);

    DetailItemRes getDetailItem(Integer itemNo, DetailItemReq req);

    DetailItemRes modifyItem(ModifyItemReq req);

    BaseResponseBody deleteItem(DeleteItemReq req);

    BaseResponseBody processTransaction(Integer itemNo, Integer process);

    LikeItemRes likeItem(LikeItemReq req);

    GetLikeItemsRes getLikeItems(GetLikeItemsReq req);

    BaseResponseBody deleteLikes(DeleteLikesReq req);


}
