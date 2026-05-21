package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.Dtos.request.SaveLink;
import com.LinkMetric.LinkMetric.service.LinkService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class LinkController {

    @Autowired
    private LinkService linkService;

    @PostMapping("/saveLink")
    public Map<String , Object> savelink (@Valid @RequestBody SaveLink link , Authentication authentication){
        System.out.println("Link controller HITT");
        return linkService.saveLink(link , authentication);
    }
    
}
