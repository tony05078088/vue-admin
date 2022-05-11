import layout from '@/layout';

export default {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    name: 'userManage',
    meta: {
        title: 'user',
        icon: 'personnel'
    },
    children: [
        {
            path: '/user/manage',
            component: () => import('@/views/user-manage/index'),
            meta: {
                title: 'userManage',
                icon: 'personnel-manage'
            }
        },
        {
            path: '/user/info/:id',
            name: 'userInfo',
            component: () => import('@/views/user-info/index'),
            // 當props設置為true時,route.params將被設置為組件prＦops
            props: true,
            meta: {
                title: 'userInfo'
            }
        },
        {
            path: '/user/import',
            component: () => import('@/views/import/index'),
            name: 'import',
            meta: {
                title: 'excelImport'
            }
        }
    ]
};
