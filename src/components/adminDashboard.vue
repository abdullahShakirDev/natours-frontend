
<template>
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
</template>

<script setup>

defineProps({
  user: { type: Object, required: true },
})
</script>
