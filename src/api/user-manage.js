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

// 獲取用戶資料
export const UserDetail = id => {
    return request({
        url: `/user-manage/detail/${id}`
    });
};

// 獲取所有用戶列表
export const getUserManageAllList = () => {
    return request({
        url: '/user-manage/all-list'
    });
};

// 獲取指定用戶角色
export const userRoles = id => {
    return request({
        url: `/user-manage/role/${id}`
    });
};

// 為用戶分配身份
export const updateRole = (id, roles) => {
    return request({
        url: `/user-manage/update-role/${id}`,
        method: 'POST',
        data: {
            roles
        }
    });
};
