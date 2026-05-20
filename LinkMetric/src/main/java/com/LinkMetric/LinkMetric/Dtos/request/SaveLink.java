package com.LinkMetric.LinkMetric.Dtos.request;

import java.time.LocalDateTime;

public class SaveLink {

    private  String Link;

    private LocalDateTime localDateTime;

    public String getLink() {
        return Link;
    }

    public void setLink(String link) {
        Link = link;
        this.localDateTime = LocalDateTime.now();

    }
     SaveLink(){
    }

}
