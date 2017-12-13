import axios from 'axios';

export const getEmployees = () => {
    return axios ({
        url: '/api/v1/players',
        method: 'get'
    })
};