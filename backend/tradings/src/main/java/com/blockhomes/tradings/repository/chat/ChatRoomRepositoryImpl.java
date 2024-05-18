package com.blockhomes.tradings.repository.chat;

import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.dto.chat.response.DetailChatRoomRes;
import com.blockhomes.tradings.entity.chat.*;
import com.blockhomes.tradings.entity.common.QImage;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.item.QItem;
import com.blockhomes.tradings.entity.item.QItemImage;
import com.blockhomes.tradings.entity.item.enums.ItemImageCategory;
import com.blockhomes.tradings.entity.wallet.QWallet;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringPath;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.query.results.Builders.fetch;

@Slf4j
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
        QChat subChat = new QChat("subChat");

        JPQLQuery<ChatRoomInstance> query = from(qChatRoom)
            .innerJoin(qItem).on(qChatRoom.item.eq(qItem))
            .innerJoin(qWalletChatRoom).on(qChatRoom.eq(qWalletChatRoom.chatRoom))
            .innerJoin(qWallet).on(qWalletChatRoom.wallet.eq(qWallet))
            .leftJoin(qItemImage).on(qItem.eq(qItemImage.item)
                .and(qItemImage.itemImageCategory.eq(ItemImageCategory.MAIN)))
            .innerJoin(qImage).on(qItemImage.image.eq(qImage))
            .leftJoin(qChat).on(qChat.chatRoom.eq(qChatRoom)
                .and(qChat.createdAt.eq(
                    JPAExpressions.select(subChat.createdAt.max())
                        .from(subChat)
                        .where(subChat.chatRoom.eq(qChatRoom))
                ))
            )
            .select(Projections.constructor(ChatRoomInstance.class,
                qChatRoom.chatRoomNo,
                qItem.itemNo,
                qWalletChatRoom.roleCategory,
                qImage.imageUrl,
                qItem.roadNameAddress,
                qItem.transactionType,
                qItem.price,
                qChat.message,
                qItem.reportRank))
            .where(qWallet.walletAddress.eq(walletAddress)
                .and(qWalletChatRoom.roleCategory.eq(roleCategory)));

        log.info("{}", query);

        return query.fetch();
    }

    @Override
    public Integer getChatRoomNoByItemNoAndWallet(Integer itemNo, String walletAddress) {
        return from(qChatRoom)
            .innerJoin(qItem).on(qItem.eq(qChatRoom.item))
            .innerJoin(qWalletChatRoom).on(qWalletChatRoom.chatRoom.eq(qChatRoom))
            .innerJoin(qWallet).on(qWalletChatRoom.wallet.eq(qWallet))
            .select(qChatRoom.chatRoomNo)
            .where(qWalletChatRoom.roleCategory.eq(RoleCategory.BUYER)
                .and(qWallet.walletAddress.eq(walletAddress)))
            .fetchOne();
    }

    @Override
    public DetailChatRoomRes getDetailChatRoom(Integer chatRoomNo) {
        return from(qChatRoom)
            .innerJoin(qItem).on(qChatRoom.item.eq(qItem))
            .innerJoin(qItemImage).on(qItemImage.item.eq(qItem))
            .innerJoin(qImage).on(qImage.eq(qItemImage.image))
            .select(Projections.constructor(DetailChatRoomRes.class,
                qItem.itemNo,
                qChatRoom.chatRoomNo,
                (
                    JPAExpressions.select(qImage.imageUrl)
                        .from(qImage)
                        .innerJoin(qItemImage).on(qImage.eq(qItemImage.image))
                        .innerJoin(qItem).on(qItemImage.item.eq(qItem))
                        .innerJoin(qChatRoom).on(qItem.eq(qChatRoom.item))
                        .where(qItemImage.item.eq(qItem)
                            .and(qChatRoom.chatRoomNo.eq(chatRoomNo))
                            .and(qItemImage.itemImageCategory.eq(ItemImageCategory.MAIN)))
                        .orderBy(qImage.imageNo.asc())
                        .limit(1)
                ),
                qItem.roadNameAddress,
                qItem.transactionType,
                qItem.price))
            .where(qChatRoom.chatRoomNo.eq(chatRoomNo))
            .fetchOne();
    }

    @Override
    public List<ChatRes> getChatResList(Integer chatRoomNo) {
        JPQLQuery<ChatRes> chatQuery = from(qChat)
            .innerJoin(qChatRoom).on(qChat.chatRoom.eq(qChatRoom))
            .innerJoin(qWalletChatRoom).on(qChatRoom.eq(qWalletChatRoom.chatRoom))
            .innerJoin(qWallet).on(qWalletChatRoom.wallet.eq(qWallet))
            .leftJoin(qImage).on(qChat.image.eq(qImage))
            .select(Projections.constructor(ChatRes.class,
                qChat.chatNo,
                qChatRoom.chatRoomNo,
                qWallet.walletAddress,
                qWallet.name,
                qChat.messageType,
                qImage.imageUrl,
                qChatRoom.contractStep,
                qChat.message,
                qChat.createdAt
                ))
            .where(qChatRoom.chatRoomNo.eq(chatRoomNo));

        log.info("{}", chatQuery);

        return chatQuery.fetch();
    }

}
