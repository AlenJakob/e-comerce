<template>
  <div>
    <product-box v-for="item in state.productList.shoes" :key="item">
      <template v-slot:gallery>
        <product-gallery
          :images="item.main_image"
          :thumbnails="item.thumbnails"
        ></product-gallery
      ></template>
      <template v-slot:product>
        <product-details :item-info="item"></product-details>
      </template>
    </product-box>
  </div>
</template>

<script setup>
import ProductBox from "@/components/TheBox/ProductBox.vue";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import SHOES_COLLECTION from "@/services/collections/index";
import { onMounted, reactive } from "vue";

const state = reactive({ productList: SHOES_COLLECTION });
onMounted(() => {
  console.log(state.productList.shoes);
});
</script>
