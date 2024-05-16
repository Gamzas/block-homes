package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.entity.chat.*;
import com.blockhomes.tradings.entity.common.QImage;
import com.blockhomes.tradings.entity.common.RoleCategory;
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
            .innerJoin(qItem).on(qItem.eq(qChatRoom.item))
            .innerJoin(qWalletChatRoom).on(qWalletChatRoom.chatRoom.eq(qChatRoom))
            .innerJoin(qWallet).on(qWalletChatRoom.wallet.eq(qWallet))
            .select(qChatRoom.chatRoomNo)
            .where(qWalletChatRoom.roleCategory.eq(RoleCategory.BUYER)
                .and(qWallet.walletAddress.eq(walletAddress)))
            .fetchOne();
    }

    private JPQLQuery<ChatRoomInstance> getChatRoomsQuery() {
        return from(qChatRoom)
            .innerJoin(qChatRoom.item, qItem)
            .innerJoin(qWalletChatRoom).on(qWalletChatRoom.chatRoom.eq(qChatRoom))
            .innerJoin(qWalletChatRoom.wallet, qWallet)
            .innerJoin(qItemImage).on(qItemImage.item.eq(qItem))
            .innerJoin(qImage).on(qImage.eq(qItemImage.image))
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

        QImage qImageSub = new QImage("qImageSub");

        return from(qImage)
            .innerJoin(qItemImage.image, qImageSub)
            .select(qImageSub.imageUrl)
            .where(qItemImage.itemImageCategory.eq(ItemImageCategory.MAIN))
            .limit(1);
    }

}
