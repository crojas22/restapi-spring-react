import React from 'react';
import FormAddPlayer from './layout/FormAddPlayer'

const Home = props => {

    const players = props.players.map(({firstName, lastName, _links}, index) => {
        return <li key={index}><a href={_links.player.href}>{firstName} {lastName}</a></li>
    })

    return(
        <div>
            <FormAddPlayer onCreate={props.onCreate}/>
            <ul>
                {
                    players
                }
            </ul>
        </div>
    )
};

export default Home;