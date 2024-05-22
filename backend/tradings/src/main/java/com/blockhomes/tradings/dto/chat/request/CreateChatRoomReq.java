package com.blockhomes.tradings.dto.chat.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateChatRoomReq {

    @NotNull
    private Integer itemNo;

    @NotBlank
    private String walletAddress;

}
