<template>
  <div class="app">
    <the-navigation></the-navigation>
    <div class="home">
      <transition name="fade">
        <div class="overlay" v-if="isOpen" @click="manageGallery"></div>
      </transition>
      <transition name="bounce">
        <product-full-screen-gallery
          v-if="isOpen"
          class="the-full-screen-gallery"
          :images="product.images"
        ></product-full-screen-gallery>
      </transition>
    </div>
    <router-view v-slot="{ Component }"
      ><transition name="route" mode="out-in">
        <component :is="Component" /></transition
    ></router-view>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation/TheNavigation";
import ProductFullScreenGallery from "@/components/ui/ProductFullScreenGallery";
import store from "@/store";
import { provide, ref } from "vue";
const isOpen = ref(false);
provide("store", store);
</script>
<style lang="scss">
* {
  font-family: $font-family;
}
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.app {
  max-width: 1440px;
  max-width: 1100px;
  margin: 0 auto;
}
html {
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}
</style>

<style lang="scss" scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
