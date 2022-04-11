import request from '@/utils/request';

// 獲取所有角色

export const permissionList = () => {
    return request({
        url: '/permission/list'
    });
};
