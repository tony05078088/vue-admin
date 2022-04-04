import request from '@/utils/request';

// 獲取用戶列表

export const getUserManageList = data => {
    return request({
        url: '/user-manage/list',
        data
    });
};

// 刪除指定用戶
export const deleteUser = id => {
    return request({
        url: `/user-manage/detele/${id}`
    });
};
