package com.ansh.urlShortener.model;

import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

public class Link {

    @Id
    private int linkId;

    private  String link;

    private  String hashLink;

    private User owner;
}
