package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.item.ItemAdditionalOption;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemAdditionalOptionRepository extends JpaRepository<ItemAdditionalOption, Integer> {

    List<ItemAdditionalOption> getItemAdditionalOptionsByItem(Item item);

    void deleteAllByItem(Item item);

}
