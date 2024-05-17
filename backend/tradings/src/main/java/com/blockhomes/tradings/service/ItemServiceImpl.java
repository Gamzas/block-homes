package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.item.request.*;
import com.blockhomes.tradings.dto.item.response.*;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.item.*;
import com.blockhomes.tradings.entity.item.enums.*;
import com.blockhomes.tradings.entity.wallet.Likes;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.exception.common.ImageNotSavedException;
import com.blockhomes.tradings.exception.item.DuplicateLikesException;
import com.blockhomes.tradings.exception.item.ItemNotFoundException;
import com.blockhomes.tradings.exception.item.ItemOwnerNotMatchException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.common.ImageRepository;
import com.blockhomes.tradings.repository.item.*;
import com.blockhomes.tradings.repository.wallet.LikesRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import com.blockhomes.tradings.util.AreaUtil;
import com.blockhomes.tradings.util.LocalDateTimeUtil;
import com.blockhomes.tradings.util.S3BucketUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service("itemService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final WalletRepository walletRepository;
    private final ImageRepository imageRepository;
    private final ItemImageRepository itemImageRepository;
    private final ItemAdditionalOptionRepository itemAdditionalOptionRepository;
    private final ItemAdministrationFeeRepository itemAdministrationFeeRepository;
    private final LikesRepository likesRepository;

    private final S3BucketUtil s3BucketUtil;

    private final String BASE_FOLDER_NAME = "items";

    @Transactional
    @Override
    public RegisterItemRes registerItem(RegisterItemReq req,
                                        MultipartFile mainImage,
                                        MultipartFile[] roomImages,
                                        MultipartFile[] kitchenToiletImages) {
        Wallet ownerWallet = walletRepository.getWalletByUserDID(req.getOwnerWalletDID())
            .orElseThrow(WalletNotFoundException::new);

        // 이미지 제외 아이템 정보 저장
        Item item = itemRepository.save(Item.builder()
                .realEstateDID(req.getRealEstateDID())
                .ownerWallet(ownerWallet)
                .roadNameAddress(req.getRoadNameAddress())
                .transactionType(TransactionType.valueToEnum(req.getTransactionType()))
                .area(req.getArea())
                .price(req.getPrice())
                .monthlyPrice(req.getMonthlyPrice())
                .administrationCost(req.getAdministrationCost())
                .contractMonths(req.getContractMonths())
                .latitude(req.getLatitude())
                .longitude(req.getLongitude())
                .realEstateType(RealEstateType.valueToEnum(req.getRealEstateType()))
                .roomNumber(req.getRoomNumber())
                .toiletNumber(req.getToiletNumber())
                .description(req.getDescription())
                .reportRank(ReportRank.valueToEnum(req.getReportRank()))
                .transactionStatus(TransactionStatus.READY)
                .buildingFloor(req.getBuildingFloor())
                .itemFloor(req.getItemFloor())
                .moveInDate(LocalDateTimeUtil.stringToLocalDateTime(req.getMoveInDate()))
                .parkingRate(req.getParkingRate())
                .haveElevator(req.getHaveElevator())
                .build());

        // 관리비 카테고리 저장
        List<Integer> feeCategoryList = req.getAdministrationFeeCategoryList();
        List<ItemAdministrationFee> feeEntityList = new ArrayList<>();

        for (Integer category : feeCategoryList) {
            feeEntityList.add(ItemAdministrationFee.builder()
                .item(item)
                .administrationFeeCategory(AdministrationFeeCategory.valueToEnum(category))
                .build());
        }

        itemAdministrationFeeRepository.saveAll(feeEntityList);

        // 추가 옵션 카테고리 저장
        List<Integer> optionCategoryList = req.getAdditionalOptionCategoryList();
        List<ItemAdditionalOption> optionEntityList = new ArrayList<>();

        for (Integer category : optionCategoryList) {
            optionEntityList.add(ItemAdditionalOption.builder()
                .item(item)
                .additionalOptionCategory(AdditionalOptionCategory.valueToEnum(category))
                .build());
        }

        itemAdditionalOptionRepository.saveAll(optionEntityList);

        String folderName = BASE_FOLDER_NAME + "/" + item.getItemNo();

        // 대표 이미지 저장
        String mainImageKey = s3BucketUtil.uploadFile(mainImage, folderName);
        Image mainImageEntity = Image.builder()
            .imageUrl(s3BucketUtil.getFileUrl(mainImageKey, folderName))
            .build();

        boolean isRoomImagesPresent = Objects.nonNull(roomImages);
        boolean isKitchenToiletImagesPresent = Objects.nonNull(kitchenToiletImages);

        List<Image> roomImageEntityList = new ArrayList<>();
        List<String> roomImageKeys = new ArrayList<>();

        List<Image> kitchenToiletEntityList = new ArrayList<>();
        List<String> kitchenToiletImageKeys = new ArrayList<>();

        // roomImages 있다면 사진 저장
        if (isRoomImagesPresent) {
            for (MultipartFile file : roomImages) {
                String imageKey = s3BucketUtil.uploadFile(file, folderName);
                roomImageKeys.add(imageKey);

                roomImageEntityList.add(Image.builder()
                    .imageUrl(s3BucketUtil.getFileUrl(imageKey, folderName))
                    .build());
            }
        }

        // kitchenToiletImages 있다면 사진 저장
        if (isKitchenToiletImagesPresent) {
            for (MultipartFile file : kitchenToiletImages) {
                String imageKey = s3BucketUtil.uploadFile(file, folderName);
                kitchenToiletImageKeys.add(imageKey);

                kitchenToiletEntityList.add(Image.builder()
                    .imageUrl(s3BucketUtil.getFileUrl(imageKey, folderName))
                    .build());
            }
        }

        List<ItemImage> itemImageList = new ArrayList<>();

        try {
            Image savedMainImage = imageRepository.save(mainImageEntity);

            itemImageList.add(ItemImage.builder()
                .image(savedMainImage)
                .item(item)
                .itemImageCategory(ItemImageCategory.MAIN)
                .build());

            if (isRoomImagesPresent) {
                List<Image> savedRoomImages = imageRepository.saveAll(roomImageEntityList);

                for (Image image : savedRoomImages) {
                    itemImageList.add(ItemImage.builder()
                        .image(image)
                        .item(item)
                        .itemImageCategory(ItemImageCategory.ROOMS)
                        .build());
                }
            }

            if (isKitchenToiletImagesPresent) {
                List<Image> savedKitchenToiletImages = imageRepository.saveAll(kitchenToiletEntityList);

                for (Image image : savedKitchenToiletImages) {
                    itemImageList.add(ItemImage.builder()
                        .image(image)
                        .item(item)
                        .itemImageCategory(ItemImageCategory.KITCHEN_TOILET)
                        .build());
                }

            }

            itemImageRepository.saveAll(itemImageList);



        } catch (Exception e) {
            s3BucketUtil.deleteFile(mainImageKey, folderName);

            if (isRoomImagesPresent) {
                for (String key : roomImageKeys) {
                    s3BucketUtil.deleteFile(key, folderName);
                }
            }

            if (isKitchenToiletImagesPresent) {
                for (String key : kitchenToiletImageKeys) {
                    s3BucketUtil.deleteFile(key, folderName);
                }
            }

            throw new ImageNotSavedException();
        }

        return RegisterItemRes.builder()
            .itemNo(item.getItemNo())
            .ownerWalletAddress(item.getOwnerWallet().getWalletAddress())
            .realEstateDID(item.getRealEstateDID())
            .createdAt(item.getCreatedAt())
            .build();
    }

    @Override
    public ListItemRes listItems(ListItemReq req) {
        List<ListItemInstance> itemsList = itemRepository.listItemsByFiltering(req);

        log.info("ItemService : {}", itemsList);

        if (itemsList.isEmpty()) {
            return ListItemRes.builder()
                .itemList(List.of())
                .count(0)
                .build();
        }

        return ListItemRes.builder()
            .itemList(itemsList)
            .count(itemsList.size())
            .build();
    }

    @Override
    public DetailItemRes getDetailItem(Integer itemNo, DetailItemReq req) {
        Item item = itemRepository.getItemByItemNo(itemNo).orElseThrow(ItemNotFoundException::new);

        List<ItemImage> itemImages = itemImageRepository.getItemImagesByItem(item);
        List<ItemAdministrationFee> itemAdministrationFees = itemAdministrationFeeRepository.getItemAdministrationFeesByItem(item);
        List<ItemAdditionalOption> itemAdditionalOptions = itemAdditionalOptionRepository.getItemAdditionalOptionsByItem(item);

        List<ItemImageInstance> itemImageInstanceList = new ArrayList<>();

        Wallet userWallet = walletRepository.getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        for (ItemImage itemImage : itemImages) {
            itemImageInstanceList.add(ItemImageInstance.builder()
                    .imageUrl(itemImage.getImage().getImageUrl())
                    .itemImageCategory(ItemImageCategory.enumToValue(itemImage.getItemImageCategory()))
                    .build());
        }

        List<Integer> administrationFeeList = new ArrayList<>();

        for (ItemAdministrationFee itemAdministrationFee : itemAdministrationFees) {
            administrationFeeList.add(AdministrationFeeCategory.enumToValue(itemAdministrationFee.getAdministrationFeeCategory()));
        }

        List<Integer> additionalOptionList = new ArrayList<>();

        for (ItemAdditionalOption itemAdditionalOption : itemAdditionalOptions) {
            additionalOptionList.add(AdditionalOptionCategory.enumToValue(itemAdditionalOption.getAdditionalOptionCategory()));
        }

        Boolean isUserLiked = false;

        if (likesRepository.getLikesByWalletAndItem(userWallet, item).isPresent()) {
            isUserLiked = true;
        }

        return DetailItemRes.builder()
            .itemNo(item.getItemNo())
            .ownerDID(item.getOwnerWallet().getUserDID())
            .realEstateDID(item.getRealEstateDID())
            .roadNameAddress(item.getRoadNameAddress())
            .realEstateType(RealEstateType.enumToValue(item.getRealEstateType()))
            .reportRank(ReportRank.enumToValue(item.getReportRank()))
            .transactionStatus(TransactionStatus.enumToValue(item.getTransactionStatus()))
            .area(item.getArea())
            .pyeong((int) Math.round(AreaUtil.squareMeterToPyeong(item.getArea())))
            .price(item.getPrice())
            .monthlyPrice(item.getMonthlyPrice())
            .administrationCost(item.getAdministrationCost())
            .contractMonths(item.getContractMonths())
            .latitude(item.getLatitude())
            .longitude(item.getLongitude())
            .roomNumber(item.getRoomNumber())
            .toiletNumber(item.getToiletNumber())
            .description(item.getDescription())
            .buildingFloor(item.getBuildingFloor())
            .itemFloor(item.getItemFloor())
            .moveInDate(item.getMoveInDate())
            .parkingRate(item.getParkingRate())
            .haveElevator(item.getHaveElevator())
            .createdAt(item.getCreatedAt())
            .itemImageList(itemImageInstanceList)
            .itemAdministrationFeeList(administrationFeeList)
            .itemAdditionalOptionList(additionalOptionList)
            .transactionType(TransactionType.enumToValue(item.getTransactionType()))
            .isUserLiked(isUserLiked)
            .build();
    }

    @Override
    @Transactional
    public BaseResponseBody deleteItem(DeleteItemReq req) {
        Wallet ownerWallet = walletRepository
            .getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        Item item = itemRepository.getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        if (!ownerWallet.getWalletAddress().equals(item.getOwnerWallet().getWalletAddress())) {
            throw new ItemOwnerNotMatchException(item.getRealEstateDID(), ownerWallet.getWalletAddress());
        }

        itemRepository.delete(item);

        return BaseResponseBody.builder()
            .statusCode(HttpStatus.OK)
            .message("매물 삭제 완료")
            .build();
    }

    @Override
    @Transactional
    public DetailItemRes modifyItem(ModifyItemReq req) {
        Item item = itemRepository.getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        Wallet wallet = walletRepository.getWalletByWalletAddress(req.getWalletAddress())
                .orElseThrow(WalletNotFoundException::new);

        if (!wallet.getWalletAddress().equals(item.getOwnerWallet().getWalletAddress())) {
            throw new ItemOwnerNotMatchException(item.getRealEstateDID(), wallet.getWalletAddress());
        }

        item.setPrice(req.getPrice());
        item.setMonthlyPrice(req.getMonthlyPrice());
        item.setAdministrationCost(req.getAdministrationCost());
        item.setRoomNumber(req.getRoomNumber());
        item.setToiletNumber(req.getToiletNumber());
        item.setDescription(req.getDescription());
        item.setMoveInDate(LocalDateTimeUtil.stringToLocalDateTime(req.getMoveInDate()));

        itemAdditionalOptionRepository.deleteAllByItem(item);
        itemAdministrationFeeRepository.deleteAllByItem(item);

        // 관리비 카테고리 저장
        List<Integer> feeCategoryList = req.getAdministrationFeeCategoryList();
        List<ItemAdministrationFee> feeEntityList = new ArrayList<>();

        for (Integer category : feeCategoryList) {
            feeEntityList.add(ItemAdministrationFee.builder()
                .item(item)
                .administrationFeeCategory(AdministrationFeeCategory.valueToEnum(category))
                .build());
        }

        itemAdministrationFeeRepository.saveAll(feeEntityList);

        // 추가 옵션 카테고리 저장
        List<Integer> optionCategoryList = req.getAdditionalOptionCategoryList();
        List<ItemAdditionalOption> optionEntityList = new ArrayList<>();

        for (Integer category : optionCategoryList) {
            optionEntityList.add(ItemAdditionalOption.builder()
                .item(item)
                .additionalOptionCategory(AdditionalOptionCategory.valueToEnum(category))
                .build());
        }

        itemAdditionalOptionRepository.saveAll(optionEntityList);

        return getDetailItem(item.getItemNo(), DetailItemReq.builder().walletAddress(req.getWalletAddress()).build());
    }

    @Override
    @Transactional
    public BaseResponseBody processTransaction(Integer itemNo, Integer process) {
        Item item = itemRepository.getItemByItemNo(itemNo)
            .orElseThrow(ItemNotFoundException::new);
        item.setTransactionStatus(TransactionStatus.valueToEnum(process));
        itemRepository.save(item);

        return BaseResponseBody.builder()
            .statusCode(HttpStatus.ACCEPTED)
            .message("매물 " + item.getItemNo() + " : 거래 단계 수정 완료 (" + TransactionStatus.valueToEnum(process) + ")")
            .build();
    }

    @Override
    @Transactional
    public LikeItemRes likeItem(LikeItemReq req) {
        Wallet userWallet = walletRepository
            .getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        Item item = itemRepository
            .getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        if (likesRepository.getLikesByWalletAndItem(userWallet, item).isPresent()) {
            throw new DuplicateLikesException(userWallet.getWalletAddress(), item.getItemNo());
        }

        Likes likes = likesRepository.save(Likes.builder()
            .wallet(userWallet)
            .item(item)
            .build());

        return LikeItemRes.builder()
            .walletAddress(likes.getWallet().getWalletAddress())
            .itemNo(likes.getItem().getItemNo())
            .createdAt(likes.getCreatedAt())
            .build();
    }

    @Override
    public GetLikeItemsRes getLikeItems(GetLikeItemsReq req) {
        Wallet userWallet = walletRepository
            .getWalletByWalletAddress(req.getUserAddress())
            .orElseThrow(WalletNotFoundException::new);

        List<Likes> likesList = likesRepository.getLikesByWallet(userWallet);

        List<ListItemInstance> itemInstances = new ArrayList<>();

        for (Likes likes : likesList) {
            Item item = likes.getItem();

            itemInstances.add(ListItemInstance.builder()
                    .itemNo(item.getItemNo())
                    .realEstateDID(item.getRealEstateDID())
                    .roadNameAddress(item.getRoadNameAddress())
                    .transactionType(item.getTransactionType())
                    .realEstateType(item.getRealEstateType())
                    .reportRank(item.getReportRank())
                    .area(item.getArea())
                    .price(item.getPrice())
                    .monthlyPrice(item.getMonthlyPrice())
                    .administrationCost(item.getAdministrationCost())
                    .latitude(item.getLatitude())
                    .longitude(item.getLongitude())
                    .build());
        }

        return GetLikeItemsRes.builder()
            .likedItems(itemInstances)
            .count(itemInstances.size())
            .build();
    }

    @Override
    @Transactional
    public BaseResponseBody deleteLikes(DeleteLikesReq req) {
        Wallet userWallet = walletRepository
            .getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        Item item = itemRepository.getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        likesRepository.deleteByWalletAndItem(userWallet, item);

        return BaseResponseBody.builder()
            .statusCode(HttpStatus.OK)
            .message("찜 삭제 완료")
            .build();
    }


}
