package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.response.ListItemInstance;
import com.blockhomes.tradings.entity.item.*;
import com.blockhomes.tradings.entity.item.enums.RealEstateType;
import com.blockhomes.tradings.entity.item.enums.ReportRank;
import com.blockhomes.tradings.entity.item.enums.TransactionStatus;
import com.blockhomes.tradings.entity.item.enums.TransactionType;
import com.blockhomes.tradings.util.AreaUtil;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.Objects;

public class ItemRepositoryImpl extends QuerydslRepositorySupport implements ItemRepositoryCustom {

    private static final QItem qItem = QItem.item;

    public ItemRepositoryImpl() {
        super(Item.class);
    }

    @Override
    public List<ListItemInstance> listItemsByFiltering(ListItemReq req) {
        return getListItemsQuery()
            .where(
                qItem.transactionStatus.eq(TransactionStatus.READY)
                    .and(inMap(req.getNorthEastLatitude(), req.getNorthEastLongitude(), req.getSouthWestLatitude(), req.getSouthWestLongitude()))
                    .and(filterRealEstateType(req.getRealEstateType()))
                    .and(filterReportRank(req.getReportRank()))
                    .and(filterTransactionType(req.getTransactionType()))
                    .and(filterPrice(req.getMinPrice(), req.getMaxPrice()))
                    .and(filterPyeong(req.getMinPyeong(), req.getMaxPyeong()))
            ).fetch();
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
            return qItem.isNotNull();
        }
        return qItem.transactionType.eq(Expressions.constant(TransactionType.valueToEnum(transactionType)));
    }

    private BooleanExpression filterReportRank(Integer reportRank) {
        if (Objects.isNull(reportRank) || reportRank == 0) {
            return qItem.isNotNull();
        }
        return qItem.reportRank.eq(Expressions.constant(ReportRank.valueToEnum(reportRank)));
    }

    private BooleanExpression filterRealEstateType(Integer realEstateType) {
        if (Objects.isNull(realEstateType) || realEstateType == 0) {
            return qItem.isNotNull();
        }
        return qItem.realEstateType.eq(Expressions.constant(RealEstateType.valueToEnum(realEstateType)));
    }

    private BooleanExpression inMap(Double neLat, Double neLng, Double swLat, Double swLng) {
        return qItem.latitude.between(swLat, neLat)
            .and(qItem.latitude.between(swLng, neLng));
    }

    private JPQLQuery<ListItemInstance> getListItemsQuery() {
        return from(qItem).select(
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
                qItem.longitude
            ));
    }

}
