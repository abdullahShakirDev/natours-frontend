<template>
  <Header/>
  <div v-if="error">
    <HandleError :error="error"/>
  </div>
  <main class="main">
    <div class="user-view">
      <nav class="user-view__menu">
        <!-- UserSideNav -->
        <userSideNav/>
        <!-- UserSideNav -->
        <!-- ADMIN DASHBOARD -->
        <adminDashboard :user="user"/>
        <!-- ADMIN DASHBOARD -->
      </nav>
      <div class="user-view__content">
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
          <form class="form form-user-data" @submit.prevent="saveSettings">
            <div class="form__group">
              <label class="form__label" for="name">Name</label>
              <input id="name" class="form__input" type="text" v-model="name" required>
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="email">Email address</label>
              <input id="email" class="form__input" type="email" v-model="email" required>
            </div>
            <div class="form__group form__photo-upload">
              <img class="form__user-photo" src="../assets/img/users/default.jpg" alt="User photo">
              <input type="file" placeholder="Upload an image!" @change="handleFileUpload"
                     accept="image/*">
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green" type="submit">Save settings</button>
            </div>
          </form>
        </div>

        <div class="line">&nbsp;</div>

        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Password change</h2>
          <form class="form form-user-password" @submit.prevent="handleChangePassword">
            <div class="form__group">
              <label class="form__label" for="password-current">Current password</label>
              <input id="password-current" class="form__input" type="password" v-model="currentPassword" required
                     minlength="8">
            </div>
            <div class="form__group">
              <label class="form__label" for="password">New password</label>
              <input id="password-new" class="form__input" type="password" v-model="newPassword" required minlength="8">
            </div>
            <div class="form__group ma-bt-lg">
              <label class="form__label" for="password-confirm">Confirm password</label>
              <input id="password-confirm" class="form__input" type="password" v-model="confirmPassword" required
                     minlength="8">
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
import {ref} from 'vue';
import {useAuthStore} from "@/stores/authStore.js";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import adminDashboard from "@/components/adminDashboard.vue";
import userSideNav from "@/components/userSideNav.vue"
import HandleError from "@/components/handleError.vue"
import {updateUserInfo} from "@/server/updateUserInfo"
import {useChangePassword} from "@/server/useChangePassword.js";

const {error, updateUser} = updateUserInfo()
const {error: error2, changePassword} = useChangePassword()
const user = useAuthStore().user;
const name = ref('');
const email = ref('');
const selectedFile = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
  }
};

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');


const saveSettings = async () => {

  await updateUser(name.value, email.value, selectedFile.value || null);

  if (!error.value) {
    setTimeout(() => {
      window.location.reload();
      name.value = '';
      email.value = '';
      selectedFile.value = null;
    }, 1500);
  }
};

const handleChangePassword = async () => {
  await changePassword(currentPassword.value, newPassword.value, confirmPassword.value);
  if (!error2.value) {
    setTimeout(() => {
      currentPassword.value = '';
      newPassword.value = '';
      confirmPassword.value = '';
      window.location.reload();
    }, 1500);
  }
  console.log(error2.value);

};

</script>