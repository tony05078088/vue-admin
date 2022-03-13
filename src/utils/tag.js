// 不希望被保存的路由白名單
const whiteList = ['/login', '/404', '401'];

export function isTags(path) {
    return !whiteList.includes(path);
}
