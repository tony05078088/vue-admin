import path from 'path';
import i18n from '@/i18n';
/**
 * 筛选出可供搜索的路由对象
 * @param routes 路由表
 * @param basePath 基礎路徑，預設為 /
 * @param prefixTitle
 */

export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
    // 創建result 數據
    let res = [];
    // 創建包含path 和 title的item
    for (const route of routes) {
        const data = {
            path: path.resolve(basePath, route.path),
            title: [...prefixTitle]
        };

        // 當前若存在meta,使用i18n進行國際化解析,組成新的title
        //  動態路由不允許被檢索
        // 正則 ==> 若有冒號 則認為是動態路由
        const re = /.*\/:.*/;
        if (route.meta?.title && !re.exec(route.path)) {
            const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`);
            data.title = [...data.title, i18nTitle];
            res.push(data);
        }
        // 存在children 進行迭代處理
        if (route.children) {
            const tempRoutes = generateRoutes(route.children, data.path, data.title);
            if (tempRoutes.length > 0) {
                res = [...res, ...tempRoutes];
            }
        }
    }
    return res;
};
