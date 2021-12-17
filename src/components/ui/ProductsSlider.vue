<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <product-slider-item v-for="n in 15" :key="n"></product-slider-item>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        prev
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        next
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Glide from "@glidejs/glide/dist/glide.esm";
import ProductSliderItem from "@/components/ui/ProductSliderItem";

onMounted(async () => {
  const glide = await new Glide(".glide", {
    gap: 40,
    perView: 5,
    type: "carousel",
  });
  glide.mount();
});
</script>
<style lang="scss" scoped>
.glide {
  overflow: hidden;
}
.glide__slides {
  display: flex;
  width: 100%;
  max-width: 200px;
}
</style>
