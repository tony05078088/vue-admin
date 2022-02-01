import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

console.log(service.baseURL);

service.interceptors.request.use(config => {
    config.headers.icode = 'CAA36288C5993B52';
    return config;
});

export default service;
