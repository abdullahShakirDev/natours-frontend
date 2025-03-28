<template>
  <section v-if="tour" class="section-description">
      <div class="overview-box">
        <div>
          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="../assets/img/icons.svg#icon-calendar"></use>
              </svg>
              <span class="overview-box__label">Next date</span>
              <span class="overview-box__text">{{ tour.startDates[0] ? new Date(tour.startDates[0]).toLocaleString() : 'Date not available' }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="../assets/img/icons.svg#icon-trending-up"></use>
              </svg>
              <span class="overview-box__label">Difficulty</span>
              <span class="overview-box__text">{{ tour.difficulty }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="../assets/img/icons.svg#icon-user"></use>
              </svg>
              <span class="overview-box__label">Participants</span>
              <span class="overview-box__text">{{ tour.maxGroupSize }} people</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="../assets/img/icons.svg#icon-star"></use>
              </svg>
              <span class="overview-box__label">Rating</span>
              <span class="overview-box__text">{{tour.ratingsAverage}}/ 5</span>
            </div>
          </div>

          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>

            <div class="overview-box__detail">
              <img
                src="../assets/img/users/user-19.jpg"
                alt="Lead guide"
                class="overview-box__img"
              />
              <span class="overview-box__label">Lead guide</span>
              <span class="overview-box__text">{{ tour.guides[0].name }}</span>
            </div>
            <div class="overview-box__detail">
              <img
                src="../assets/img/users/user-18.jpg"
                alt="Tour guide"
                class="overview-box__img"
              />
              <span class="overview-box__label">Tour guide</span>
              <span class="overview-box__text">{{ tour.guides[1].name }}</span>
            </div>
            
          </div>
        </div>
      </div>

      <div class="description-box">
        <h2 class="heading-secondary ma-bt-lg">About the park camper tour</h2>
        <p class="description__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p class="description__text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum!
        </p>
      </div>
    </section>
</template>
<script setup>

import { defineProps, ref } from 'vue';

const error = ref(null);

defineProps({
    tour: Object
});

</script>
