package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikeItemRes {

    private String walletAddress;
    private Integer itemNo;
    private LocalDateTime createdAt;

}
