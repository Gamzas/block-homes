package com.blockhomes.tradings.repository.wallet;

import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.wallet.Contract;
import com.blockhomes.tradings.entity.wallet.WalletContract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WalletContractRepository extends JpaRepository<WalletContract, Integer> {

    Optional<WalletContract> getWalletContractByContractAndRoleCategory(Contract contract, RoleCategory roleCategory);

}
