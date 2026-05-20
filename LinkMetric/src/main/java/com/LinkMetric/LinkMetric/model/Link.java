package com.LinkMetric.LinkMetric.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer linkId;

    @Column(length = 2048)
    private  String link;

    private String hash;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User owner;

    private LocalDateTime localDateTime;

    public Link( User owner, String hash, String link) {

        this.owner = owner;
        this.hash = hash;
        this.link = link;
        this.localDateTime = LocalDateTime.now();
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
}
