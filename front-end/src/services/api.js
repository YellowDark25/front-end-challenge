import axios from 'axios';
const api = axios.create({
    baseURL: 'http://api.github.com/users/',
});

export async function getUser(name){
    const response = await api.get(`/${name}/repos`);

    return response;
}


