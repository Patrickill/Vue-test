import Home from "../pages/Home.vue";
import login from "../pages/Login.vue";
import search from "../pages/search.vue";
import {createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/search",
        component: search
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export  default  router;