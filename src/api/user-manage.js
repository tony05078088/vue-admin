import request from '@/utils/request';

// 獲取用戶列表

export const getUserManageList = data => {
    return request({
        url: '/user-manage/list',
        params: data
    });
};

// 新增員工(excel導入)
export const getUserBatchImport = data => {
    return request({
        url: '/user-manage/batch/import',
        method: 'POST',
        data
    });
};

// 刪除指定用戶
export const deleteUser = id => {
    return request({
        url: `/user-manage/detele/${id}`
    });
};
