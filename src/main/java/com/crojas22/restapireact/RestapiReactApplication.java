package com.crojas22.restapireact;

import com.crojas22.restapireact.player.Player;
import com.crojas22.restapireact.player.PlayerRepository;
import com.crojas22.restapireact.team.Team;
import com.crojas22.restapireact.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class RestapiReactApplication implements CommandLineRunner{

    public static void main(String[] args) {
		SpringApplication.run(RestapiReactApplication.class, args);
	}


	private final PlayerRepository playerRepository;
    private final TeamRepository teamRepository;

    @Autowired
    public RestapiReactApplication(PlayerRepository playerRepository, TeamRepository teamRepository) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
    }



	@Override
	public void run(String... strings) throws Exception {
        Team team1 = new Team("Yankees", "New York", "NY");
        team1.addPlayer(new Player("Cesar", "Rojas", "shortstop", 21));
        team1.addPlayer(new Player("Barry", "Bonds", "left field", 24));
        team1.addPlayer(new Player("Babe", "Ruth","right field", 40));
        team1.addPlayer(new Player("Raul", "Cruz", "shortstop", 21));
        teamRepository.save(team1);
	}
}
