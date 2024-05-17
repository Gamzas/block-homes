package com.blockhomes.tradings.dto.chat.response;

import com.blockhomes.tradings.entity.item.enums.TransactionType;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailChatRoomRes {

    private Integer itemNo;
    private Integer chatRoomNo;
    private String representativeImage;
    private String realEstateAddress;
    private Integer transactionType;
    private Long price;

    private List<ChatRes> chatList;

    @Builder
    public DetailChatRoomRes(
        Integer itemNo,
        Integer chatRoomNo,
        String representativeImage,
        String realEstateAddress,
        TransactionType transactionType,
        Long price
    ) {
        this.itemNo = itemNo;
        this.chatRoomNo = chatRoomNo;
        this.representativeImage = representativeImage;
        this.realEstateAddress = realEstateAddress;
        this.transactionType = TransactionType.enumToValue(transactionType);
        this.price = price;
    }

}
