import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://backend.cecieee.org/api'
});
export default instance;