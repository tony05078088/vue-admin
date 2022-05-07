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
/***
 * 修改排序
 */
export const articleSort = data => {
    return request({
        url: '/article/sort',
        method: 'POST',
        data
    });
};
// 刪除文章
export const deleteArticle = articleId => {
    return request({
        url: `/article/delete/${articleId}`
    });
};

// 文章細節
export const articleDetail = articleId => {
    return request({
        url: `/article/${articleId}`
    });
};
// 編輯文章
export const editorArticle = data => {
    return request({
        url: `/article/edit`,
        method: 'POST',
        data
    });
};
