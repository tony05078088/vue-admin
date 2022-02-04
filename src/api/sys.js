//登錄 return promise
import request from '@/utils/request';

export const login = data => {
    return request({
        url: '/sys/login',
        method: 'POST',
        data
    });
};

// 獲取用戶訊息 return promise

export const getUserInfo = () => {
    return request({
        url: '/sys/profile',
        method: 'get'
    });
};
