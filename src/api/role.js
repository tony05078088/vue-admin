import request from '@/utils/request';

// 獲取所有角色

export const roleList = () => {
    return request({
        url: '/role/list'
    });
};

// 獲取當前角色對應權限

export const rolePermission = roleId => {
    return request({
        url: `/role/permission/${roleId}`
    });
};

// 修改角色權限

export const distributePermission = data => {
    return request({
        url: '/role/distribute-permission',
        method: 'POST',
        data
    });
};
