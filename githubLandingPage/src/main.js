import { createApp } from 'vue'
import App from './App.vue'
import glsl from 'vue-glsl'
import PrimeVue from "primevue/config";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
//import vue router
import * as VueRouter from 'vue-router'
import LandingPage from "@/pages/LandingPage.vue";

const routes  = [
    { path: '/', component: LandingPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/blog', component: BlogPage },
    ]

export const router = VueRouter.createRouter(
    {
        history: VueRouter.createWebHistory(),
        routes,
    }
)

const app = createApp(App)
    app.use(PrimeVue)
        .use(glsl)
        .use(router)
        .mount('#app')
