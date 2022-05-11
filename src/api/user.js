import request from '@/utils/request';

// 獲取項目功能
export const feature = () => {
    return request({
        url: '/user/feature'
    });
};

// 獲取章節功能

export const chapter = () => {
    return request({
        url: '/user/chapter'
    });
};
