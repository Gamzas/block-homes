package com.blockhomes.tradings.dto.item.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeleteItemReq {

    @NotNull
    private Integer itemNo;

    @NotBlank
    private String walletAddress;

}
