package com.ansh.urlShortener.controller;

import com.ansh.urlShortener.DTOs.UserDto;
import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public UserDto saveUser (User user){
        
    }

}
