package com.crojas22.restapireact.web.controller;

import com.crojas22.restapireact.player.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class HomeController {

    private final PlayerRepository playerRepository;

    @Autowired
    public HomeController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @GetMapping
    public String getHome() {
        return "index";
    }
}
