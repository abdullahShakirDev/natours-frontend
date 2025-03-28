<template>
    <section class="section-reviews">
      <div class="reviews" >
        <div class="reviews__card" v-for=" review in tour.reviews " :key="review.id" >
          <div class="reviews__avatar">
            <img
              src="../assets/img/users/default.jpg"
              alt="Jim Brown"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">{{ review.user.name }}</h6>
          </div>
          <p class="reviews__text">
           {{ review.review }}
          </p>
          <div class="reviews__rating" >
            <svg v-for="star in 5" :key="star" :class="`reviews__star reviews__star--${review.rating >=star ? 'active' : 'inactive'}`">
              <use xlink:href="../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

 defineProps({
    tour: Object
 })
</script>