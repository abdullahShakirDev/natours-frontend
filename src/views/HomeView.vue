<template>
  <main>
    <!-- HEADER -->
    <headerVue />
    <!-- HEADER -->

    <overview />

    <!-- FOOTER -->
    <footerVue />
    <!-- FOOTER -->
  </main>
</template>

<script setup>
import headerVue from "./../components/header.vue";
import footerVue from "./../components/footer.vue";
import overview from "@/components/overview.vue";

</script>
