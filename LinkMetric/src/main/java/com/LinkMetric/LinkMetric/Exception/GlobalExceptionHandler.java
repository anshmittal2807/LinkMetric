package com.LinkMetric.LinkMetric.Exception;


import com.LinkMetric.LinkMetric.Dtos.response.ExceptionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.URISyntaxException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(InternalAuthenticationServiceException.class)
    public ResponseEntity<ExceptionDto> handleInternalAuthException(
            InternalAuthenticationServiceException e){

        return new ResponseEntity<>(
                new ExceptionDto(
                        "Invalid username or password",
                        HttpStatus.UNAUTHORIZED.value()
                ),
                HttpStatus.UNAUTHORIZED
        );
    }


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

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDto> handleGenericException(Exception e){
        System.out.println("Exception Type: " + e.getClass().getName());

        e.printStackTrace();
        return new ResponseEntity<>(
                new ExceptionDto(
                        "Something went wrong",
                        HttpStatus.INTERNAL_SERVER_ERROR.value()
                ),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(LinkNotFoundException.class)
    public ResponseEntity<ExceptionDto> LinkNotFoundException(Exception e){
        e.printStackTrace();
        return new ResponseEntity<>(
                new ExceptionDto(
                        "Link Not Found",
                        HttpStatus.NOT_FOUND.value()
                ),
                HttpStatus.NOT_FOUND
        );
    }
    @ExceptionHandler(UserNotLoggedInException.class)
    public ResponseEntity<ExceptionDto> UserNotLoggedInException(UserNotLoggedInException e){
        return new ResponseEntity<>(new ExceptionDto(e.getMessage() , HttpStatus.BAD_REQUEST.value()) , HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(URISyntaxException.class)
    public ResponseEntity<ExceptionDto> URISyntaxException(URISyntaxException e){
        return new ResponseEntity<>(new ExceptionDto(e.getMessage() , HttpStatus.BAD_REQUEST.value()) , HttpStatus.BAD_REQUEST);
    }

}
