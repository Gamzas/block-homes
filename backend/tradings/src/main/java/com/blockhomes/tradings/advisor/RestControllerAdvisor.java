package com.blockhomes.tradings.advisor;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.exception.common.DateNotFormattedException;
import com.blockhomes.tradings.exception.wallet.WalletNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
@RequiredArgsConstructor
@Slf4j
public class RestControllerAdvisor {

    /**
     * 유효하지 않은 데이터를 전달받았을 경우 처리하기 위한 메서드입니다.
     *
     * @param e 발생한 Exception 객체
     * @return Error 메세지를 Map에 담은 ResponseEntity 객체
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> requestValidation(final MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getAllErrors().forEach((error)-> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(errors);
    }

    /**
     * 400 Error를 처리하는 메서드입니다.
     *
     * @param e 발생한 Exception 객체
     * @return 내용과 코드를 포함한 ResponseEntity 객체
     */
    @ExceptionHandler(value = {DateNotFormattedException.class})
    public ResponseEntity<BaseResponseBody> badRequestError(Exception e) {
        log.error(e.getMessage());

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(BaseResponseBody.builder()
                .message(e.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .build());
    }

    /**
     * 401 Error를 처리하는 메서드입니다.
     *
     * @param e 발생한 Exception 객체
     * @return 내용과 코드를 포함한 ResponseEntity 객체
     */
//    @ExceptionHandler(value = {})
//    public ResponseEntity<BaseResponseBody> unauthorizedError(Exception e) {
//        log.error(e.getMessage());
//
//        return ResponseEntity
//            .status(HttpStatus.UNAUTHORIZED)
//            .body(BaseResponseBody.builder()
//                .message(e.getMessage())
//                .statusCode(HttpStatus.UNAUTHORIZED)
//                .build());
//    }

    /**
     * 404 Error를 처리하는 메서드입니다.
     *
     * @param e 발생한 Exception 객체
     * @return 내용과 코드를 포함한 ResponseEntity 객체
     */
    @ExceptionHandler(value = {WalletNotFoundException.class})
    public ResponseEntity<BaseResponseBody> notFoundError(Exception e) {
        log.error(e.getMessage());

        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(BaseResponseBody.builder()
                .message(e.getMessage())
                .statusCode(HttpStatus.NOT_FOUND)
                .build());
    }

    /**
     * 500 Error를 처리하는 메서드입니다.
     *
     * @param e 발생한 Exception 객체
     * @return 내용과 코드를 포함한 ResponseEntity 객체
     */
    @ExceptionHandler(value = {RuntimeException.class, Exception.class})
    public ResponseEntity<BaseResponseBody> internalServerError(Exception e) {
        log.error(e.getMessage());

        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(BaseResponseBody.builder()
                .message(e.getMessage())
                .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                .build());
    }

}
