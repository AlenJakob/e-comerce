<template>
  <div class="app">
    <the-navigation></the-navigation>
    <router-view />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation/TheNavigation";
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
  max-width: 1440px;
  max-width: 960px;
  margin: 0 auto;
}
html {
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}
</style>
