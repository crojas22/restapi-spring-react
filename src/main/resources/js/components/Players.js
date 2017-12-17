import React from 'react';
import FormAddPlayer from "./layout/FormAddPlayer";

const Players = ({ createPlayer, deletePlayers, navigate, playersLinks, players, teams }) => {

    const allPlayers = players.map(({firstName, lastName, _links}, index) => {
        return(
            <li key={index}>
                <a href={_links.player.href}>
                    {firstName} {lastName}
                </a>
                <button onClick={() => deletePlayers(_links.player.href)}>
                    delete
                </button>
            </li>
        )
    });

    const navLinks = [];
    if ("first" in playersLinks) navLinks.push(<button key="first" onClick={() => navigate(playersLinks.first.href)}>&lt;&lt;</button>);
    if ("prev" in playersLinks) navLinks.push(<button key="prev" onClick={() => navigate(playersLinks.prev.href)}>&lt;</button>);
    if ("next" in playersLinks) navLinks.push(<button key="next" onClick={() => navigate(playersLinks.next.href)}>&gt;</button>);
    if ("last" in playersLinks) navLinks.push(<button key="last" onClick={() => navigate(playersLinks.last.href)}>&gt;&gt;</button>);


    return(
        <div>
            <FormAddPlayer createPlayer={createPlayer} teams={teams}/>
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

export default Players;