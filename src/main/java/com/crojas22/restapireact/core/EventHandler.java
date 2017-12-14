package com.crojas22.restapireact.core;

import com.crojas22.restapireact.player.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.hateoas.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import static com.crojas22.restapireact.core.WebSocketConfiguration.MESSAGE_PREFIX;

@Component
@RepositoryEventHandler(Player.class)
public class EventHandler {

    private final SimpMessagingTemplate websocket;
    private final EntityLinks entityLinks;

    @Autowired
    public EventHandler(SimpMessagingTemplate websocket, EntityLinks entityLinks) {
        this.websocket = websocket;
        this.entityLinks = entityLinks;
    }

    @HandleAfterCreate
    public void newPlayer(Player player) {
        this.websocket.convertAndSend(MESSAGE_PREFIX + "/newPlayer", getPath(player));
    }

    @HandleAfterDelete
    public void deleteEmployee(Player player) {
        this.websocket.convertAndSend(
                MESSAGE_PREFIX + "/deletePlayer", getPath(player));
    }

    @HandleAfterSave
    public void updateEmployee(Player player) {
        this.websocket.convertAndSend(
                MESSAGE_PREFIX + "/updatePlayer", getPath(player));
    }

    private String getPath(Player player) {
        return this.entityLinks.linkForSingleResource(player.getClass(), player.getId()).toUri().getPath();
    }
}