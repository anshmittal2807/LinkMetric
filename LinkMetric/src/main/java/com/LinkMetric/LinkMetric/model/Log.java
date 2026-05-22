package com.LinkMetric.LinkMetric.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;

    private LocalDateTime clickTimeAndDate;

    @ManyToOne
    private Link link;

    private String ip;

    Log(Link link , String  ip){
        this.ip =  ip;
        this.link = link;
        this.clickTimeAndDate = LocalDateTime.now();
    }

}
