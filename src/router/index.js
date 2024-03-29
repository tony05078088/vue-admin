import { createRouter, createWebHashHistory } from 'vue-router';
import layout from '@/layout/index';
import UserManage from './modules/UserManage';
import RoleList from './modules/RoleList';
import PermissionList from './modules/PermissionList';
import Article from './modules/Article';
import ArticleCreate from './modules/ArticleCreate';
import store from '@/store';

// 私有路由表
export const privateRoutes = [UserManage, RoleList, PermissionList, Article, ArticleCreate];
// 公有路由表
export const publicRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/',
        redirect: '/profile',
        component: layout,
        children: [
            //個人中心
            {
                path: '/profile',
                name: 'profile',
                component: () => import('@/views/profile/index'),
                meta: {
                    title: 'profile',
                    icon: 'personnel'
                }
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import('@/views/chart/index'),
                meta: {
                    title: 'chart',
                    icon: 'chart'
                }
            },
            // 404
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/error-page/404')
            },
            // 401
            {
                path: '/401',
                name: '401',
                component: () => import('@/views/error-page/401')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRoutes
});

/**
 * 初始化路由表
 */

export function resetRouter() {
    if (
        store.getters.userInfo &&
        store.getters.userInfo.permission &&
        store.getters.userInfo.permission.menus
    ) {
        const menus = store.getters.userInfo.permission.menus;
        menus.forEach(menu => {
            router.removeRoute(menu);
        });
    }
}

export default router;
