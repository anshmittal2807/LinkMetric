package com.ansh.urlShortener.DTOs;

public class UserDto {
    private  String userName;
    private  String email;

    public String getEmail() {
        return email;
    }

    public UserDto(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}

