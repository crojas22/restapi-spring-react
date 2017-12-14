import React, { Component } from 'react';
import Home from './Home';
import { getPlayersApi, addPlayerApi, navPlayersApi } from "../api";
import { register} from "../api/websocket";

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            links: {}
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
                players: resp.data._embedded.players,
                links: resp.data._links
            })
        });
    };

    createPlayers = newPlayer => addPlayerApi(newPlayer);

    navigate = navUri => {
        navPlayersApi(navUri).then(resp => {
            this.setState({
                players: resp.data._embedded.players,
                links: resp.data._links
            })
        })
    };


    render() {

        return(
            <div>
                <Home {...this.state} createPlayer={this.createPlayers} navigate={this.navigate}/>
            </div>
        )

    }
}

export default App;