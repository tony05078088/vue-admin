import path from 'path';

// 所有的子集路由
const getChildrenRoutes = routes => {
    const result = [];
    routes.forEach(route => {
        if (route.children && route.children.length > 0) {
            result.push(...route.children);
        }
    });
    return result;
};

function isNull(data) {
    if (!data) return true;
    if (JSON.stringify(data) === '{}') return true;
    if (JSON.stringify(data) === '[]') return true;
}

// 處理脫離層級的路由
export const filterRoutes = routes => {
    //    所有的子集路由
    const childrenRoutes = getChildrenRoutes(routes);
    //   根據子集路由進行查重操作
    return routes.filter(route => {
        // 根據route在childrenRoutes中查詢重複路由 把所有重複路由表刪除
        return !childrenRoutes.find(childrenRoute => {
            return childrenRoute.path === route.path;
        });
    });
};

// 根據routes(filterRoutes)數據 返回對應的menu規則數據
export const generateRoutes = (routes, basePath = '') => {
    const result = [];
    // 不滿足該條件 meta && meta.title && meta.icon的數據不應該存在
    routes.forEach(item => {
        // 不存在children && 不存在 meta 直接return
        if (isNull(item.children) && isNull(item.meta)) return;
        // 存在children 不存在meta 則迭代generateRoutes
        if (isNull(item.meta) && !isNull(item.children)) {
            result.push(...generateRoutes(item.children));
            return;
        }
        // 不存在children,存在meta || 存在children && 存在meta
        // 因為最終的menu需要進行跳轉 此時需要合併path
        const routePath = path.resolve(basePath, item.path);
        //路由分離之後,有可能存在同名父路由情況
        let route = result.find(item => item.path === routePath);
        //    當前路由 尚未加入到result
        if (!route) {
            route = {
                ...item,
                path: routePath,
                children: []
            };
            // icon && title
            if (route.meta.icon && route.meta.title) {
                result.push(route);
            }
        }
        // 存在children && 存在meta
        if (!isNull(item.children)) {
            route.children.push(...generateRoutes(item.children, route.path));
        }
    });
    return result;
};
