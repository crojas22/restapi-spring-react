import React, { Component } from 'react';
import Home from './Home';
import { getPlayersApi, addPlayerApi, navPlayersApi } from "../api";
import { register} from "../api/websocket";

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            links: {},
            pageData: {}
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.players !== nextState.players) {
            return true;
        }
        return false
    }

    componentDidMount() {
        this.getPlayers();

        register([
            {route: '/topic/newPlayer', callback: this.getPlayers}
        ]);
    }

    getPlayers = () => {
        getPlayersApi().then(resp => {
            if (resp.data._links.last !== undefined) {
                this.navigate(resp.data._links.last.href)
            } else {
                this.setState({
                    players: resp.data._embedded.players,
                    links: resp.data._links,
                    pageData: resp.data.page,
                })

            }
        });
    };

    createPlayers = newPlayer => addPlayerApi(newPlayer);

    navigate = navUri => {
        navPlayersApi(navUri).then(resp => {
            console.log(resp)
            this.setState({
                players: resp.data._embedded.players,
                links: resp.data._links,
                pageData: resp.data.page
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