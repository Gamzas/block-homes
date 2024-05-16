package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.chat.ByteArrayMultipartFile;
import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.dto.chat.payload.ChatPayload;
import com.blockhomes.tradings.dto.chat.payload.EnterPayload;
import com.blockhomes.tradings.dto.chat.payload.ProgressPayload;
import com.blockhomes.tradings.dto.chat.payload.ProvisionPayload;
import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.dto.chat.response.ProgressRes;
import com.blockhomes.tradings.dto.chat.response.ProvisionRes;
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
    public ChatRes enterUser(Integer chatRoomNo, EnterPayload enterPayload) {
        ChatRoom chatRoom = chatRoomRepository
            .getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        Wallet wallet = walletRepository
            .getWalletByWalletAddress(enterPayload.getSenderWalletAddress())
            .orElseThrow(WalletNotFoundException::new);

        WalletChatRoom walletChatRoom = walletChatRoomRepository
            .getWalletChatRoomByWalletAndChatRoom(wallet, chatRoom)
            .orElseThrow(WalletChatRoomNotFoundException::new);

        Chat chat = chatRepository.save(Chat.builder()
            .wallet(wallet)
            .chatRoom(chatRoom)
            .message(wallet.getName() + " (" + walletChatRoom.getRoleCategory().getRole() + ") " + "님이 거래 대화방에 입장하셨어요.")
            .build());

        return ChatRes.builder()
            .chatNo(chat.getChatNo())
            .chatRoomNo(chat.getChatRoom().getChatRoomNo())
            .senderWalletAddress(chat.getWallet().getWalletAddress())
            .senderName(chat.getWallet().getName())
            .messageType(MessageType.ENTER)
            .image("")
            .contractStep(chat.getChatRoom().getContractStep())
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

        if (!chatPayload.getImageBase64().isBlank()) {
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

        Chat chat = Chat.builder()
            .chatRoom(chatRoom)
            .message(chatPayload.getMessage())
            .wallet(wallet)
            .image(image)
            .build();

        if (Objects.nonNull(image)) {
            return ChatRes.builder()
                .chatNo(chat.getChatNo())
                .chatRoomNo(chat.getChatRoom().getChatRoomNo())
                .senderWalletAddress(chat.getWallet().getWalletAddress())
                .senderName(chat.getWallet().getName())
                .messageType(MessageType.TALK)
                .image(chat.getImage().getImageUrl())
                .contractStep(chat.getChatRoom().getContractStep())
                .createdAt(chat.getCreatedAt())
                .build();
        } else {
            return ChatRes.builder()
                .chatNo(chat.getChatNo())
                .chatRoomNo(chat.getChatRoom().getChatRoomNo())
                .senderWalletAddress(chat.getWallet().getWalletAddress())
                .senderName(chat.getWallet().getName())
                .messageType(MessageType.TALK)
                .contractStep(chat.getChatRoom().getContractStep())
                .createdAt(chat.getCreatedAt())
                .build();
        }

    }

    @Override
    @Transactional
    public ProgressRes progressContract(Integer chatRoomNo, ProgressPayload progressPayload) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        WalletChatRoom walletChatRoom = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom,
                RoleCategory.valueToEnum(progressPayload.getSenderRole()))
            .orElseThrow(WalletChatRoomNotFoundException::new);

        if (!walletChatRoom.getWallet().getWalletAddress()
            .equals(progressPayload.getSenderWalletAddress())) {
            throw new RoleWalletNotMatchException(progressPayload.getSenderWalletAddress(),
                RoleCategory.valueToEnum(progressPayload.getSenderRole()));
        }

        ContractStep contractStep = chatRoom.getContractStep();

        if (ContractStep.checkRoleStep(walletChatRoom.getRoleCategory(), contractStep)) {
            chatRoom.setContractStep(ContractStep.getNextContractStep(contractStep));
        } else {
            throw new ProgressNotPermittedException(walletChatRoom.getRoleCategory(), contractStep);
        }

        return ProgressRes.builder()
            .chatRoomNo(chatRoom.getChatRoomNo())
            .messageType(MessageType.INFO)
            .contractStep(chatRoom.getContractStep())
            .message(chatRoom.getContractStep().getMessageText())
            .createdAt(LocalDateTime.now())
            .build();
    }

    @Override
    @Transactional
    public ProvisionRes createSpecialProvision(Integer chatRoomNo, ProvisionPayload provisionPayload) {
        ChatRoom chatRoom = chatRoomRepository.getChatRoomByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);

        WalletChatRoom walletChatRoom = walletChatRoomRepository
            .getWalletChatRoomByChatRoomAndRoleCategory(chatRoom,
                RoleCategory.valueToEnum(provisionPayload.getSenderRole()))
            .orElseThrow(WalletChatRoomNotFoundException::new);

        if (!walletChatRoom.getWallet().getWalletAddress()
            .equals(provisionPayload.getSenderWalletAddress())) {
            throw new RoleWalletNotMatchException(provisionPayload.getSenderWalletAddress(),
                RoleCategory.valueToEnum(provisionPayload.getSenderRole()));
        }

        ContractStep contractStep = chatRoom.getContractStep();

        if (ContractStep.isProvisionStep(contractStep) && ContractStep.checkRoleStep(walletChatRoom.getRoleCategory(), contractStep)) {
            chatRoom.setContractStep(ContractStep.getNextContractStep(contractStep));
        } else {
            throw new ProgressNotPermittedException(walletChatRoom.getRoleCategory(), contractStep);
        }

        List<ChatProvision> chatProvisionList = new ArrayList<>();

        for (Integer provision : provisionPayload.getProvisionList()) {
            chatProvisionList.add(chatProvisionRepository.save(ChatProvision.builder()
                    .chatRoom(chatRoom)
                    .specialProvisionCategory(SpecialProvisionCategory.valueToEnum(provision))
                .build()));
        }

        List<Integer> provisionValues = new ArrayList<>();

        for (ChatProvision chatProvision : chatProvisionList) {
            provisionValues.add(chatProvision.getSpecialProvisionCategory().getValue());
        }

        ProgressRes progressRes = progressContract(chatRoomNo,
            ProgressPayload.builder()
                .senderWalletAddress(provisionPayload.getSenderWalletAddress())
                .senderRole(provisionPayload.getSenderRole())
                .build());

        return ProvisionRes.builder()
            .chatRoomNo(progressRes.getChatRoomNo())
            .provisionList(provisionValues)
            .messageType(MessageType.INFO)
            .message(progressRes.getMessage())
            .createdAt(progressRes.getCreatedAt())
            .build();
    }

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
