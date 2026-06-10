package com.LinkMetric.LinkMetric.Dtos.response;

public class UserDto {

    private String name;

    private String email;

    private String userName;

    private Integer totalLinks;

    private  Integer totalClicks = 0 ;

    public void setTotalClicks(Integer totalClicks) {
        this.totalClicks = totalClicks;
    }

    public Integer getTotalClicks() {
        return totalClicks;
    }

    public Integer getTotalLinks() {
        return totalLinks;
    }

    public void setTotalLinks(Integer totalLinks) {
        this.totalLinks = totalLinks;
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

    public UserDto(String name, String email, String userName , Integer totalLinks , Integer totalClicks) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.totalLinks = totalLinks;
        this.totalClicks = totalClicks;
    }
}
