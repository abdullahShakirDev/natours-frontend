<template>
  <div v-if="!error">
    <section class="section-header">
      <div class="header__hero">
        <div class="header__hero-overlay">&nbsp;</div>
        <img class="header__hero-img" src="../assets/img/tours/tour-1-cover.jpg" alt=""/>
      </div>
      <div class="heading-box">s
        <h1 class="heading-primary">
          <span>{{ tour.name }}</span>
        </h1>
        <div class="heading-box__group">
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="../assets/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="heading-box__text">{{ tour.duration }}</span>
          </div>
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="../assets/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span class="heading-box__text">{{ tour.startLocation.description }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {defineProps, ref} from 'vue';

const error = ref(null);
defineProps({
  tour: Object
});


</script>