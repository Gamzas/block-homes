package com.blockhomes.tradings.service;


import com.blockhomes.tradings.dto.wallet.request.CheckWalletReq;
import com.blockhomes.tradings.dto.wallet.request.GetWalletReq;
import com.blockhomes.tradings.dto.wallet.request.RegisterWalletReq;
import com.blockhomes.tradings.dto.wallet.response.CheckWalletRes;
import com.blockhomes.tradings.dto.wallet.response.GetWalletRes;
import com.blockhomes.tradings.dto.wallet.response.RegisterWalletRes;

public interface WalletService {

    CheckWalletRes checkWallet(CheckWalletReq req);

    RegisterWalletRes registerWallet(RegisterWalletReq req);

    GetWalletRes getWallet(GetWalletReq req);

}
