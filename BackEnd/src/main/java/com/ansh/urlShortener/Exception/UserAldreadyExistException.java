package com.ansh.urlShortener.Exception;

public class UserAldreadyExistException extends RuntimeException{
    public UserAldreadyExistException(String message){
        super(message);
    }
}
