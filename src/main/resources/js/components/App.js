import React, { Component } from 'react';
import Home from './Home';
import { getPlayers, addPlayer } from "../api";

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        getPlayers().then(resp => {
            this.setState({
                players: resp.data._embedded.players
            })
        });
    }

    onCreate = newPlayer => {
        addPlayer(newPlayer).then(resp => {
            console.log(resp);
        })
    };


    render() {

        return(
            <div>
                <Home {...this.state} onCreate={this.onCreate}/>
            </div>
        )

    }
}

export default App;