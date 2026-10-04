package com.LinkMetric.LinkMetric.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping({"/login", "/signup", "/dashboard", "/analytics", "/error"})
    public String frontend() {
        return "forward:/index.html";
    }
}
