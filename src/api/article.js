import request from '@/utils/request';

// 獲取所有文章

export const getArticleList = data => {
    return request({
        url: '/article/list',
        params: data
    });
};
// 創建文章
export const createArticle = data => {
    return request({
        url: '/article/create',
        method: 'POST',
        data
    });
};
