package com.crojas22.restapireact.player;

import com.crojas22.restapireact.core.BaseEntity;
import com.crojas22.restapireact.team.Team;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Player extends BaseEntity{

    private String firstName, lastName, position;
    private int number;
    @ManyToOne
    private Team team;
    private String teamName;

    protected Player() {
        super();
    }

    public Player(String firstName, String lastName, String position, int number) {
        this();
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.number = number;

    }
}
