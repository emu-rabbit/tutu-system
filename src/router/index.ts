import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/first-scene'
    },
    {
        path: '/first-scene',
        component: () => import('@/views/FirstScene.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
