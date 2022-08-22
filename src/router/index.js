import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
