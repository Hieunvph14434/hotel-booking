import { instance } from "./instance";

const registerApi = (data) => {
    let url = '/api/register';
    return instance.post(url, data);
}

const loginApi = (data) => {
    let url = '/api/login';
    return instance.post(url, data);
}

const profileApi = (token) => {
    let url = '/api/profile';
    let headers = {
        'Authorization': `Bearer ${token}`
    };
    return instance.get(url, {
        headers: headers
    });
}

export {
    registerApi,
    loginApi,
    profileApi
}