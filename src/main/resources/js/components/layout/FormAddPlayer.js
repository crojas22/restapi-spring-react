import React from 'react';

const FormAddPlayer = ({createPlayer}) => {

    let _firstName, _lastName, _position, _number;

    const handleSubmit = e => {
        e.preventDefault();
        createPlayer({
            firstName: _firstName.value,
            lastName: _lastName.value,
            position: _position.value,
            number: _number.value
        });
        _firstName.value = '', _lastName.value = '', _position.value='', _number.value='';
    };

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
                <input type="submit" value="Add Player"/>
            </fieldset>
        </form>
    )
}

export default FormAddPlayer;