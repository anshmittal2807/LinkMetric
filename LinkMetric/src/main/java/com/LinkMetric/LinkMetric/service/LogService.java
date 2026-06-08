package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.Log;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.LogRepository;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import java.net.URI;
import java.util.Optional;

@Service
public class LogService {

    @Autowired
    private LogRepository logRepository;

    @Autowired
    private UserRepository userRepository;

    public void addLog(HttpServletRequest request, Link link , User owner) {

        String ip = request.getRemoteAddr();
   ;

        String referrer = request.getHeader("Referer");

        String source = "DIRECT";

        try {

            if(referrer != null) {

                URI uri = new URI(referrer);

                if(uri.getHost() != null) {
                    source = uri.getHost();
                }
            }


        } catch (Exception e) {
            source = "UNKNOWN";
        }

        Log log = new Log(link, ip, source , owner);

        logRepository.save(log);

        System.out.println(log);
    }


}

