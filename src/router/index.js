import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tourDetails from '@/views/tourDetails.vue'
import login from '@/views/login.vue';
import me from "@/views/me.vue";

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
      props:true,
    },
    {
      path:'/login',
      name:'Login',
      component:login
    },
    {
      path:'/me/:userId',
      name:'Me',
      component:me,
    }

  ],
})


export default router
