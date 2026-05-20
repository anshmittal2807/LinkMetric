package com.LinkMetric.LinkMetric.Dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDateTime;

public class SaveLink {

    @NotBlank
    @Pattern(regexp = "^(https?:\\/\\/)[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$" , message = "Please use a valid URL")
    private  String link;

    private LocalDateTime localDateTime;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
        this.localDateTime = LocalDateTime.now();

    }
     SaveLink(){
    }

}
