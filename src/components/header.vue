<template>
  <header class="header">
    <nav class="nav nav--tours">
      <a href="#" class="nav__el" @click="handleClick('/')">All tours</a>
    </nav>
    <div class="header__logo">
      <img src="../assets/img/logo-white.png" alt="Natours logo"/>
    </div>
    <nav class="nav nav--user" @click="handleClickProfile(user._id)">
      <a href="#" class="nav__el" v-if="user">My bookings</a>
      <a href="#" class="nav__el" v-if="user">
        <img
            src="../assets/img/users/default.jpg"
            alt="User photo"
            class="nav__user-img"
        />
        <span>{{ user.name }}</span>
      </a>
      <button class="nav__el" @click="handleClick('/login')" v-if="!user">Log in</button>
      <button class="nav__el nav__el--cta" v-if="!user" @click="handleClick('/signup')">Sign up</button>

      <button class="nav__el nav__el--cta" @click="handleLogout" v-if="user">Logout</button>
    </nav>
  </header>
</template>

<script setup>
import {useLogout} from '@/server/useLogout';
import {useAuthStore} from '@/stores/authStore';
import {useRouter} from 'vue-router';

const user = useAuthStore().user
const {logout, error} = useLogout()
const router = useRouter();

const handleLogout = async () => {
  await logout()
}

const handleClick = (path) => {
  router.push(path)
}

const handleClickProfile = (userId) => {
  router.push({name: 'Me', params: {userId}})
}

</script>
