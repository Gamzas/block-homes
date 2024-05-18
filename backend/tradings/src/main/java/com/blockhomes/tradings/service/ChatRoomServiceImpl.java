package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.request.CreateChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.CheckChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.ListChatRoomsReq;
import com.blockhomes.tradings.dto.chat.request.RegisterProvisionReq;
import com.blockhomes.tradings.dto.chat.response.*;
import com.blockhomes.tradings.entity.chat.ChatProvision;
import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.chat.SpecialProvisionCategory;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.chat.WalletChatRoom;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.exception.chat.ChatRoomNotFoundException;
import com.blockhomes.tradings.exception.chat.DuplicateChatRoomException;
import com.blockhomes.tradings.exception.item.ItemNotFoundException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.chat.ChatProvisionRepository;
import com.blockhomes.tradings.repository.chat.ChatRoomRepository;
import com.blockhomes.tradings.repository.chat.WalletChatRoomRepository;
import com.blockhomes.tradings.repository.item.ItemRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
    public DetailChatRoomRes detailChatRoom(Integer chatRoomNo) {
        DetailChatRoomRes result = chatRoomRepository.getDetailChatRoom(chatRoomNo);
        List<ChatRes> chatResList = chatRoomRepository.getChatResList(chatRoomNo);
        log.info("{}", chatResList);
        result.setChatList(chatResList);

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
