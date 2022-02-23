<template>
  <div class="base-hamburger" @click="toggleButton">
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect class="base-hamburger__rect" width="100" height="20" rx="8"></rect>
      <rect
        class="base-hamburger__rect"
        y="30"
        width="90"
        height="20"
        rx="8"
      ></rect>
      <rect
        class="base-hamburger__rect"
        y="60"
        width="80"
        height="20"
        rx="8"
      ></rect>
    </svg>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const isOpen = ref(false);

const emit = defineEmits(["toggle-menu"]);

const toggleButton = () => {
  isOpen.value = !isOpen.value;
  emit("toggle-menu", isOpen.value);
};
</script>

<style lang="scss" scoped>
.base-hamburger {
  @include tablet-portrait-up {
    display: none;
  }
  cursor: pointer;
  z-index: 1300;
  &__rect {
    transition: all 0.3s;
  }
  &:hover &__rect {
    fill: rgba($c-black, 0.8);
    width: 100px;
  }
}
</style>
