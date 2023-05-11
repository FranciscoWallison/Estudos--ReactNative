import axios from 'axios';
//  "axios": "0.27.2"
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;