package com.crojas22.restapireact.player;

import com.crojas22.restapireact.core.BaseEntity;
import com.crojas22.restapireact.team.Team;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Player extends BaseEntity{

    private String firstName, lastName, position;
    private int number;
    @ManyToOne
    private Team team;

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




    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}
