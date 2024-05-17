package com.blockhomes.tradings.repository.common;

import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.common.QImage;
import com.blockhomes.tradings.entity.item.QItem;
import com.blockhomes.tradings.entity.item.QItemImage;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class ImageRepositoryImpl extends QuerydslRepositorySupport implements ImageRepositoryCustom {

    private static final QImage qImage = QImage.image;
    private static final QItemImage qItemImage = QItemImage.itemImage;
    private static final QItem qItem = QItem.item;

    public ImageRepositoryImpl() {
        super(Image.class);
    }

    @Override
    public List<String> getImageUrlsByItemNo(Integer itemNo) {
        return from(qImage)
            .innerJoin(qItemImage).on(qImage.eq(qItemImage.image))
            .innerJoin(qItem).on(qItemImage.item.eq(qItem))
            .select(qImage.imageUrl)
            .where(qItem.itemNo.eq(itemNo))
            .fetch();
    }

    @Override
    public void deleteImageByItemNo(Integer itemNo) {
        delete(qImage).where(
            qImage.in(
                from(qItemImage)
                    .innerJoin(qItem).on(qItemImage.item.eq(qItem))
                    .select(qImage)
                    .where(qItem.itemNo.eq(itemNo))
            )
        ).execute();
    }

}
