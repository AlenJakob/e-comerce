<template>
  <div class="app">
    <the-navigation></the-navigation>
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation/TheNavigation";
export default {
  components: {
    TheNavigation,
  },
};
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
