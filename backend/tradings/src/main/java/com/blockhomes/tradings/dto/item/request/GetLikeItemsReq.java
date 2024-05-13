package com.blockhomes.tradings.dto.item.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetLikeItemsReq {

    @NotBlank
    private String userAddress;

    @NotBlank
    private String localDateTime;

}
