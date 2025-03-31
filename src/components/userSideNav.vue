<script setup>
import {ref} from "vue";

const activeTab = ref('settings');
const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
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
</template>

