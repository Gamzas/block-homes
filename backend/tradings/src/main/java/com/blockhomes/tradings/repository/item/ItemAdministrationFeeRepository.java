package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.item.ItemAdministrationFee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemAdministrationFeeRepository extends JpaRepository<ItemAdministrationFee, Integer> {

    List<ItemAdministrationFee> getItemAdministrationFeesByItem(Item item);

    void deleteAllByItem(Item item);

}
