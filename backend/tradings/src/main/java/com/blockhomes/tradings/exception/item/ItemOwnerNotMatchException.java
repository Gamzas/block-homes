package com.blockhomes.tradings.exception.item;

public class ItemOwnerNotMatchException extends RuntimeException {

    private final String realEstateDID;
    private final String walletAddress;

    public ItemOwnerNotMatchException(String realEstateDID, String walletAddress) {
        this.realEstateDID = realEstateDID;
        this.walletAddress = walletAddress;
    }

    @Override
    public String getMessage() {
        return "매물 " + realEstateDID + "의 소유주가 요청 사용자 " + walletAddress + "와 일치하지 않습니다.";
    }

}
