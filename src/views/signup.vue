<template>
  <div>
    <Header/>
    <main class="main">
      <div class="login-form">
        <h2 class="heading-secondary ma-bt-lg">Create your account!</h2>
        <form class="form form--login" @submit.prevent="handleSignin">
          <div class="form__group">
            <label class="form__label" for="name">Your name</label>
            <input class="form__input" id="name" v-model="name" type="text" required/>
          </div>
          <div class="form__group">
            <label class="form__label" for="email">Email address</label>
            <input class="form__input" id="email" type="email" v-model="email" placeholder="you@example.com" required/>
          </div>
          <div class="form__group ma-bt-md">
            <div class="form__group">
              <label class="form__label" for="password">Password</label>
              <input class="form__input" id="password" type="password" v-model="password" placeholder="••••••••"
                     required minlength="8"/>
            </div>
            <div class="form__group">
              <label class="form__label" for="password-confirm">Confirm password</label>
              <input class="form__input" id="password-confirm" v-model="passwordConfirm" type="password"
                     placeholder="••••••••" required
                     minlength="8"/>
            </div>
          </div>
          <div class="form__group">
            <button class="btn btn--green">Sign up</button>
          </div>
        </form>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
import {ref} from "vue";
import {useSignup} from "@/server/useSignup";
import {useRouter} from "vue-router";

const {err, signup} = useSignup()
const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const router = useRouter()

const handleSignin = async () => {
  await signup(name.value, email.value, password.value, passwordConfirm.value);
  if (!err.value) {
    name.value = '';
    email.value = '';
    password.value = '';
    passwordConfirm.value = '';
    await router.push('/');
  }
}
</script>
