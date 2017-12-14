import React from 'react';
import FormAddPlayer from './layout/FormAddPlayer'

const Home = ({createPlayer, navigate, links, players}) => {

    const allPlayers = players.map(({firstName, lastName, _links}, index) => {
        return <li key={index}><a href={_links.player.href}>{firstName} {lastName}</a></li>
    });

    const navLinks = [];
    if ("first" in links) navLinks.push(<button key="first" onClick={() => navigate(links.first.href)}>&lt;&lt;</button>);
    if ("prev" in links) navLinks.push(<button key="prev" onClick={() => navigate(links.prev.href)}>&lt;</button>);
    if ("next" in links) navLinks.push(<button key="next" onClick={() => navigate(links.next.href)}>&gt;</button>);
    if ("last" in links) navLinks.push(<button key="last" onClick={() => navigate(links.last.href)}>&gt;&gt;</button>);

    return(
        <div>
            <FormAddPlayer createPlayer={createPlayer}/>
            <ul>
                {
                    allPlayers
                }
            </ul>
            {
                navLinks
            }
        </div>
    )
};

export default Home;