<template>
  <transition name="fade">
    <div class="overlay" v-if="props.isOpen"></div>
  </transition>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false,
	},
});
</script>
<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
</style>
