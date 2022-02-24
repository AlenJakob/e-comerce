<template>
  <div class="app">
    <the-navigation @toggle-menu="setVisibleList"></the-navigation>
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
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <transition name="route" mode="in-out">
      <message-box
        :message-status="store.state.messageStatus"
        :message-state="store.state.messageState"
        :message-text="store.state.messageText"
      ></message-box>
    </transition>
    <transition name="route" mode="in-out">
      <base-hamburger-menu
        v-if="store.state.overlayState"
      ></base-hamburger-menu>
    </transition>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation/TheNavigation";
import ProductFullScreenGallery from "@/components/ui/ProductFullScreenGallery";
import MessageBox from "@/components/ui/MessageBox";
import BaseHamburgerMenu from "@/components/ui/utils/BaseHamburgerMenu";
import store from "@/store";
import { provide } from "vue";

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
  min-height: 100vw;
  max-width: 1440px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  overflow: hidden;
  position: relative;
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
  transform: translateX(-100px);
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
.button-back {
  max-width: 200px;
}
</style>
