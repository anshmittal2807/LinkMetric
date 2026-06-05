package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.Dtos.request.SaveLink;
import com.LinkMetric.LinkMetric.Dtos.response.LinkDto;
import com.LinkMetric.LinkMetric.Exception.LinkNotFoundException;
import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.LinkRepository;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import com.LinkMetric.LinkMetric.util.LinkUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@Service
public class LinkService {

    @Autowired
    private LinkRepository linkRepository;

    @Autowired
    private LogService logService;

    @Autowired
    private UserRepository userRepository;

    public Map<String , Object> saveLink(SaveLink link , Authentication auth) throws URISyntaxException {

        Map<String , Object> response = new HashMap<>();

        String userName = auth.getName();

        Optional<User> byUserName = userRepository.findByUserName(userName);

        User user = byUserName.get();

        String hash = UUID.randomUUID().toString().substring(0,8);

        while (linkRepository.existsByHash(hash)){
            hash = UUID.randomUUID().toString().substring(0,8);
        }
        URI uri = new URI(link.getLink());
        String host = uri.getHost();

        Link savedLink = linkRepository.save(new Link(user , hash , link.getLink() , host));

        response.put("success" , true);
        response.put("message" , "Link Shortened Successfully");
        response.put("linkDetails" , new LinkDto(savedLink.getLink() , savedLink.getLinkId() ,
                savedLink.getDateTime() ,  savedLink.getHash(), savedLink.getTotalClicks() , savedLink.getHost()));
        return  response;
    }

    public Map<String , Object> fetchAllLinks (Authentication authentication){
        Map<String , Object> responseMap = new HashMap<>();
        String userName = authentication.getName();
        Optional<User> userOpt = userRepository.findByUserName(userName);
        User user = userOpt.get();
        List<Link> allLinks = linkRepository.findAllByOwner(user);
        responseMap.put("success" , true);
        responseMap.put("data" , LinkUtils.createLinkDtoList(allLinks));
        return responseMap;
    }


    public String redirectUser(String hashId , HttpServletRequest request) throws URISyntaxException {
        Link link = linkRepository.findByHash(hashId);
        if (link == null) {
            throw new LinkNotFoundException("Link not found ");
        }

        logService.addLog(request , link);
        link.setTotalClicks(link.getTotalClicks() + 1);
        linkRepository.save(link);
        return link.getLink();
    }

}
