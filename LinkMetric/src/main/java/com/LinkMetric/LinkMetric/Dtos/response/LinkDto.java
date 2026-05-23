package com.LinkMetric.LinkMetric.Dtos.response;

import java.time.LocalDateTime;

public class LinkDto {

    private String orignalLink;
    private  String shortLink;
    private LocalDateTime dateTime;
    private Integer linkId;
    private Long totalClicks;

    public Long getTotalClicks() {
        return totalClicks;
    }

    public void setTotalClicks(Long totalClicks) {
        this.totalClicks = totalClicks;
    }

    public String getOrignalLink() {
        return orignalLink;
    }

    public LinkDto(String orignalLink, Integer linkId, LocalDateTime localDateTime, String shortLink, Long totalClicks) {
        this.orignalLink = orignalLink;
        this.linkId = linkId;
        this.dateTime = localDateTime;
        this.shortLink = "https://linkme.com/" + shortLink;
        this.totalClicks = totalClicks;
    }

    public void setOrignalLink(String orignalLink) {
        this.orignalLink = orignalLink;
    }

    public String getShortLink() {
        return shortLink;
    }

    public void setShortLink(String shortLink) {
        this.shortLink = shortLink;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public Integer getLinkId() {
        return linkId;
    }

    public void setLinkId(Integer linkId) {
        this.linkId = linkId;
    }
}
