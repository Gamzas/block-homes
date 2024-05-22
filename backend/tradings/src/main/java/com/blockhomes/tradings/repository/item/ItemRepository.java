package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.entity.item.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer>, ItemRepositoryCustom {

    Optional<Item> getItemByItemNo(Integer itemNo);

}
