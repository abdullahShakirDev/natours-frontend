<template>
  <header class="header">
    <nav class="nav nav--tours">
      <a href="#" class="nav__el" @click="handleClick('/')">All tours</a>
      <form class="nav__search">
        <button class="nav__search-btn">
          <svg>
            <use xlink:href="../assets/img/icons.svg#icon-search"></use>
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search tours"
          class="nav__search-input"
        />
      </form>
    </nav>
    <div class="header__logo">
      <img src="../assets/img/logo-white.png" alt="Natours logo" />
    </div>
    <nav class="nav nav--user">
      <a href="#" class="nav__el" v-if="user">My bookings</a>
      <a href="#" class="nav__el" v-if="user">
        <img
          src="../assets/img/users/user-1.jpg"
          alt="User photo"
          class="nav__user-img"
        />
        <span>Jonas</span>
      </a>
        <button class="nav__el" @click="handleClick('/login')" v-if="!user">Log in</button>
        <button class="nav__el nav__el--cta" v-if="!user">Sign up</button>
  
        <button class="nav__el nav__el--cta" @click="handleLogout" v-if="user">Logout</button>
    </nav>
  </header>
</template>

<script setup>
import { useLogout } from '@/server/useLogout';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const user =useAuthStore().user
const {logout,error} = useLogout()

const router = useRouter();

const handleLogout = async ()=> {
  await logout()
}

const handleClick=(path)=>{
router.push(path)
}

</script>
