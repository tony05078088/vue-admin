import request from '@/utils/request';

// 獲取用戶列表

export const getUserManageList = data => {
    return request({
        url: '/user-manage/list',
        data
    });
};
