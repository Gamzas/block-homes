package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.chat.response.ContractRes;
import com.blockhomes.tradings.dto.wallet.request.CheckWalletReq;
import com.blockhomes.tradings.dto.wallet.request.GetWalletReq;
import com.blockhomes.tradings.dto.wallet.request.ListContractReq;
import com.blockhomes.tradings.dto.wallet.request.RegisterWalletReq;
import com.blockhomes.tradings.dto.wallet.response.*;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.wallet.Contract;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.entity.wallet.WalletContract;
import com.blockhomes.tradings.exception.wallet.ContractNotFoundException;
import com.blockhomes.tradings.exception.wallet.WalletContractNotFoundException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.wallet.ContractRepository;
import com.blockhomes.tradings.repository.wallet.WalletContractRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("walletService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class WalletServiceImpl implements WalletService {

    private final WalletRepository walletRepository;
    private final ContractRepository contractRepository;
    private final WalletContractRepository walletContractRepository;

    @Override
    public CheckWalletRes checkWallet(CheckWalletReq req) {
        Wallet wallet = walletRepository
            .getWalletByNameAndPhoneNumber(req.getName(), req.getPhoneNumber())
            .orElseThrow(WalletNotFoundException::new);

        return CheckWalletRes.builder()
            .walletAddress(wallet.getWalletAddress())
            .userDID(wallet.getUserDID())
            .build();
    }

    @Override
    public GetWalletRes getWallet(GetWalletReq req) {
        Wallet wallet = walletRepository
            .getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        return GetWalletRes.builder()
            .walletAddress(wallet.getWalletAddress())
            .userDID(wallet.getUserDID())
            .encPrivateKey(wallet.getEncPrivateKey())
            .name(wallet.getName())
            .build();
    }

    @Override
    @Transactional
    public BaseResponseBody deleteWallet(String walletAddress) {
        Wallet wallet = walletRepository.getWalletByWalletAddress(walletAddress)
            .orElseThrow(WalletNotFoundException::new);

        walletRepository.delete(wallet);

        return BaseResponseBody.builder()
            .statusCode(HttpStatus.ACCEPTED)
            .message("지갑 " + walletAddress + " 삭제 완료")
            .build();
    }

    @Override
    @Transactional
    public RegisterWalletRes registerWallet(RegisterWalletReq req) {
        Wallet registeredWallet = walletRepository.save(Wallet.builder()
            .walletAddress(req.getWalletAddress())
            .encPrivateKey(req.getEncPrivateKey())
            .name(req.getName())
            .phoneNumber(req.getPhoneNumber())
            .build());

        return RegisterWalletRes.builder()
            .walletAddress(registeredWallet.getWalletAddress())
            .encPrivateKey(registeredWallet.getEncPrivateKey())
            .name(registeredWallet.getName())
            .phoneNumber(registeredWallet.getPhoneNumber())
            .createdAt(registeredWallet.getCreatedAt())
            .build();
    }

    @Override
    public ListContractRes listContract(ListContractReq req) {
        List<ListContractInstance> contractLists;

        if (req.getMode() == 0) {
            contractLists = contractRepository
                .getContractListByWalletAddress(req.getWalletAddress());

        } else {
            contractLists = contractRepository
                .getContractListByWalletAddressAndRoleCategory(req.getWalletAddress(), RoleCategory.valueToEnum(req.getMode()));
        }

        return ListContractRes.builder()
            .contractLists(contractLists)
            .count(contractLists.size())
            .build();
    }

    @Override
    public ContractRes detailContract(Integer contractNo) {
        Contract contract = contractRepository.getContractByContractNo(contractNo)
            .orElseThrow(ContractNotFoundException::new);

        WalletContract buyerWalletContract = walletContractRepository
            .getWalletContractByContractAndRoleCategory(contract, RoleCategory.BUYER)
            .orElseThrow(WalletContractNotFoundException::new);

        WalletContract sellerWalletContract = walletContractRepository
            .getWalletContractByContractAndRoleCategory(contract, RoleCategory.SELLER)
            .orElseThrow(WalletContractNotFoundException::new);

        return ContractRes.builder()
            .contractNo(contract.getContractNo())
            .contractAddress(contract.getContractAddress())
            .buyerWalletAddress(buyerWalletContract.getWallet().getWalletAddress())
            .sellerWalletAddress(sellerWalletContract.getWallet().getWalletAddress())
            .createdAt(contract.getCreatedAt())
            .build();
    }

}
