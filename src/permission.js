import router from '@/router';
import store from '@/store';

// 白名單: 用戶不登入也可進入的頁面
const whitlelist = ['/login'];

/**
 *  @param {*} to 到哪裡去
 *  @param {*} from 從哪裡來
 *  @param {*} next 是否要去
 *
 */

// 路由前置守衛
router.beforeEach(async (to, from, next) => {
    // 若用戶已登錄 不允許進入login
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/');
        } else {
            // 判斷用戶資料是否存在,不存在則觸發獲取用戶訊息
            if (!store.getters.hasUserInfo) {
                const { permission } = await store.dispatch('user/getUserInfo');
                // 處理用戶權限 篩選出需要添加的路由
                const filteredRoutes = await store.dispatch(
                    'permission/filterRoutes',
                    permission.menus
                );
                // 循環添加對應動態路由
                filteredRoutes.forEach(item => {
                    router.addRoute(item);
                });
                // 添加完動態路由後,需要進行一次主動跳轉
                return next(to.path);
            }

            next();
        }
    } else {
        // 若用戶未登錄 要進入頁面是否列於白名單內
        if (whitlelist.indexOf(to.path) > -1) {
            next();
        } else {
            next('/login');
        }
    }
});
