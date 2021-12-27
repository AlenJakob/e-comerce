<template>
  <transition name="fade">
    <button
      v-if="isBtnVisible"
      :class="{ 'scroll-button--visible': distance }"
      class="scroll-button"
      @click="scrollToTop"
      @scroll="detectDistance"
    >
      <svg
        class="scroll-button__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47 29"
        fill="none"
      >
        <path
          class="scroll-button__icon-path"
          d="M21.9461 1.91754C22.7466 0.929759 24.2534 0.929759 25.0539 1.91754L44.359 25.7408C45.4185 27.0483 44.4879 29 42.8051 29H4.19492C2.51206 29 1.58155 27.0483 2.64105 25.7408L21.9461 1.91754Z"
          fill="#020202"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
const distanceFromTop = ref(0);
const isBtnVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const detectDistance = () => {
  distanceFromTop.value = window.scrollY;
  if (window.scrollY >= 1000) {
    isBtnVisible.value = true;
  }
  if (window.scrollY < 1000) {
    isBtnVisible.value = false;
  }
};
const distance = computed(() => {
  return distanceFromTop.value >= 1000;
});
// initialization of scroll event
window.addEventListener("scroll", detectDistance);
</script>
<style scoped lang="scss">
.scroll-button {
  //   display: none;
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: none;
  border-radius: 4px;
  border: 2px dashed rgba($c-orange, 0.5);
  &:hover {
    border-color: $c-orange;
  }
  &__icon {
    width: 40px;
    height: 40px;
  }
  &__icon-path {
    fill: $c-orange;
  }
}
.scroll-button--visible {
  //   display: block;
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
