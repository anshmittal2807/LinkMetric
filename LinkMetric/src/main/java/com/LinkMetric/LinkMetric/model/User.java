package com.LinkMetric.LinkMetric.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private  Integer totalLinks = 0 ;

    public Integer getTotalLinks() {
        return totalLinks;
    }

    public void setTotalLinks(Integer totalLinks) {
        this.totalLinks = totalLinks;
    }


    private String name;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String userName;


    private String password;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User(String name, String email, String userName, String password) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
    public User() {
    }
}
