<template>
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
</template>

<script setup>
import ProductFullScreenGallery from "@/components/ui/ProductFullScreenGallery";
import { ref } from "vue";
const isOpen = ref(false);
</script>
