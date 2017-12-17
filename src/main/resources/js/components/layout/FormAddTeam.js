import React from 'react';

const FormAddTeam = () => {

    let _name, _city, _state;

    return(
        <form>
            <fieldset>
                <legend>Add Team</legend>
                <div>
                    <label htmlFor="name">Name of team: </label>
                    <input ref={input => _name = input} id='name' type='text' name='name'/>
                </div>
                <div>
                    <label htmlFor="city">City of team: </label>
                    <input ref={input => _city = input} id='city' type='text' name='city'/>
                </div>
                <div>
                    <label htmlFor="state">State of team: </label>
                    <input ref={input => _state = input} id='state' type='text' name='state'/>
                </div>
                <input type="submit" value="Add Team"/>
            </fieldset>
        </form>
    )
};

export default FormAddTeam;