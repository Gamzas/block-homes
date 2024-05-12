package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterItemRes {

    private Integer itemNo;
    private String ownerWalletAddress;
    private String realEstateDID;
    private LocalDateTime createdAt;
    private String mainImageUrl;
    private List<String> roomImageUrls;
    private List<String> kitchenToiletUrls;

}
