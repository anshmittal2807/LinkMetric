package com.LinkMetric.LinkMetric.model;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDateTime;

@Entity
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer linkId;

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    @Column(length = 2048)
    private  String link;

    private String hash;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User owner;

    private LocalDateTime dateTime;


    private Long totalClicks = 0L;


    public Link( User owner, String hash, String link) {

        this.owner = owner;
        this.hash = hash;
        this.link = link;
        this.dateTime = LocalDateTime.now();


    }

    public Long getTotalClicks() {
        return totalClicks;
    }

    public void setTotalClicks(Long totalClicks) {
        this.totalClicks = totalClicks;
    }

    public Link() {
    }

    public Integer getLinkId() {
        return linkId;
    }

    public void setLinkId(Integer linkId) {
        this.linkId = linkId;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Override
    public String toString() {
        return link + " " + hash + " " + dateTime   ;
    }
}
