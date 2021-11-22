<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li
          class="glide__slide"
          v-for="(item, index) in props.images"
          :key="index"
        >
          <img class="glide__slide-img" :src="item.img" />
        </li>
      </ul>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button
          v-for="i in props.images.length"
          :key="i"
          class="glide__bullet"
          data-glide-dir="=0"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.esm";
import { onMounted, defineProps } from "vue";
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

onMounted(async () => {
  const glide = await new Glide(".glide", {
    Controls,
    Breakpoints,
    gap: 0,
    perView: 1,
    startAt: 0,
    focusAt: "center",
    type: "carousel",
    autoplay: 0,
    animationDuration: 600,
  });
  glide.mount();
});
</script>

<style lang="scss" scoped>
// Required Core Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
.glide {
  width: 600px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.glide__slide-img {
  width: 100%;
}
</style>
