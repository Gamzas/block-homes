package com.blockhomes.tradings.repository.common;

import com.blockhomes.tradings.entity.item.enums.ItemImageCategory;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ImageRepositoryCustom {

    List<String> getImageUrlsByItemNo(Integer itemNo);

    void deleteImageByItemNo(Integer itemNo);

    String getMainImageUrlByItemNo(Integer itemNo);

    List<String> getImageUrlsByItemNoAndCategory(Integer itemNo, ItemImageCategory itemImageCategory);

}
