import React, { Component } from 'react';
import Home from './Home';
import { getPlayersApi, addPlayerApi } from "../api";
import { register} from "../api/websocket";

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        this.getPlayers();

        register([
            {route: '/topic/newPlayer', callback: this.getPlayers}
        ]);
    }

    getPlayers = () => {
        getPlayersApi().then(resp => {
            this.setState({
                players: resp.data._embedded.players
            })
        });
    };

    createPlayers = newPlayer => {
        addPlayerApi(newPlayer)
    };


    render() {

        return(
            <div>
                <Home {...this.state} createPlayer={this.createPlayers}/>
            </div>
        )

    }
}

export default App;