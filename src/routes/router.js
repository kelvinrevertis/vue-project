import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/pages/LoginPage.vue'
import Contatos from '../components/pages/PrivatePage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/contatos',
            name: 'Contatos',
            component: Contatos
        }
    ],
})
