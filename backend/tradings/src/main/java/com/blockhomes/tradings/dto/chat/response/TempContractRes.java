package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TempContractRes {

    private Integer chatRoomNo;
    private String tempContractAddress;

}
