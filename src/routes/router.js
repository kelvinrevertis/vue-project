import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/pages/LoginPage.vue'
import PrivatePage from '../components/pages/PrivatePage.vue'
import Private from '../components/pages/Private.vue'


const routes = [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/contatos',
            name: 'Contatos',
            component: PrivatePage,
        },
        {
            path: '/private',
            name: 'Private',
            component: Private,
        }
            
    ]

const router = createRouter({ history: createWebHistory(), routes });

export default router;
