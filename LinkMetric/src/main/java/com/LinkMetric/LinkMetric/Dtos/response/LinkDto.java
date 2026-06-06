package com.LinkMetric.LinkMetric.Dtos.response;

import java.time.LocalDateTime;

public class LinkDto {

    private String originalLink;
    private  String shortLink;
    private LocalDateTime dateTime;
    private Integer linkId;
    private Long totalClicks;
    private String host;

    public Long getTotalClicks() {
        return totalClicks;
    }

    public void setTotalClicks(Long totalClicks) {
        this.totalClicks = totalClicks;
    }

    public String getOrignalLink() {
        return originalLink;
    }

    public LinkDto(String orignalLink, Integer linkId, LocalDateTime localDateTime, String shortLink, Long totalClicks , String host) {
        this.originalLink = orignalLink;
        this.linkId = linkId;
        this.dateTime = localDateTime;
        this.shortLink = "localhost:8080/" + shortLink;
        this.totalClicks = totalClicks;
        this.host = host;
    }

    public void setOrignalLink(String orignalLink) {
        this.originalLink = orignalLink;
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

    public String getHost() {
        return host;
    }
}
