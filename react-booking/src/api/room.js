import { instance } from './instance';

const roomListApi = async(page = null) => {
    let url = '/api/list-rooms';
    if(page) {
        url = url+`?page=${page}`;
    }
    return await instance.get(url);
}

export {
    roomListApi
}