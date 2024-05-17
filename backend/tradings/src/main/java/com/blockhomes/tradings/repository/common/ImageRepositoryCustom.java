package com.blockhomes.tradings.repository.common;

import java.util.List;

public interface ImageRepositoryCustom {

    List<String> getImageUrlsByItemNo(Integer itemNo);

    void deleteImageByItemNo(Integer itemNo);

}
