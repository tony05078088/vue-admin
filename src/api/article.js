import request from '@/utils/request';

// 獲取所有文章

export const getArticleList = data => {
    return request({
        url: '/article/list',
        params: data
    });
};
