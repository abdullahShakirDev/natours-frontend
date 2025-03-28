<template>
    <div>
        <Header/>
    <main class="main">
  <div class="login-form">
    <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
    <form class="form form--login" @submit.prevent="handleLogin">
      <div class="form__group">
        <label class="form__label" for="email">Email address</label>
        <input class="form__input" id="email" type="email" placeholder="you@example.com" required v-model="email" />
      </div>
      <div class="form__group ma-bt-md">
        <label class="form__label" for="password">Password</label>
        <input class="form__input" id="password" type="password" placeholder="••••••••" required minlength="8" v-model="password" />
      </div>
      <div class="form__group">
        <button class="btn btn--green">Login</button>
      </div>
    </form>
  </div>
</main>
<Footer/>
</div>
</template>

<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { ref } from 'vue';
import { useLogin } from '@/server/useLogin';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
const {login,error} = useLogin();
const router = useRouter();
const authStore = useAuthStore();
const email=ref('');
const password=ref('');

const handleLogin = async ()=> {

     await login(email.value,password.value);
    if(!error.value) {
        router.push('/')
    }
    console.log(authStore.user);

};



</script>