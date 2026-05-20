package com.LinkMetric.LinkMetric.Exception;

import com.LinkMetric.LinkMetric.Dtos.response.ExceptionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ExceptionDto> userNotFoundException(UserNotFoundException e){
        return new ResponseEntity<>(new ExceptionDto(e.getMessage() , HttpStatus.NOT_FOUND.value()) , HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDto> usernameOrPasswordValidationFailed(MethodArgumentNotValidException e){
        return new ResponseEntity<>(new ExceptionDto( e.getBindingResult()
                .getFieldErrors()
                .get(0)
                .getDefaultMessage() , HttpStatus.BAD_REQUEST.value()) , HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ExceptionDto> handleBadCredentials(
            BadCredentialsException e){

        return new ResponseEntity<>(
                new ExceptionDto(
                        "Invalid Username or Password",
                        HttpStatus.UNAUTHORIZED.value()
                ),
                HttpStatus.UNAUTHORIZED
        );
    }
    @ExceptionHandler(UserExistsException.class)
    public ResponseEntity<ExceptionDto> UserExistsException(UserExistsException e){
        return new ResponseEntity<>(new ExceptionDto(e.getMessage() , HttpStatus.BAD_REQUEST.value()) , HttpStatus.BAD_REQUEST);
    }



}
