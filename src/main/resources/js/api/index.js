import axios from 'axios';

export const getPlayers = () => {
    return axios ({
        url: '/api/v1/players',
        method: 'get'
    })
};

export const addPlayer = newPlayer => {
    return axios ({
        url: 'http://localhost:8080/api/v1/players',
        method: 'post',
        data: newPlayer
    })
}

