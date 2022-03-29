import request from '@/utils/request';

// 獲取項目功能
export const feature = () => {
    return request({
        url: '/user/feature'
    });
};
