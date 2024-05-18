package com.blockhomes.tradings.dto.wallet.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListContractRes {

    private List<ListContractInstance> contractLists;
    private Integer count;

}
