import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sh-new-burger.firebaseio.com/'
});

export default instance;