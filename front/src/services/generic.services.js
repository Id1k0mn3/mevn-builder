import axios from 'axios';

const API_PREFIX = 'http://localhost:3000/api/v1/'

export const request = async ({ url, method, data }) => {
    const response = await axios[method](`${API_PREFIX}/${url}`, data)

    return response;
}