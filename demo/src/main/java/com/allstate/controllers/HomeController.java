package com.allstate.controllers;


import com.allstate.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@Controller
public class HomeController {

    private final MongoRepository<Visitor, String> visitorRepository;

    @Autowired
    public HomeController(final MongoRepository<Visitor, String> visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    @RequestMapping("/")
    public String index(@RequestParam(name="name", required = false,
            defaultValue = "Anonymous User")String name,
                        Model model){
        Date date = new Date();

        visitorRepository.save(new Visitor(name, date, ""));
        List<Visitor> visitorList = visitorRepository.findAll();
        Collections.sort(visitorList);


        model.addAttribute("visitors", visitorList);
        model.addAttribute("name", name);
        model.addAttribute("date", date);

        return "home/index";
    }

    @RequestMapping("/{id}/**")
    public String otherIndex(@PathVariable("id") String url,@RequestParam(name="name", required = false,
            defaultValue = "Anonymous User")String name,
                             Model model ){

        Date date = new Date();

        visitorRepository.save(new Visitor(name, date, url));
        List<Visitor> visitorList = visitorRepository.findAll();
        Collections.sort(visitorList);


        model.addAttribute("visitors", visitorList);
        model.addAttribute("name", name);
        model.addAttribute("date", date);
        model.addAttribute("url", url);

        return "home/index";


    }



}
