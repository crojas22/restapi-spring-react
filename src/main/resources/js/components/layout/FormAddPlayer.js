import React from 'react';

const FormAddPlayer = ({createPlayer, teams}) => {

    let _firstName, _lastName, _position, _number, _team;

    const handleSubmit = e => {

        let selected = _team.options[_team.selectedIndex];

        e.preventDefault();
        createPlayer({
            firstName: _firstName.value,
            lastName: _lastName.value,
            position: _position.value,
            number: _number.value,
            team: selected.getAttribute('data')
        });

        _firstName.value = '', _lastName.value = '', _position.value='', _number.value='';
    };

    const allTeams = teams.map((each, index) => <option key={index} data={each._links.self.href}>{each.name}</option>);

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Player</legend>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input ref={input => _firstName = input} id="firstName" type="text" name="firstName"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input ref={input => _lastName = input} id="lastName" type="text" name="lastName"/>
                </div>
                <div>
                    <label htmlFor="position">Player's position: </label>
                    <input ref={input => _position = input} id="position" type="text" name="position"/>
                </div>
                <div>
                    <label htmlFor="number">Jersey Number: </label>
                    <input ref={input => _number = input} id="number" type="text" name="number"/>
                </div>
                <div>
                    <label htmlFor="teams">Select team</label>
                    <select id="teams" ref={input => _team = input} required>
                        <option defaultChecked></option>
                        {
                            allTeams
                        }
                    </select>
                </div>
                <input type="submit" value="Add Player"/>
            </fieldset>
        </form>
    )
}

export default FormAddPlayer;