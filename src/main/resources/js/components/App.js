import React, { Component } from 'react';
import {getPlayersApi, addPlayerApi, navPlayersApi, getTeamsApi, deletePlayerApi} from "../api";
import { Route, Switch } from 'react-router-dom';
import { register} from "../api/websocket";
import NavBar from "./layout/NavBar";
import Home from './Home';
import Players from "./Players";
import Teams from "./Teams";


class App extends Component {

    state = {
        players: [],
        teams: [],
        teamsLinks: {},
        playersLinks: {},
        pageData: {}
    };

    componentDidMount() {
        this.getPlayers();
        this.getTeams();

        register([
            {route: '/topic/newPlayer', callback: this.getPlayers}
        ]);
    }

    getTeams = () => {
        getTeamsApi().then(resp => {
            this.setState({
                teams: resp.data._embedded.teams
            })
        })
    };

    getPlayers = () => {
        getPlayersApi().then(resp => {
            if (resp.data._links.last !== undefined && resp.data.page.totalElements > this.state.pageData.totalElements) {
                this.navigate(resp.data._links.last.href)
            } else {
                this.setState({
                    players: resp.data._embedded.players,
                    playersLinks: resp.data._links,
                    pageData: resp.data.page,
                })
            }
        });
    };

    createPlayers = newPlayer => addPlayerApi(newPlayer);

    deletePlayers = url => {
        deletePlayerApi(url).then(resp => console.log(resp))
    }

    navigate = navUri => {
        navPlayersApi(navUri).then(resp => {
            this.setState({
                players: resp.data._embedded.players,
                playersLinks: resp.data._links,
                pageData: resp.data.page
            })
        })
    };

    render() {
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/players' render={() => (
                        <Players
                            {...this.state} createPlayer={this.createPlayers} navigate={this.navigate}
                            deletePlayers={this.deletePlayers}
                        />
                    )}/>
                    <Route exact path='/teams' render={() => (<Teams {...this.state} />)}/>
                </Switch>
            </div>
        )
    }
}

export default App;