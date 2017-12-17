import React from 'react';
import FormAddTeam from "./layout/FormAddTeam";

const Teams = ({teams}) => {

    const allTeams = teams.map(({name}, index) => <li key={index}>{name}</li>);

    return(
        <div>
            <FormAddTeam />
            <ul>
                {
                    allTeams
                }
            </ul>
        </div>
    )
};

export default Teams;