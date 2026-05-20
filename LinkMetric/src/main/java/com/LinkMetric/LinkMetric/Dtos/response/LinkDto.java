package com.LinkMetric.LinkMetric.Dtos.response;

import java.time.LocalDateTime;

public class LinkDto {

    private String orignalLink;
    private  String shortLink;
    private LocalDateTime localDateTime;
    private Integer linkId;

    public String getOrignalLink() {
        return orignalLink;
    }

    public LinkDto(String orignalLink, Integer linkId, LocalDateTime localDateTime, String shortLink) {
        this.orignalLink = orignalLink;
        this.linkId = linkId;
        this.localDateTime = localDateTime;
        this.shortLink = shortLink;
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

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public Integer getLinkId() {
        return linkId;
    }

    public void setLinkId(Integer linkId) {
        this.linkId = linkId;
    }
}
