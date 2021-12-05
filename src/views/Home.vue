<template>
  <div class="home">
    <ul class="banner-container">
      <banner-card
        v-for="item in state.banners"
        :key="item.id"
        :banner="item"
      ></banner-card>
    </ul>
  </div>
</template>

<script setup>
import BannerCard from "@/components/ui/card/BannerCard";
import SHOES_BANNES from "@/services/banners/index";
import { onMounted, reactive } from "vue";
const state = reactive(SHOES_BANNES);

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
  margin-top: 4rem;
  gap: 30px;
}
</style>
