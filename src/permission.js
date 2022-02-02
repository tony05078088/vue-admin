import router from '@/router';
import store from '@/store';

// 白名單: 用戶不登入也可進入的頁面
const whitlelist = ['/login'];

// 路由前置守衛
router.beforeEach((to, from, next) => {
    // 若用戶已登錄 不允許進入login
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/');
        } else {
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
