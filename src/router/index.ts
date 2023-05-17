
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from '@/views/Home/index.vue'
import vision from '@/views/Vision/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: "",
        redirect: "/home",
        component: () => import('@/views/Layout/index.vue'),
        children: [
            {
                path: "/home",
                component: home
            },
            {
                path: "/vision",
                component: vision
            },
            {
                path: "/about",
                component: () => import('@/views/About/index.vue')
            },
            {
                path: "/burn",
                component: () => import('@/views/Burn/index.vue')
            },
            {
                path: "/gallery",
                component: () => import('@/views/Gallery/index.vue')
            },
            {
                path: "/faq",
                component: () => import('@/views/Faq/index.vue')
            },
        ],
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return {
            top: 0
        }
    },
    routes,
});
export default router;
