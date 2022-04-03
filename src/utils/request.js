import axios from 'axios';
import store from '@/store';
import { isCheckTimeout } from '@/utils/auth';
import { ElMessage } from 'element-plus';
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

// 請求攔截器
service.interceptors.request.use(
    config => {
        // 接口校驗碼
        config.headers.icode = '2277A04AB710062F';
        // token
        if (store.getters.token) {
            if (isCheckTimeout()) {
                // 已超時 執行退出操作
                store.dispatch('user/logout');
                return Promise.reject(new Error('token 失效'));
            }
            config.headers.Authorization = `Bearer ${store.getters.token}`;
        }
        // 配置接口國際化
        config.headers['Accept-Language'] = store.getters.language;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

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
        // token 過期
        if (error.response && error.response.data && error.response.data.code === 401) {
            store.dispatch('user/logout');
        }
        ElMessage.error(error.message);
        return Promise.reject(error);
    }
);

export default service;
