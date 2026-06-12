package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.Dtos.request.CustomAliasReq;
import com.LinkMetric.LinkMetric.Dtos.request.SaveLink;
import com.LinkMetric.LinkMetric.Dtos.response.LinkDto;
import com.LinkMetric.LinkMetric.Dtos.response.UserDto;
import com.LinkMetric.LinkMetric.Exception.LinkNotFoundException;
import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.LinkRepository;
import com.LinkMetric.LinkMetric.repositories.LogRepository;
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

    @Autowired
    private LogRepository logRepository;
    public Map<String , Object> saveLink(SaveLink link , Authentication auth) throws URISyntaxException {

        Map<String , Object> response = new HashMap<>();

        String userName = auth.getName();

        Optional<User> byUserName = userRepository.findByUserName(userName);

        User user = byUserName.get();

        user.setTotalLinks(user.getTotalLinks() + 1);


        String hash = UUID.randomUUID().toString().substring(0,8);

        while (linkRepository.existsByHash(hash)){
            hash = UUID.randomUUID().toString().substring(0,8);
        }
        URI uri = new URI(link.getLink());
        String host = uri.getHost();

        Link savedLink = linkRepository.save(new Link(user , hash , link.getLink() , host));

        User save = userRepository.save(user);

        response.put("success" , true);
        response.put("message" , "Link Shortened Successfully");
        response.put("user" , new UserDto(save.getEmail() , save.getEmail() , save.getUserName() , save.getTotalLinks(), save.getTotalClicks()));

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


    public String redirectUser(String hashId , HttpServletRequest request ,  Authentication authentication) throws URISyntaxException {
        Link link = linkRepository.findByHash(hashId);
        if (link == null) {
            throw new LinkNotFoundException("Link not found ");
        }
        String userName = authentication.getName();
        Optional<User> userOpt = userRepository.findByUserName(userName);
        User user = userOpt.get();
        user.setTotalClicks(user.getTotalClicks() + 1);

        logService.addLog(request , link , link.getOwner());
        link.setTotalClicks(link.getTotalClicks() + 1);
        linkRepository.save(link);
        return link.getLink();
    }

    public Map<String, Object> deleteLink(Integer linkId, Authentication authentication) {

        Map<String, Object> responseMap = new HashMap<>();

        String userName = authentication.getName();

        Optional<Link> linkOptional = linkRepository.findById(linkId);

        if (linkOptional.isEmpty()) {
            responseMap.put("success", false);
            responseMap.put("message", "Link not found");
            return responseMap;
        }

        Link link = linkOptional.get();

        if (!link.getOwner().getUserName().equals(userName)) {
            responseMap.put("success", false);
            responseMap.put("message", "You are not authorized to delete this link");
            return responseMap;
        }
        linkRepository.delete(link);
        link.getOwner().setTotalLinks(link.getOwner().getTotalLinks() -1);
        User save = userRepository.save(link.getOwner());

        responseMap.put("success", true);
        responseMap.put("user" , new UserDto(save.getEmail() , save.getEmail() , save.getUserName() , save.getTotalClicks(), save.getTotalLinks()));
        responseMap.put("message", "Link deleted successfully");

        return responseMap;
    }


    public Map<String, Object> saveCustomLink(CustomAliasReq linkReq, Authentication authentication) {

        Map<String, Object> responseMap = new HashMap<>();

        String userName = authentication.getName();

        Optional<Link> linkOptional = linkRepository.findById(linkReq.getLinkId());

        if (linkOptional.isEmpty()) {
            responseMap.put("success", false);
            responseMap.put("message", "Link not found");
            return responseMap;
        }

        Link link = linkOptional.get();

        if (!link.getOwner().getUserName().equals(userName)) {
            responseMap.put("success", false);
            responseMap.put("message", "You are not authorized to edit this link");
            return responseMap;
        }

        if(link.getHash().equals(linkReq.getHash())){
            responseMap.put("success", true);
            responseMap.put("message", "Link updated successfully");

            return responseMap;
        }

        boolean exist = linkRepository.existsByHash(linkReq.getHash());

        if(exist){
            responseMap.put("success", false);
            responseMap.put("message", "This Custom Alias aldready exists");
            return responseMap;
        }

        link.setHash(linkReq.getHash());
        linkRepository.save(link);

        responseMap.put("success", true);
        responseMap.put("message", "Link updated successfully");

        return responseMap;
    }

    }
