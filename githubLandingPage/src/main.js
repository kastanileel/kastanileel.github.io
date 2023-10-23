import { createApp } from 'vue'
import App from './App.vue'
import glsl from 'vue-glsl'

//import primevue with css
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";



import ProjectsPage from "@/pages/ProjectsPage.vue";
import ArticlePage from "@/pages/ArticlePage.vue";
import ShaderLibrary from "@/pages/ShaderLibrary.vue";
//import vue router
import * as VueRouter from 'vue-router'
import LandingPage from "@/pages/LandingPage.vue";


const routes  = [
    { path: '/', component: LandingPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/blog/:category/:id', component: ArticlePage, props: true },
    { path: '/shaders', component: ShaderLibrary}
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
