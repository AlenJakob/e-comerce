<template>
  <div class="banner-card">
    <img class="banner-card__image" :src="banner.img" alt="" />
    <h2 class="banner-card__title">{{ banner.name }}</h2>
    <p class="banner-card__content">{{ banner.description }}</p>
    <router-link to="/">sprawdź</router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  banner: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.banner-card {
  flex: 1;
  &__image {
    object-fit: cover;
    border-radius: 5px;
    max-width: 100%;
  }
  &__title {
    margin: 1rem 0;
  }
  &__content {
    margin: 1rem 0;
  }
}
</style>
