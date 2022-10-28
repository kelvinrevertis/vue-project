import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/pages/LoginPage.vue'
import Contatos from '../components/pages/ContatosPage.vue'


const routes = [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/contatos',
            name: 'Contatos',
            component: Contatos,
        }

            
    ]

const router = createRouter({ history: createWebHistory(), routes });

export default router;
