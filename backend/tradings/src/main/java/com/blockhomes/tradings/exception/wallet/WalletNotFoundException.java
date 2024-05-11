package com.blockhomes.tradings.exception.wallet;

import com.blockhomes.tradings.exception.common.NotFoundException;

public class WalletNotFoundException extends NotFoundException {

    @Override
    public String getMessage() {
        return "해당 신분을 가진 지갑 주소를 찾을 수 없습니다.";
    }

}
