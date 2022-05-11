import { publicRoutes, privateRoutes } from '@/router';

export default {
    namespaced: true,
    state: () => ({
        // 路由表:初始時擁有的路由表
        routes: publicRoutes
    }),
    mutations: {
        // 增加路由
        setRoutes(state, newRoutes) {
            state.routes = [...publicRoutes, ...newRoutes];
        }
    },
    actions: {
        /**
         *  根據權限數據篩選路由
         * @param {*} context
         * @param {*} menus
         */
        filterRoutes(context, menus) {
            // 篩選之後,獲取到的需要通過addRoute 進行添加的路由表數組
            const routes = [];

            menus.forEach(key => {
                routes.push(...privateRoutes.filter(item => item.name === key));
            });

            // 所有不匹配的路由,全部進入404的路由配置
            // 注意:此配置必須要在所有路由指定之後
            routes.push({
                path: '/:catchAll(.*)',
                redirect: '/404'
            });
            context.commit('setRoutes', routes);
            return routes;
        }
    }
};
