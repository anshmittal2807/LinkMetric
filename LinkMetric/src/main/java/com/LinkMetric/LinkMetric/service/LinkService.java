package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.Dtos.request.SaveLink;
import com.LinkMetric.LinkMetric.Dtos.response.LinkDto;
import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.LinkRepository;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public class LinkService {

    @Autowired
    private LinkRepository linkRepository;

    @Autowired
    private UserRepository userRepository;

    public Map<String , Object> saveLink(SaveLink link , Authentication auth){

        Map<String , Object> response = new HashMap<>();

        String userName = auth.getName();

        Optional<User> byUserName = userRepository.findByUserName(userName);

        User user = byUserName.get();

        String hash = UUID.randomUUID().toString().substring(0,8);

        while (linkRepository.existsByHash(hash)){
            hash = UUID.randomUUID().toString().substring(0,8);
        }

        Link savedLink = linkRepository.save(new Link(user , hash , link.getLink()));

        response.put("success" , true);
        response.put("message" , "Link Shortened Successfully");
        response.put("linkDetails" , new LinkDto(savedLink.getLink() , savedLink.getLinkId() ,
                savedLink.getLocalDateTime() , "https://linkme.com/" + savedLink.getHash()));
        return  response;
    }

    @RestController
    @RequestMapping("/api/links")
    public class LinkController {

        private final LinkService linkService;

        public LinkController(LinkService linkService) {
            this.linkService = linkService;
        }

        public boolean deleteLink(Integer id) {
            if (!linkRepository.existsById(id)) {
                return false;
            }

            linkRepository.deleteById(id);
            return true;
        }
    }
}
