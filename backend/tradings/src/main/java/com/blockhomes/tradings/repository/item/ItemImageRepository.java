package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.item.ItemImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemImageRepository extends JpaRepository<ItemImage, Integer> {

    List<ItemImage> getItemImagesByItem(Item item);

    void deleteItemImageByItem(Item item);

}
