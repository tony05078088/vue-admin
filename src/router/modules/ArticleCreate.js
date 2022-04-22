import layout from '@/layout';

export default {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    name: 'articleCreate',
    meta: {
        title: 'user',
        icon: 'personnel'
    },
    children: [
        {
            path: '/article/create',
            name: 'articleCreate',
            component: () => import('@/views/article-create/index'),
            meta: {
                title: 'articleCreate',
                icon: 'article-create'
            }
        },
        {
            path: '/article/editor/:id',
            name: 'articleEditor',
            component: () => import('@/views/article-create/index'),
            meta: {
                title: 'articleEditor'
            }
        }
    ]
};
