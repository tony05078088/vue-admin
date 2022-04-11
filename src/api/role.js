import request from '@/utils/request';

// 獲取所有角色

export const roleList = () => {
    return request({
        url: '/role/list'
    });
};
