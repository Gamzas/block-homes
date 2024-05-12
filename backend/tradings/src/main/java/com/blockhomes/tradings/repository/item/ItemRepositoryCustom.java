package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.response.ListItemInstance;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ItemRepositoryCustom {

    List<ListItemInstance> listItemsByFiltering(ListItemReq req);

}
