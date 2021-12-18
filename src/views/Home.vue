<template>
  <div class="home">
    <ul class="banner-container">
      <banner-card
        v-for="item in state.banners"
        :key="item.id"
        :banner="item"
      ></banner-card>
    </ul>
    <div class="slider-box">
      <products-slider></products-slider>
    </div>
    <loader v-if="$root.loading"></loader>
  </div>
</template>

<script setup>
import BannerCard from "@/components/ui/card/BannerCard";
import ProductsSlider from "@/components/ui/ProductsSlider";
import SHOES_BANNERS from "@/services/banners/index";
import Loader from "@/components/ui/utils/Loader";
import { onMounted, reactive } from "vue";
const state = reactive(SHOES_BANNERS);

onMounted(() => {
  console.log(state.banners.banners);
});
</script>

<style lang="scss" scoped>
.home {
  max-width: 1100px;
}
.banner-container {
  display: flex;
  margin-top: 5rem;
  gap: 30px;
}
.slider-box {
  margin: 5rem 0;
  max-width: 1100px;
}
</style>
