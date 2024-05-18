package com.blockhomes.tradings.repository.wallet;

import com.blockhomes.tradings.entity.wallet.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContractRepository extends JpaRepository<Contract, Integer>, ContractRepositoryCustom {

    Optional<Contract> getContractByContractNo(Integer contractNo);

}
