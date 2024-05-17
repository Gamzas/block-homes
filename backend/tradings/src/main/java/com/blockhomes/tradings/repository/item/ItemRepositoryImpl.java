package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.dto.item.request.GetLikeItemsReq;
import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.response.ListItemInstance;
import com.blockhomes.tradings.entity.common.QImage;
import com.blockhomes.tradings.entity.item.*;
import com.blockhomes.tradings.entity.item.enums.*;
import com.blockhomes.tradings.entity.wallet.QLikes;
import com.blockhomes.tradings.entity.wallet.QWallet;
import com.blockhomes.tradings.util.AreaUtil;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPQLQuery;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.Objects;

@Slf4j
public class ItemRepositoryImpl extends QuerydslRepositorySupport implements ItemRepositoryCustom {

    private static final QItem qItem = QItem.item;
    private static final QItemImage qItemImage = QItemImage.itemImage;
    private static final QImage qImage = QImage.image;
    private static final QLikes qLikes = QLikes.likes;
    private static final QWallet qWallet = QWallet.wallet;

    public ItemRepositoryImpl() {
        super(Item.class);
    }

    @Override
    public List<ListItemInstance> listItemsByFiltering(ListItemReq req) {
        return getListItemsQuery()
            .where(inMap(req.getNorthEastLatitude(), req.getNorthEastLongitude(), req.getSouthWestLatitude(), req.getSouthWestLongitude())
                .and(qItem.transactionStatus.eq(TransactionStatus.READY))
                .and(filterRealEstateType(req.getRealEstateType()))
                .and(filterReportRank(req.getReportRank()))
                .and(filterTransactionType(req.getTransactionType()))
                .and(filterPrice(req.getMinPrice(), req.getMaxPrice()))
                .and(filterPyeong(req.getMinPyeong(), req.getMaxPyeong()))
                .and(qItemImage.itemImageCategory.eq(ItemImageCategory.MAIN))
            ).fetch();
    }

    @Override
    public List<ListItemInstance> listItemsByLikes(GetLikeItemsReq req) {
        return getItemWalletLikeQuery()
            .where(qWallet.walletAddress.eq(req.getUserAddress()))
            .fetch();
    }

    private JPQLQuery<ListItemInstance> getItemWalletLikeQuery() {
        return from(qItem)
            .innerJoin(qItemImage).on(qItemImage.item.eq(qItem))
            .innerJoin(qImage).on(qItemImage.image.eq(qImage))
            .innerJoin(qLikes).on(qLikes.item.eq(qItem))
            .innerJoin(qWallet).on(qWallet.eq(qLikes.wallet))
            .select(Projections.constructor(ListItemInstance.class,
                    qItem.itemNo,
                    qItem.realEstateDID,
                    qItem.roadNameAddress,
                    qItem.transactionType,
                    qItem.realEstateType,
                    qItem.reportRank,
                    qItem.transactionStatus,
                    qItem.area,
                    qItem.price,
                    qItem.monthlyPrice,
                    qItem.administrationCost,
                    qItem.contractMonths,
                    qItem.latitude,
                    qItem.longitude,
                    qImage.imageUrl
                ));
    }

    private BooleanExpression filterPyeong(Integer minPyeong, Integer maxPyeong) {
        if (Objects.isNull(minPyeong) || Objects.isNull(maxPyeong) || maxPyeong == 0) {
            return qItem.area.isNotNull();
        }

        Double minArea = AreaUtil.pyeongToSquareMeter(1.0 * minPyeong);
        Double maxArea = AreaUtil.pyeongToSquareMeter(1.0 * maxPyeong);

        return qItem.area.between(minArea, maxArea);
    }

    private BooleanExpression filterPrice(Long minPrice, Long maxPrice) {
        if (Objects.isNull(minPrice) || Objects.isNull(maxPrice) || maxPrice == 0) {
            return qItem.price.isNotNull();
        }
        return qItem.price.between(minPrice, maxPrice);
    }

    private BooleanExpression filterTransactionType(Integer transactionType) {
        if (Objects.isNull(transactionType) || transactionType == 0) {
            return qItem.transactionType.isNotNull();
        }
        return qItem.transactionType.eq(TransactionType.valueToEnum(transactionType));
    }

    private BooleanExpression filterReportRank(Integer reportRank) {
        if (Objects.isNull(reportRank) || reportRank == 0) {
            return qItem.reportRank.isNotNull();
        }
        return qItem.reportRank.eq(ReportRank.valueToEnum(reportRank));
    }

    private BooleanExpression filterRealEstateType(Integer realEstateType) {
        if (Objects.isNull(realEstateType) || realEstateType == 0) {
            return qItem.realEstateType.isNotNull();
        }
        return qItem.realEstateType.eq(RealEstateType.valueToEnum(realEstateType));
    }

    private BooleanExpression inMap(Double neLat, Double neLng, Double swLat, Double swLng) {
        return qItem.latitude.between(swLat, neLat)
            .and(qItem.longitude.between(swLng, neLng));
    }

    private JPQLQuery<ListItemInstance> getListItemsQuery() {
        return from(qItem)
            .innerJoin(qItemImage).on(qItemImage.item.eq(qItem))
            .innerJoin(qImage).on(qItemImage.image.eq(qImage))
            .select(
            Projections.constructor(ListItemInstance.class,
                qItem.itemNo,
                qItem.realEstateDID,
                qItem.roadNameAddress,
                qItem.transactionType,
                qItem.realEstateType,
                qItem.reportRank,
                qItem.transactionStatus,
                qItem.area,
                qItem.price,
                qItem.monthlyPrice,
                qItem.administrationCost,
                qItem.contractMonths,
                qItem.latitude,
                qItem.longitude,
                qImage.imageUrl
            ));
    }

}
