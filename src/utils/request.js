import axios from 'axios';
import { ElMessage } from 'element-plus';
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

// 請求攔截器
service.interceptors.request.use(config => {
    config.headers.icode = 'CAA36288C5993B52';
    return config;
});

//響應攔截器
service.interceptors.response.use(
    //請求成功處理
    response => {
        const { success, message, data } = response.data;
        // 判斷當前請求是否成功
        // 成功 => 返回解析後數據
        if (success) return Promise.resolve(data);
        // 失敗 => 請求成功,但業務失敗 給消息提示
        else {
            ElMessage.error(message);
            return Promise.reject(new Error(message));
        }
    },
    // 請求失敗處理
    error => {
        ElMessage.error(error.message);
        return Promise.reject(error);
    }
);

export default service;
