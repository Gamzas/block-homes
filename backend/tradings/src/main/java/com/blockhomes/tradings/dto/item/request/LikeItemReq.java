package com.blockhomes.tradings.dto.item.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikeItemReq {

    @NotNull
    private String userDID;

    @NotNull
    private String realEstateDID;

}
