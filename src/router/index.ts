import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/rabbit-status'
    },
    // {
    //     path: '/rabbit-loading',
    //     component: () => import('@/views/RabbitLoading.vue')
    // },
    {
        path: '/auth',
        redirect: '/auth/login'
    },
    {
        path: '/auth/register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/rabbit-status',
        component: () => import('@/views/RabbitStatus.vue')
    },
    {
        path: '/rabbit-status/create',
        component: () => import('@/views/RabbitStatusCreate.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
