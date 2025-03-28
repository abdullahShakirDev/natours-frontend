<template>
  <Header/>
  <main class="main">
    <div class="user-view">
      <nav class="user-view__menu">
        <ul class="side-nav">
          <li :class="{ 'side-nav--active': activeTab === 'settings' }">
            <a href="#" @click.prevent="setActiveTab('settings')">
              <svg>
                <use xlink:href="../assets/img/icons.svg#icon-settings"></use>
              </svg>
              Settings
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="../assets/img/icons.svg#icon-briefcase"></use>
              </svg>
              My bookings
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="../assets/img/icons.svg#icon-star"></use>
              </svg>
              My reviews
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="../assets/img/icons.svg#icon-credit-card"></use>
              </svg>
              Billing
            </a>
          </li>
        </ul>

        <div v-if="user.role === 'admin'" class="admin-nav">
          <h5 class="admin-nav__heading">Admin</h5>
          <ul class="side-nav">
            <li>
              <a href="#">
                <svg>
                  <use xlink:href="../assets/img/icons.svg#icon-map"></use>
                </svg>
                Manage tours
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlink:href="../assets/img/icons.svg#icon-users"></use>
                </svg>
                Manage users
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlink:href="../assets/img/icons.svg#icon-star"></use>
                </svg>
                Manage reviews
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlink:href="../assets/img/icons.svg#icon-briefcase"></use>
                </svg>
                Manage bookings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="user-view__content">
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
          <form class="form form-user-data" @submit.prevent="saveSettings">
            <div class="form__group">
              <label class="form__label" for="name">Name</label>
              <input id="name" class="form__input" type="text" v-model="user.name" required>
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="email">Email address</label>
              <input id="email" class="form__input" type="email" v-model="user.email" required>
            </div>
            <div class="form__group form__photo-upload">
              <img class="form__user-photo" src="../assets/img/users/default.jpg" alt="User photo">
              <a class="btn-text" href="#">Choose new photo</a>
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green" type="submit">Save settings</button>
            </div>
          </form>
        </div>

        <div class="line">&nbsp;</div>

        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Password change</h2>
          <form class="form form-user-password" @submit.prevent="changePassword">
            <div class="form__group">
              <label class="form__label" for="password-current">Current password</label>
              <input id="password-current" class="form__input" type="password" v-model="password.current" required minlength="8">
            </div>
            <div class="form__group">
              <label class="form__label" for="password">New password</label>
              <input id="password" class="form__input" type="password" v-model="password.new" required minlength="8">
            </div>
            <div class="form__group ma-bt-lg">
              <label class="form__label" for="password-confirm">Confirm password</label>
              <input id="password-confirm" class="form__input" type="password" v-model="password.confirm" required minlength="8">
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green btn--save-password" type="submit">Save password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue';
import {useAuthStore} from "@/stores/authStore.js";
import Header from "@/components/header.vue";

const user = useAuthStore().user
    const activeTab = ref('settings');
    const password = ref({
      current: '',
      new: '',
      confirm: ''
    });

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    const saveSettings = () => {
      console.log("Settings saved", user.value);
    };

    const changePassword = () => {
      console.log("Password changed", password.value);
    };

</script>

<style scoped>
/* Add your styles here */
</style>
