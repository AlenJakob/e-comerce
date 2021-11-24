<template>
  <div class="home">
    <transition name="fade">
      <div class="overlay" v-if="isOpen" @click="manageGallery"></div>
    </transition>
    <transition name="bounce">
      <the-full-screen-gallery
        v-if="isOpen"
        class="the-full-screen-gallery"
        :images="product.images"
      ></the-full-screen-gallery>
    </transition>
  </div>
</template>

<script setup>
import TheFullScreenGallery from "@/components/ui/TheFullScreenGallery";
import { ref } from "vue";
const isOpen = ref(false);
</script>
