package com.LinkMetric.LinkMetric.util;

import com.LinkMetric.LinkMetric.Dtos.response.LinkDto;
import com.LinkMetric.LinkMetric.model.Link;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class LinkUtils {

    @Value("${BACKENDURL}")
    private String baseUrl;

    public  List<LinkDto> createLinkDtoList(List<Link> ls){
        List<LinkDto> DtoLs = new ArrayList<>();

        ls.forEach(link -> {
            DtoLs.add(new LinkDto(link.getLink() ,  link.getLinkId() , link.getDateTime() , link.getHash() , link.getTotalClicks() , link.getHost() , baseUrl));
        });

        return DtoLs;
    }

}
