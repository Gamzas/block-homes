package com.blockhomes.tradings.repository.wallet;

import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Likes;
import com.blockhomes.tradings.entity.wallet.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Integer> {

    List<Likes> getLikesByWallet(Wallet wallet);

    Optional<Likes> getLikesByWalletAndItem(Wallet wallet, Item item);

    void deleteByWalletAndItem(Wallet wallet, Item item);

}
