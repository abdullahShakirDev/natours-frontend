import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tourDetails from '@/views/tourDetails.vue'
import login from '@/views/login.vue';
import signup from '@/views/signup.vue'
import me from "@/views/me.vue";
import {useAuthStore} from "@/stores/authStore.js";


const authGuard = (to, from, next) => {
    const authStore = useAuthStore()
    if (!authStore.token) {
        return next('/login');
    } else {
        next();
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/tour/:tourId',
            name: 'tourDetails',
            component: tourDetails,
            props: true,
        },
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: signup
        },
        {
            path: '/me/:userId',
            name: 'Me',
            component: me,
            beforeEnter: authGuard
        }

    ],
})


export default router
