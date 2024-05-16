package com.blockhomes.tradings.dto.chat.response;

import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.item.enums.ReportRank;
import com.blockhomes.tradings.entity.item.enums.TransactionType;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomInstance {
    private Integer chatRoomNo;
    private Integer itemNo;
    private Integer role;
    private String representativeImage;
    private String roadNameAddress;
    private Integer transactionType;
    private Long price;
    private String lastChat;
    private Integer reportRank;

    @Builder
    public ChatRoomInstance(
        Integer chatRoomNo,
        Integer itemNo,
        RoleCategory roleCategory,
        String representativeImage,
        String roadNameAddress,
        TransactionType transactionType,
        Long price,
        String lastChat,
        ReportRank reportRank
    ) {
        this.chatRoomNo = chatRoomNo;
        this.itemNo = itemNo;
        this.role = RoleCategory.enumToValue(roleCategory);
        this.representativeImage = representativeImage;
        this.roadNameAddress = roadNameAddress;
        this.transactionType = TransactionType.enumToValue(transactionType);
        this.price = price;
        this.lastChat = lastChat;
        this.reportRank = ReportRank.enumToValue(reportRank);
    }

}
