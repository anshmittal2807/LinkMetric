package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.Dtos.request.CustomAliasReq;
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
    public Map<String , Object> savelink (@Valid @RequestBody SaveLink link , Authentication authentication) throws URISyntaxException {
        System.out.println("Link controller HITT");
        return linkService.saveLink(link , authentication);
    }

    @GetMapping("/link/getAllLinks")
    public ResponseEntity<Map<String , Object>> fetchAllLinks (Authentication authentication){
        System.out.println("fetching all links");
        return new ResponseEntity<>(linkService.fetchAllLinks(authentication) , HttpStatus.OK);
    }

    @GetMapping("/{hashId}")
    public ResponseEntity<Void> redirectUser(@PathVariable String hashId , HttpServletRequest request , Authentication authentication  ) throws URISyntaxException {
        String url = linkService.redirectUser(hashId , request , authentication );
       return ResponseEntity
                .status(HttpStatus.FOUND)
                .location(
                        URI.create(url)
                )
                .build();
    }

    @DeleteMapping("/link/delete/{linkId}")
    public ResponseEntity<Map<String , Object>> deleteLink ( @PathVariable Integer linkId , Authentication authentication) {
        System.out.println("delete endpoint hit");
        return new ResponseEntity<>(linkService.deleteLink(linkId , authentication), HttpStatus.OK);
    }

    @PatchMapping("/link/update")
    public ResponseEntity<Map<String , Object>> saveCustomAlias (@RequestBody @Valid  CustomAliasReq customAliasReq, Authentication authentication) {
        System.out.println("custom alias endpoint hit");

        return new ResponseEntity<>(linkService.saveCustomLink(customAliasReq , authentication), HttpStatus.OK);
    }

    }
