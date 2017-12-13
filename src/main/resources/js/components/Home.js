import React from 'react';

const Home = props => {

    const players = props.players.map(({firstName, lastName, _links}, index) => {
        return <li key={index}><a href={_links.player.href}>{firstName} {lastName}</a></li>
    })

    return(
        <div>
            <ul>
                {
                    players
                }
            </ul>
        </div>
    )
};

export default Home;