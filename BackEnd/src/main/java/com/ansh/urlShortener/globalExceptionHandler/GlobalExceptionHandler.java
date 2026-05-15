package com.ansh.urlShortener.globalExceptionHandler;


import com.ansh.urlShortener.Exception.UserAldreadyExistException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserAldreadyExistException.class)
    public ResponseEntity<?> UserAldreadyExistException (UserAldreadyExistException ex){
        Map<String , Object> res = new HashMap<>();
        res.put("Success" , false);
        res.put("message" , ex.getMessage());
        return new ResponseEntity<>(res , HttpStatus.BAD_REQUEST);

    }

}
