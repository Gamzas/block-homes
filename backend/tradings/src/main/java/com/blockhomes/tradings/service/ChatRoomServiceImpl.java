package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.request.CreateChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.CheckChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.ListChatRoomsReq;
import com.blockhomes.tradings.dto.chat.response.ChatRoomInstance;
import com.blockhomes.tradings.dto.chat.response.CreateChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.DetailChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.ListChatRoomsRes;
import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.chat.WalletChatRoom;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.exception.chat.ChatRoomNotFoundException;
import com.blockhomes.tradings.exception.chat.DuplicateChatRoomException;
import com.blockhomes.tradings.exception.item.ItemNotFoundException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.chat.ChatRoomRepository;
import com.blockhomes.tradings.repository.chat.WalletChatRoomRepository;
import com.blockhomes.tradings.repository.item.ItemRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("chatRoomService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ChatRoomServiceImpl implements ChatRoomService {

    private final ItemRepository itemRepository;
    private final WalletRepository walletRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final WalletChatRoomRepository walletChatRoomRepository;

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
    public DetailChatRoomRes detailChatRoom(Integer chatRoomNo) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        return DetailChatRoomRes.builder()
            .build();
    }

    @Override
    @Transactional
    public CreateChatRoomRes createChatRoom(CreateChatRoomReq req) {

        if (chatRoomRepository.getChatRoomNoByItemNoAndWallet(req.getItemNo(), req.getWalletAddress()).describeConstable().isPresent()) {
            throw new DuplicateChatRoomException(req.getItemNo(), req.getWalletAddress());
        }

        Item item = itemRepository.getItemByItemNo(req.getItemNo())
            .orElseThrow(ItemNotFoundException::new);

        Wallet buyerWallet = walletRepository.getWalletByWalletAddress(req.getWalletAddress())
            .orElseThrow(WalletNotFoundException::new);
        Wallet ownerWallet = item.getOwnerWallet();

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
                .wallet(ownerWallet)
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
