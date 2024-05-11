package com.blockhomes.tradings.repository;

import com.blockhomes.tradings.entity.wallet.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Integer>, WalletRepositoryCustom {

    Optional<Wallet> getWalletByName(String name);

    Optional<Wallet> getWalletByWalletAddress(String walletAddress);

}
