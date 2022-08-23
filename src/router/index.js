import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page.vue";
import AnotherPage from "@/views/another-page.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/another",
        component: AnotherPage,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
