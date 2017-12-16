package com.crojas22.restapireact.team;

import com.crojas22.restapireact.core.BaseEntity;
import com.crojas22.restapireact.player.Player;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Team extends BaseEntity{

    private String name, city, state;
    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    List<Player> players;

    protected Team() {
        super();
        players = new ArrayList<>();
    }

    public Team(String name, String city, String state) {
        this();
        this.name = name;
        this.city = city;
        this.state = state;
    }

    public void addPlayer(Player player) {
        player.setTeam(this);
        players.add(player);
    }
}
