package com.blockhomes.tradings.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BaseResponseBody {

    private String exceptionName;
    private String message;
    private Integer statusCode;

    @Builder
    public BaseResponseBody(String exceptionName, String message, HttpStatus statusCode) {
        this.exceptionName = exceptionName;
        this.message = message;
        this.statusCode = statusCode.value();
    }

}
