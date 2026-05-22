package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.Log;
import com.LinkMetric.LinkMetric.repositories.LogRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogService {

    @Autowired
    private LogRepository logRepository;

    public void addLog(HttpServletRequest request , Link link){
        String ip =  request.getRemoteAddr();
        Log log =  new Log(link , ip);
        logRepository.save(log);
    }
}
