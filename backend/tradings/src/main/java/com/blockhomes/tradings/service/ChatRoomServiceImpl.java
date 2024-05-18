package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.chat.request.*;
import com.blockhomes.tradings.dto.chat.response.*;
import com.blockhomes.tradings.entity.chat.ChatProvision;
import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.chat.SpecialProvisionCategory;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.chat.WalletChatRoom;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Contract;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.entity.wallet.WalletContract;
import com.blockhomes.tradings.exception.chat.ChatRoomNotFoundException;
import com.blockhomes.tradings.exception.chat.DuplicateChatRoomException;
import com.blockhomes.tradings.exception.item.ItemNotFoundException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.chat.ChatProvisionRepository;
import com.blockhomes.tradings.repository.chat.ChatRoomRepository;
import com.blockhomes.tradings.repository.chat.WalletChatRoomRepository;
import com.blockhomes.tradings.repository.item.ItemRepository;
import com.blockhomes.tradings.repository.wallet.ContractRepository;
import com.blockhomes.tradings.repository.wallet.WalletContractRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service("chatRoomService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ChatRoomServiceImpl implements ChatRoomService {

    private final ItemRepository itemRepository;
    private final WalletRepository walletRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final WalletChatRoomRepository walletChatRoomRepository;
    private final ChatProvisionRepository chatProvisionRepository;
    private final ContractRepository contractRepository;
    private final WalletContractRepository walletContractRepository;

    @Override
    public ListChatRoomsRes listChatRooms(ListChatRoomsReq req) {
        List<ChatRoomInstance> chatRooms = chatRoomRepository.getChatRoomsByWalletAndRole(req.getWalletAddress(), RoleCategory.valueToEnum(req.getMode()));

        return ListChatRoomsRes.builder()
            .chatRoomList(chatRooms)
            .count(chatRooms.size())
            .build();
    }

    @Override
    public Integer checkChatRoom(CheckChatRoomReq req) {
        Integer result = chatRoomRepository.getChatRoomNoByItemNoAndWallet(req.getItemNo(), req.getWalletAddress());

        if (result == null || result == 0) {
            throw new ChatRoomNotFoundException();
        }

        return result;
    }

    @Transactional
    @Override
    public RegisterProvisionRes registerProvision(RegisterProvisionReq req) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(req.getChatRoomNo())
            .orElseThrow(ChatRoomNotFoundException::new);

        List<ChatProvision> existProvisions = chatProvisionRepository.getChatProvisionsByChatRoom(chatRoom);
        List<Integer> provisionValueList = req.getProvisionList();

        for (ChatProvision chatProvision : existProvisions) {
            Integer chatProvisionValue = SpecialProvisionCategory
                .enumToValue(chatProvision.getSpecialProvisionCategory());

            if (provisionValueList.contains(chatProvisionValue)) {
                provisionValueList.remove(chatProvisionValue);
            }
        }

        List<ChatProvision> chatProvisionEntityList = new ArrayList<>();

        for (Integer provision : provisionValueList) {
            chatProvisionEntityList.add(ChatProvision.builder()
                    .chatRoom(chatRoom)
                    .specialProvisionCategory(SpecialProvisionCategory.valueToEnum(provision))
                .build());
        }

        chatProvisionRepository.saveAll(chatProvisionEntityList);

        List<ChatProvision> chatProvisionList = chatProvisionRepository.getChatProvisionsByChatRoom(chatRoom);
        List<Integer> provisionList = new ArrayList<>();

        for (ChatProvision chatProvision : chatProvisionList) {
            provisionList.add(SpecialProvisionCategory
                .enumToValue(chatProvision.getSpecialProvisionCategory()));
        }

        return RegisterProvisionRes.builder()
            .chatRoomNo(chatRoom.getChatRoomNo())
            .provisionList(provisionList)
            .build();
    }

    @Override
    public GetProvisionRes getSpecialProvision(GetProvisionReq req) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(req.getChatRoomNo())
            .orElseThrow(ChatRoomNotFoundException::new);

        List<ChatProvision> chatProvisionList = chatProvisionRepository.getChatProvisionsByChatRoom(chatRoom);

        List<Integer> specialProvisionList = new ArrayList<>();
        for (ChatProvision chatProvision : chatProvisionList) {
            specialProvisionList.add(SpecialProvisionCategory.enumToValue(chatProvision.getSpecialProvisionCategory()));
        }

        return GetProvisionRes.builder()
            .chatRoomNo(chatRoom.getChatRoomNo())
            .specialProvisionList(specialProvisionList)
            .build();
    }

    @Transactional
    @Override
    public BaseResponseBody deleteSpecialProvision(Integer chatRoomNo) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        chatProvisionRepository.deleteAllByChatRoom(chatRoom);

        return BaseResponseBody.builder()
            .statusCode(HttpStatus.OK)
            .message(chatRoomNo + "번 거래진행방 특약사항 삭제 완료")
            .build();
    }

    @Transactional
    @Override
    public ContractRes registerFinalContract(RegisterContractReq req) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(req.getChatRoomNo())
            .orElseThrow(ChatRoomNotFoundException::new);

        WalletChatRoom sellerWCR = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom, RoleCategory.SELLER)
            .orElseThrow(WalletNotFoundException::new);

        WalletChatRoom buyerWCR = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom, RoleCategory.BUYER)
            .orElseThrow(WalletNotFoundException::new);

        Contract contract = contractRepository.save(Contract.builder()
            .contractAddress(req.getContractAddress())
            .build());

        WalletContract buyerWalletContract = walletContractRepository.save(WalletContract.builder()
            .contract(contract)
            .wallet(buyerWCR.getWallet())
            .roleCategory(RoleCategory.BUYER)
            .build());

        WalletContract sellerWalletContract = walletContractRepository.save(WalletContract.builder()
            .contract(contract)
            .wallet(sellerWCR.getWallet())
            .roleCategory(RoleCategory.SELLER)
            .build());

        return ContractRes.builder()
            .contractNo(contract.getContractNo())
            .contractAddress(contract.getContractAddress())
            .buyerWalletAddress(buyerWalletContract.getWallet().getWalletAddress())
            .sellerWalletAddress(sellerWalletContract.getWallet().getWalletAddress())
            .createdAt(contract.getCreatedAt())
            .build();
    }

    @Transactional
    @Override
    public TempContractRes registerTemporaryContract(RegisterContractReq req) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(req.getChatRoomNo())
            .orElseThrow(ChatRoomNotFoundException::new);

        chatRoom.setTempContractAddress(req.getContractAddress());

        return TempContractRes.builder()
            .chatRoomNo(chatRoom.getChatRoomNo())
            .tempContractAddress(chatRoom.getTempContractAddress())
            .build();
    }

    @Override
    public TempContractRes getTemporaryContract(GetContractReq req) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(req.getChatRoomNo())
            .orElseThrow(ChatRoomNotFoundException::new);

        return TempContractRes.builder()
            .tempContractAddress(chatRoom.getTempContractAddress())
            .chatRoomNo(chatRoom.getChatRoomNo())
            .build();
    }

    @Override
    public WalletsRes getWallets(Integer chatRoomNo) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        WalletChatRoom sellerWCR = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom, RoleCategory.SELLER)
            .orElseThrow(WalletNotFoundException::new);

        WalletChatRoom buyerWCR = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom, RoleCategory.BUYER)
            .orElseThrow(WalletNotFoundException::new);

        return WalletsRes.builder()
            .sellerWalletAddress(sellerWCR.getWallet().getWalletAddress())
            .buyerWalletAddress(buyerWCR.getWallet().getWalletAddress())
            .build();
    }

    @Override
    public DetailChatRoomRes detailChatRoom(Integer chatRoomNo) {
        DetailChatRoomRes result = chatRoomRepository.getDetailChatRoom(chatRoomNo);
        List<ChatRes> chatResList = chatRoomRepository.getChatResList(chatRoomNo);
        result.setChatList(chatResList);

        WalletsRes walletsRes = getWallets(chatRoomNo);
        result.setBuyerWalletAddress(walletsRes.getBuyerWalletAddress());
        result.setSellerWalletAddress(walletsRes.getSellerWalletAddress());

        return result;
    }

    @Override
    @Transactional
    public CreateChatRoomRes createChatRoom(CreateChatRoomReq req) {

        if (Objects.nonNull(chatRoomRepository.getChatRoomNoByItemNoAndWallet(req.getItemNo(), req.getWalletAddress()))) {
            throw new DuplicateChatRoomException(req.getItemNo(), req.getWalletAddress());
        }

        Item item = itemRepository.getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        Wallet buyerWallet = walletRepository.getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        ChatRoom chatRoom = chatRoomRepository.save(ChatRoom.builder()
            .item(item)
            .build());

        WalletChatRoom buyerWalletChatRoom = walletChatRoomRepository.save(WalletChatRoom.builder()
                .chatRoom(chatRoom)
                .wallet(buyerWallet)
                .roleCategory(RoleCategory.BUYER)
                .build());

        WalletChatRoom ownerWalletChatRoom = walletChatRoomRepository.save(WalletChatRoom.builder()
                .chatRoom(chatRoom)
                .wallet(item.getOwnerWallet())
                .roleCategory(RoleCategory.SELLER)
                .build());

        return CreateChatRoomRes.builder()
            .chatRoomNo(chatRoom.getChatRoomNo())
            .itemNo(chatRoom.getItem().getItemNo())
            .sellerWalletAddress(ownerWalletChatRoom.getWallet().getWalletAddress())
            .buyerWalletAddress(buyerWalletChatRoom.getWallet().getWalletAddress())
            .createdAt(chatRoom.getCreatedAt())
            .build();
    }

}
