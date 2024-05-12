package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.item.request.RegisterItemReq;
import com.blockhomes.tradings.dto.item.response.RegisterItemRes;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.item.RealEstateType;
import com.blockhomes.tradings.entity.item.ReportRank;
import com.blockhomes.tradings.entity.item.TransactionType;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.ItemRepository;
import com.blockhomes.tradings.repository.WalletRepository;
import com.blockhomes.tradings.util.LocalDateTimeUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("itemService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final WalletRepository walletRepository;

    @Transactional
    @Override
    public RegisterItemRes registerItem(RegisterItemReq req) {
        Wallet ownerWallet = walletRepository.getWalletByUserDID(req.getOwnerWalletDID())
            .orElseThrow(WalletNotFoundException::new);

        Item item = itemRepository.save(Item.builder()
            .ownerWallet(ownerWallet)
            .realEstateDID(req.getRealEstateDID())
            .transactionType(TransactionType.valueToEnum(req.getTransactionType()))
            .area(req.getArea())
            .price(req.getPrice())
            .monthlyPrice(req.getMonthlyPrice())
            .administrationCost(req.getAdministrationCost())
            .latitude(req.getLatitude())
            .longitude(req.getLongitude())
            .realEstateType(RealEstateType.valueToEnum(req.getRealEstateType()))
            .roomNumber(req.getRoomNumber())
            .toiletNumber(req.getToiletNumber())
            .description(req.getDescription())
            .reportRank(ReportRank.valueToEnum(req.getReportRank()))
            .buildingFloor(req.getBuildingFloor())
            .itemFloor(req.getItemFloor())
            .moveInDate(LocalDateTimeUtil.stringToLocalDateTime(req.getMoveInDate()))
            .parkingRate(req.getParkingRate())
            .haveElevator(req.getHaveElevator())
            .build());

        return RegisterItemRes.builder()
            .itemNo(item.getItemNo())
            .ownerWalletAddress(item.getOwnerWallet().getWalletAddress())
            .realEstateDID(item.getRealEstateDID())
            .createdAt(item.getCreatedAt())
            .build();
    }

}
