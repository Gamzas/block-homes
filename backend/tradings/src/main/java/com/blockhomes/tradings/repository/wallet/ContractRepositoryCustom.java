package com.blockhomes.tradings.repository.wallet;

import com.blockhomes.tradings.dto.wallet.response.ListContractInstance;
import com.blockhomes.tradings.entity.common.RoleCategory;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ContractRepositoryCustom {

    List<ListContractInstance> getContractListByWalletAddressAndRoleCategory(String walletAddress, RoleCategory roleCategory);

}
