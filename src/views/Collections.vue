<template>
  <div>
    <h1>Colellection site</h1>
    <product-box v-for="item in shoesCollection" :key="item">
      <template v-slot:gallery>
        <product-gallery
          :images="item.main_image"
          :thumbnails="item.thumbnails"
        ></product-gallery
      ></template>
      <template v-slot:product>
        <product-info :item-info="item"></product-info>
      </template>
    </product-box>
  </div>
</template>

<script setup>
import ProductBox from "@/components/TheBox/ProductBox.vue";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import SHOES_COLLECTION from "@/services/collections/index";
import { onMounted, ref } from "vue";

const shoesCollection = ref(SHOES_COLLECTION.shoes);

onMounted(() => {
  console.log(shoesCollection.value);
});
</script>
