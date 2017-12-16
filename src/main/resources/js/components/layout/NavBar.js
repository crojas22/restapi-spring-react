import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/teams">Add Team</NavLink>
                </li>
                <li>
                    <NavLink exact to="/players">Add Player</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;