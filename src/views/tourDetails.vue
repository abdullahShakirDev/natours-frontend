<template>
  <div v-if="data">
    <Header/>
    <tourHeader :tour="data.data.data"/>
    <TourDescription :tour="data.data.data"/>
    <PicturesTour/>
    <ToursReview :tour="data.data.data"/>
    <tourBooking/>
    <Footer/>
  </div>
</template>

<script setup>
import tourHeader from '@/components/tourHeader.vue'
import TourDescription from "@/components/tourDescription.vue";
import {fetchOne} from "@/server/fetchTour";
import {ref} from "vue";
import PicturesTour from '@/components/picturesTour.vue';
import Header from '@/components/header.vue';
import tourBooking from '@/components/tourBooking.vue'
import Footer from '@/components/footer.vue';
import ToursReview from '@/components/toursReview.vue';

const props = defineProps({
  tourId: {
    type: String,
    required: true
  }
});
const {data, error} = fetchOne(props.tourId);

const tour = ref(null)

</script>

