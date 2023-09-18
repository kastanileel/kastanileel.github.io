import { createApp } from 'vue'
import App from './App.vue'
import glsl from 'vue-glsl'
import PrimeVue from "primevue/config";
//import vue router

const app = createApp(App)
    app.use(PrimeVue)
        .use(glsl)
        .mount('#app')
