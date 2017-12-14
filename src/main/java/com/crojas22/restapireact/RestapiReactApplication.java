package com.crojas22.restapireact;

import com.crojas22.restapireact.player.Player;
import com.crojas22.restapireact.player.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestapiReactApplication implements CommandLineRunner{

    public static void main(String[] args) {
		SpringApplication.run(RestapiReactApplication.class, args);
	}


	private final PlayerRepository playerRepository;

    @Autowired
    public RestapiReactApplication(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }



	@Override
	public void run(String... strings) throws Exception {
		this.playerRepository.save(new Player("Cesar", "Rojas", "shortstop", 21));
        this.playerRepository.save(new Player("Barry", "Bonds", "left field", 24));
        this.playerRepository.save(new Player("Babe", "Ruth", "designated hitter", 11));
	}
}
