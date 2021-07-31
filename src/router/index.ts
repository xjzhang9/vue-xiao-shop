import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    // {
    //   path: "/timeline",
    //   name: "timeline",
    //   component: () =>
    //     import(/* webpackChunkName: "timeline" */ "../views/Timeline.vue")
    // },
    // {
    //   path: "/project",
    //   name: "project",
    //   component: () =>
    //     import(/* webpackChunkName: "project" */ "../views/Project.vue")
    // },
    // {
    //   path: "/message",
    //   name: "message",
    //   component: () =>
    //     import(/* webpackChunkName: "message" */ "../views/Message.vue")
    // },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
