import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/rabbit-loading'
    },
    {
        path: '/rabbit-loading',
        component: () => import('@/views/RabbitLoading.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
