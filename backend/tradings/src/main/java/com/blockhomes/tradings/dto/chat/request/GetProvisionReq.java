package com.blockhomes.tradings.dto.chat.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetProvisionReq {

    @NotNull
    private Integer chatRoomNo;

}
