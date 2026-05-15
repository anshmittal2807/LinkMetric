package com.ansh.urlShortener.model;

import jakarta.persistence.*;

@Entity
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int linkId;

    private  String link;

    private  String hashLink;

    @ManyToOne
    private User owner;
}
