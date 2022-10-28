import axios from 'axios'

export const api = axios.create({
    baseURL: "metawaydemo.vps-kinghost.net:8485",
    headers: {
        Accept: "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
});

export const authToken =  {
    login(username, password) {
        return api.post('/auth/login',{
            username: username,
            password: password
        });
    }
}