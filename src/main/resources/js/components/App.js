import React, { Component } from 'react';
import Home from './Home';
import { getEmployees } from "../api";

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        getEmployees().then(resp => {
            console.log(resp)
            this.setState({
                players: resp.data._embedded.players
            })
        })
    }


    render() {

        return(
            <div>
                <Home {...this.state}/>
            </div>
        )

    }
}

export default App;