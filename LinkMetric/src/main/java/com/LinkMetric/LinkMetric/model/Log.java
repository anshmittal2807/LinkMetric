package com.LinkMetric.LinkMetric.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;

    private  LocalDateTime clickTimeAndDate;

    @ManyToOne
    private Link link;

    private String ip;

    @ManyToOne
    private User user;


    private  String referer;

    public Log(Link link, String ip ,String refer ,User user){
        this.ip =  ip;
        this.link = link;
        this.clickTimeAndDate = LocalDateTime.now();
        this.user = user;
        this.referer = refer;
    }

    @Override
    public String toString() {
        return "Ip = " + ip + " link = " + link +  " click time  = " + clickTimeAndDate + " referef = " + referer;
    }

    public Log(){

    }
}
