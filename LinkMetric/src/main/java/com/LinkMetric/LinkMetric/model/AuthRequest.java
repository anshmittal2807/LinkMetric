package com.LinkMetric.LinkMetric.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class AuthRequest {

    @NotBlank(message = "UserName Can Not be blank")
    private String userName;

    @NotBlank(message = "Password Can Not be blank")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
             message = "Password must contain uppercase, lowercase, number, special character " +
                     "and be at least 8 characters long" )

    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
