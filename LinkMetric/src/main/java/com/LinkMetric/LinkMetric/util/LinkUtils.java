package com.LinkMetric.LinkMetric.util;

import com.LinkMetric.LinkMetric.Dtos.response.LinkDto;
import com.LinkMetric.LinkMetric.model.Link;

import java.util.ArrayList;
import java.util.List;

public class LinkUtils {

    public static List<LinkDto> createLinkDtoList(List<Link> ls){
        List<LinkDto> DtoLs = new ArrayList<>();

        ls.forEach(link -> {
            DtoLs.add(new LinkDto(link.getLink() ,  link.getLinkId() , link.getDateTime() , link.getHash()));
        });

        return DtoLs;
    }

}
