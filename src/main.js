import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import GalleryPage from './pages/GalleryPage.vue'
import CollectionPage from './pages/CollectionPage.vue'

const routes = [
    { path: '/', component: GalleryPage },
    { path: '/collection', component: CollectionPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
