package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetProvisionRes {

    private Integer chatRoomNo;
    private List<Integer> specialProvisionList;

}
