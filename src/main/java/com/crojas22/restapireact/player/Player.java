package com.crojas22.restapireact.player;

import com.crojas22.restapireact.core.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Player extends BaseEntity{

    private String firstName, lastName, position;
    private int number;

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
