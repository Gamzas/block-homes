package com.blockhomes.tradings.dto.chat.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CheckChatRoomReq {

    @NotNull
    private Integer itemNo;

    @NotBlank
    private String walletAddress;

}
