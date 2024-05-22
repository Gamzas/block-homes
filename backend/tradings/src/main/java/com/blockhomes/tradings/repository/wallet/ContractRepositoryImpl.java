package com.blockhomes.tradings.repository.wallet;


import com.blockhomes.tradings.dto.wallet.response.ListContractInstance;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.wallet.QContract;
import com.blockhomes.tradings.entity.wallet.QWallet;
import com.blockhomes.tradings.entity.wallet.QWalletContract;
import com.querydsl.core.types.Projections;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class ContractRepositoryImpl extends QuerydslRepositorySupport implements ContractRepositoryCustom {

    public static final QContract qContract = QContract.contract;
    public static final QWalletContract qWalletContract = QWalletContract.walletContract;
    public static final QWallet qWallet = QWallet.wallet;

    public ContractRepositoryImpl() {
        super(QContract.class);
    }

    @Override
    public List<ListContractInstance> getContractListByWalletAddress(String walletAddress) {
        return from(qContract)
            .innerJoin(qWalletContract).on(qContract.eq(qWalletContract.contract))
            .innerJoin(qWallet).on(qWalletContract.wallet.eq(qWallet))
            .select(Projections.constructor(ListContractInstance.class,
                qContract.contractNo, qContract.contractAddress, qContract.createdAt))
            .where(qWallet.walletAddress.eq(walletAddress))
            .fetch();
    }

    @Override
    public List<ListContractInstance> getContractListByWalletAddressAndRoleCategory(String walletAddress, RoleCategory roleCategory) {
        return from(qContract)
            .innerJoin(qWalletContract).on(qContract.eq(qWalletContract.contract))
            .innerJoin(qWallet).on(qWalletContract.wallet.eq(qWallet))
            .select(Projections.constructor(ListContractInstance.class,
                qContract.contractNo, qContract.contractAddress, qContract.createdAt))
            .where(qWallet.walletAddress.eq(walletAddress)
                .and(qWalletContract.roleCategory.eq(roleCategory)))
            .fetch();
    }
}
