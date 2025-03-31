<script setup>
defineProps({
  error: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main class="main">
    <div class="error">
      <div class="error__title">
        <h2 class="heading-secondary heading-secondary--error">
          Something went wrong!
        </h2>
        <h2 class="error__emoji">😢 🤯</h2>
      </div>
      <div class="error__msg">{{ error }}</div>
    </div>
  </main>
</template>
