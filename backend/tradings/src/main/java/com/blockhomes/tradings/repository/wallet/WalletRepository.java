package com.blockhomes.tradings.repository.wallet;

import com.blockhomes.tradings.entity.wallet.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {

    Optional<Wallet> getWalletByNameAndPhoneNumber(String name, String phoneNumber);

    Optional<Wallet> getWalletByWalletAddress(String walletAddress);

    Optional<Wallet> getWalletByUserDID(String userDID);

}
