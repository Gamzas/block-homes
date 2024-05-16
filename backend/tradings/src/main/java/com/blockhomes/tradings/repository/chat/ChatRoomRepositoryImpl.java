package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.entity.chat.*;
import com.blockhomes.tradings.entity.common.QImage;
import com.blockhomes.tradings.entity.item.QItem;
import com.blockhomes.tradings.entity.item.QItemImage;
import com.blockhomes.tradings.entity.item.enums.ItemImageCategory;
import com.blockhomes.tradings.entity.wallet.QWallet;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class ChatRoomRepositoryImpl extends QuerydslRepositorySupport implements ChatRoomRepositoryCustom {

    private static final QChatRoom qChatRoom = QChatRoom.chatRoom;
    private static final QWalletChatRoom qWalletChatRoom = QWalletChatRoom.walletChatRoom;
    private static final QItem qItem = QItem.item;
    private static final QItemImage qItemImage = QItemImage.itemImage;
    private static final QImage qImage = QImage.image;
    private static final QChat qChat = QChat.chat;
    private static final QWallet qWallet = QWallet.wallet;

    public ChatRoomRepositoryImpl() {
        super(ChatRoom.class);
    }

    @Override
    public List<ChatRoomInstance> getChatRoomsByWalletAndRole(String walletAddress, RoleCategory roleCategory) {
        return getChatRoomsQuery()
            .where(qWallet.walletAddress.eq(walletAddress)
                .and(qWalletChatRoom.roleCategory.eq(roleCategory)))
            .fetch();
    }

    @Override
    public Integer getChatRoomByItemNoAndWallet(Integer itemNo, String walletAddress) {
        return from(qChatRoom)
            .innerJoin(qChatRoom.item, qItem)
            .innerJoin(qChatRoom, qWalletChatRoom.chatRoom)
            .innerJoin(qWalletChatRoom.wallet, qWallet)
            .select(qChatRoom.chatRoomNo)
            .where(qWalletChatRoom.roleCategory.eq(RoleCategory.BUYER)
                .and(qWallet.walletAddress.eq(walletAddress)))
            .fetchOne();
    }

    private JPQLQuery<ChatRoomInstance> getChatRoomsQuery() {
        return from(qChatRoom)
            .innerJoin(qChatRoom.item, qItem)
            .innerJoin(qChatRoom, qWalletChatRoom.chatRoom)
            .innerJoin(qWalletChatRoom.wallet, qWallet)
            .innerJoin(qItem, qItemImage.item)
            .innerJoin(qItemImage.image, qImage)
            .select(Projections.constructor(ChatRoomInstance.class,
                qChatRoom.chatRoomNo,
                qItem.itemNo,
                qWalletChatRoom.roleCategory,
                ExpressionUtils.as(representativeImageSubQuery(), "representativeImage"),
                qItem.roadNameAddress,
                qItem.transactionType,
                qItem.price,
                ExpressionUtils.as(latestChatSubQuery(), "lastChat"),
                qItem.reportRank
            ));
    }

    private JPQLQuery<String> latestChatSubQuery() {
        return from(qChat)
            .select(qChat.message)
            .where(qChat.chatRoom.eq(qChatRoom))
            .orderBy(qChat.createdAt.desc())
            .limit(1);
    }

    private JPQLQuery<String> representativeImageSubQuery() {
        return from(qImage)
            .innerJoin(qImage, qItemImage.image)
            .select(qImage.imageUrl)
            .where(qItemImage.itemImageCategory.eq(ItemImageCategory.MAIN))
            .limit(1);
    }

}
