import axios from 'axios';

export const getPlayersApi = () => {
    return axios ({
        url: '/api/v1/players',
        method: 'get'
    })
};

export const addPlayerApi = newPlayer => {
    return axios ({
        url: '/api/v1/players',
        method: 'post',
        data: newPlayer
    })
};

export const navPlayersApi = page => {
    return axios({
        url: page,
        method: 'get'
    })
};

export const getTeamsApi = () => {
    return axios ({
        url: '/api/v1/teams',
        method: 'get'
    })
};

export const deletePlayerApi = page => {
    return axios ({
        url: page,
        method: 'delete'
    })
};




