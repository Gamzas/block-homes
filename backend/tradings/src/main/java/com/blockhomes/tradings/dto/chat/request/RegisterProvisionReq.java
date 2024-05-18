package com.blockhomes.tradings.dto.chat.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterProvisionReq {

    @NotNull
    Integer chatRoomNo;

    @NotNull
    List<Integer> provisionList;

    @NotNull
    String walletAddress;

}
