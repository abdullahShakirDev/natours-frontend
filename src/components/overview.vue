<template>
  <!-- OVERVIEW -->
  <main class="main">
    <div v-if="error" class="error-message">
      Error loading tours: {{ error.message }}
    </div>
    <div v-else-if="!data" class="loading-message">Loading...</div>
    <div v-else class="card-container">
      <div v-for="tour in data.data.data" :key="tour.id" class="card">
        <div class="card__header">
          <div class="card__picture">
            <div class="card__picture-overlay">&nbsp;</div>
            <img
              src="../assets/img/users/default.jpg"
              :alt="tour.name"
              class="card__picture-img"
            />
          </div>

          <h3 class="heading-tertirary">
            <span>{{ tour.name }}</span>
          </h3>
        </div>

        <div class="card__details">
          <h4 class="card__sub-heading">{{ tour.difficulty }} {{ tour.duration }}-day tour</h4>
          <p class="card__text">{{ tour.summary }}</p>
          <div class="card__data">
            <svg class="card__icon">
              <use xlink:href="../assets/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span>{{ tour.startLocation.description }}</span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              <use xlink:href="../assets/img/icons.svg#icon-calendar"></use>
            </svg>
            <span>{{ tour.startDates[0] ? new Date(tour.startDates[0]).toLocaleString('en-us', {month: 'long', year: 'numeric'}) : 'Date not available' }}</span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              <use xlink:href="../assets/img/icons.svg#icon-flag"></use>
            </svg>
            <span>{{ tour.locations.length }} stops</span>
          </div>
          <div class="card__data">
            <svg class="card__icon">
              <use xlink:href="../assets/img/icons.svg#icon-user"></use>
            </svg>
            <span>{{ tour.maxGroupSize }} people</span>
          </div>
        </div>

        <div class="card__footer">
          <p>
            <span class="card__footer-value">${{ tour.price }}</span>
            <span class="card__footer-text"> per person</span>
          </p>
          <p class="card__ratings">
            <span class="card__footer-value">{{ tour.ratingsAverage }}</span>
            <span class="card__footer-text"> rating ({{ tour.ratingsQuantity }})</span>
          </p>
          <button class="btn btn--green btn--small" @click="handleClick(tour.id)">
            Details
          </button>
        </div>
      </div>
    </div>
  </main>
  <!-- OVERVIEW -->
</template>

<script setup>

import { useRouter } from "vue-router";
import { fetchAll } from "@/server/fetchTours";

const { data, error } = fetchAll();
const router = useRouter();

defineProps({
  data: Object
})

const handleClick = (tourId) => {
  router.push({ name: "tourDetails", params:{tourId}});
};

</script>