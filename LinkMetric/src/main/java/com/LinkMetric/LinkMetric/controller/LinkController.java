package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.Dtos.request.SaveLink;
import com.LinkMetric.LinkMetric.service.LinkService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

@RestController
public class LinkController {

    @Autowired
    private LinkService linkService;

    @PostMapping("/link/saveLink")
    public Map<String , Object> savelink (@Valid @RequestBody SaveLink link , Authentication authentication){
        System.out.println("Link controller HITT");
        return linkService.saveLink(link , authentication);
    }
    @GetMapping("/link/getAllLinks")
    public Map<String , Object> fetchAllLinks (Authentication authentication){
        return linkService.fetchAllLinks(authentication);
    }

    @GetMapping("/link/redirect/{hashId}")
    public ResponseEntity<Void> redirectUser(@PathVariable String hashId , HttpServletRequest request) throws URISyntaxException {
        String url = linkService.redirectUser(hashId , request);
       return ResponseEntity
                .status(HttpStatus.FOUND)
                .location(
                        URI.create(url)
                )
                .build();
    }

}
