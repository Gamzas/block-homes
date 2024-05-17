package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.ByteArrayMultipartFile;
import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.dto.chat.payload.ChatPayload;
import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.entity.chat.*;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.wallet.Wallet;
import com.blockhomes.tradings.exception.chat.*;
import com.blockhomes.tradings.exception.common.ImageNotSavedException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import com.blockhomes.tradings.repository.chat.ChatProvisionRepository;
import com.blockhomes.tradings.repository.chat.ChatRepository;
import com.blockhomes.tradings.repository.chat.ChatRoomRepository;
import com.blockhomes.tradings.repository.chat.WalletChatRoomRepository;
import com.blockhomes.tradings.repository.common.ImageRepository;
import com.blockhomes.tradings.repository.wallet.WalletRepository;
import com.blockhomes.tradings.util.S3BucketUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Service("chatService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ChatServiceImpl implements ChatService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatRepository chatRepository;
    private final WalletRepository walletRepository;
    private final ImageRepository imageRepository;
    private final WalletChatRoomRepository walletChatRoomRepository;
    private final ChatProvisionRepository chatProvisionRepository;

    private final S3BucketUtil s3BucketUtil;

    private final String BASE_FOLDER_NAME = "chats";

    @Override
    @Transactional
    public ChatRes enterUser(Integer chatRoomNo, ChatPayload chatPayload) {
        ChatRoom chatRoom = chatRoomRepository
            .getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        Wallet wallet = walletRepository
            .getWalletByWalletAddress(chatPayload.getSenderWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        WalletChatRoom walletChatRoom = walletChatRoomRepository
            .getWalletChatRoomByWalletAndChatRoom(wallet, chatRoom)
            .orElseThrow(WalletChatRoomNotFoundException::new);

        Chat chat = chatRepository.save(Chat.builder()
            .wallet(wallet)
            .chatRoom(chatRoom)
            .message(wallet.getName() + " (" + walletChatRoom.getRoleCategory().getRole() + ") " + "님이 거래 대화방에 입장하셨어요.")
            .messageType(MessageType.ENTER)
            .build());

        log.info("enterUser : {}", chat);

        return ChatRes.builder()
            .chatNo(chat.getChatNo())
            .chatRoomNo(chat.getChatRoom().getChatRoomNo())
            .senderWalletAddress(chat.getWallet().getWalletAddress())
            .senderName(chat.getWallet().getName())
            .messageType(chat.getMessageType())
            .image("")
            .contractStep(chat.getChatRoom().getContractStep())
            .message(chat.getMessage())
            .createdAt(chat.getCreatedAt())
            .build();
    }

    @Override
    @Transactional
    public ChatRes chatTalk(Integer chatRoomNo, ChatPayload chatPayload) {
        ChatRoom chatRoom = chatRoomRepository
            .getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        Wallet wallet = walletRepository
            .getWalletByWalletAddress(chatPayload.getSenderWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        Image image = null;

        if (Objects.nonNull(chatPayload.getImageBase64()) && !chatPayload.getImageBase64().isBlank()) {
            String mimeType = new Tika().detect(chatPayload.getImageBase64());
            String fileExtension = getFileExtension(mimeType);

            byte[] decodedValue = Base64.getDecoder().decode(chatPayload.getImageBase64());

            ByteArrayMultipartFile imageFile = ByteArrayMultipartFile.builder()
                .contentType(mimeType)
                .fileContent(decodedValue)
                .originalFilename(UUID.randomUUID() + "." + fileExtension)
                .build();

            String folderName = BASE_FOLDER_NAME + "/" + chatRoomNo;
            String imageKey = null;
            try {
                imageKey = s3BucketUtil.uploadFile(imageFile, folderName);

                image = imageRepository.save(Image.builder()
                    .imageUrl(s3BucketUtil.getFileUrl(imageKey, folderName))
                    .build());
            } catch (Exception e) {
                if (Objects.nonNull(imageKey)) s3BucketUtil.deleteFile(imageKey, folderName);

                throw new ImageNotSavedException();
            }

        }

        Chat chat = chatRepository.save(Chat.builder()
            .chatRoom(chatRoom)
            .message(chatPayload.getMessage())
            .messageType(MessageType.TALK)
            .wallet(wallet)
            .image(image)
            .build());

        log.info("talkUser : {}", chat);

        if (Objects.nonNull(image)) {
            return ChatRes.builder()
                .chatNo(chat.getChatNo())
                .chatRoomNo(chat.getChatRoom().getChatRoomNo())
                .senderWalletAddress(chat.getWallet().getWalletAddress())
                .senderName(chat.getWallet().getName())
                .messageType(chat.getMessageType())
                .image(chat.getImage().getImageUrl())
                .contractStep(chat.getChatRoom().getContractStep())
                .message(chat.getMessage())
                .createdAt(chat.getCreatedAt())
                .build();
        } else {
            return ChatRes.builder()
                .chatNo(chat.getChatNo())
                .chatRoomNo(chat.getChatRoom().getChatRoomNo())
                .senderWalletAddress(chat.getWallet().getWalletAddress())
                .senderName(chat.getWallet().getName())
                .messageType(chat.getMessageType())
                .contractStep(chat.getChatRoom().getContractStep())
                .message(chat.getMessage())
                .createdAt(chat.getCreatedAt())
                .build();
        }

    }

    @Override
    @Transactional
    public ChatRes progressContract(Integer chatRoomNo, ChatPayload chatPayload) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        Wallet wallet = walletRepository.getWalletByWalletAddress(chatPayload.getSenderWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        WalletChatRoom walletChatRoom = walletChatRoomRepository.getWalletChatRoomByWalletAndChatRoom(wallet, chatRoom)
            .orElseThrow(WalletChatRoomNotFoundException::new);

        ContractStep contractStep = chatRoom.getContractStep();

        if (ContractStep.checkRoleStep(walletChatRoom.getRoleCategory(), contractStep)) {
            chatRoom.setContractStep(ContractStep.getNextContractStep(contractStep));
        } else {
            throw new ProgressNotPermittedException(walletChatRoom.getRoleCategory(), contractStep);
        }

        ContractStep nextStep = ContractStep.getNextContractStep(contractStep);

        Chat chat = chatRepository.save(Chat.builder()
                .chatRoom(chatRoom)
                .wallet(walletChatRoom.getWallet())
                .message(nextStep.getMessageText())
                .messageType(MessageType.INFO)
            .build());

        return ChatRes.builder()
            .chatNo(chat.getChatNo())
            .chatRoomNo(chat.getChatRoom().getChatRoomNo())
            .senderWalletAddress(chat.getWallet().getWalletAddress())
            .senderName(chat.getWallet().getName())
            .messageType(chat.getMessageType())
            .contractStep(chat.getChatRoom().getContractStep())
            .message(chat.getMessage())
            .createdAt(LocalDateTime.now())
            .build();
    }

//    @Override
//    @Transactional
//    public ChatRes createSpecialProvision(Integer chatRoomNo, ChatPayload chatPayload) {
//        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
//            .orElseThrow(ChatRoomNotFoundException::new);
//
//        WalletChatRoom walletChatRoom = walletChatRoomRepository
//            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom,
//                RoleCategory.valueToEnum(chatPayload.getSenderRole()))
//            .orElseThrow(WalletChatRoomNotFoundException::new);
//
//        if (!walletChatRoom.getWallet().getWalletAddress()
//            .equals(chatPayload.getSenderWalletAddress())) {
//            throw new RoleWalletNotMatchException(chatPayload.getSenderWalletAddress(),
//                RoleCategory.valueToEnum(chatPayload.getSenderRole()));
//        }
//
//        ContractStep contractStep = chatRoom.getContractStep();
//
//        if (ContractStep.isProvisionStep(contractStep) && ContractStep.checkRoleStep(walletChatRoom.getRoleCategory(), contractStep)) {
//            chatRoom.setContractStep(ContractStep.getNextContractStep(contractStep));
//        } else {
//            throw new ProgressNotPermittedException(walletChatRoom.getRoleCategory(), contractStep);
//        }
//
//        List<ChatProvision> chatProvisionList = new ArrayList<>();
//
//        for (Integer provision : chatPayload.getProvisionList()) {
//            chatProvisionList.add(chatProvisionRepository.save(ChatProvision.builder()
//                    .chatRoom(chatRoom)
//                    .specialProvisionCategory(SpecialProvisionCategory.valueToEnum(provision))
//                .build()));
//        }
//
//        List<Integer> provisionValues = new ArrayList<>();
//
//        for (ChatProvision chatProvision : chatProvisionList) {
//            provisionValues.add(chatProvision.getSpecialProvisionCategory().getValue());
//        }
//
//        return progressContract(chatRoomNo, chatPayload);
//    }

    @Override
    public ChatRes rejectProvision(Integer chatRoomNo, ChatPayload chatPayload) {
        return null;
    }

    private String getFileExtension(String mimeType) {
        return switch (mimeType) {
            case "image/jpeg" -> "jpg";
            case "image/png" -> "png";
            default -> throw new UnsupportedTypeException(mimeType);
        };
    }

}
