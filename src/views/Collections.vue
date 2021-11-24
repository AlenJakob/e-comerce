<template>
  <div>
    <h1>Colellection site</h1>
    <the-box v-for="item in shoesCollection" :key="item">
      <template v-slot:gallery>
        <the-gallery
          :images="item.main_image"
          :thumbnails="item.thumbnails"
        ></the-gallery
      ></template>
      <template v-slot:product>
        <the-product :item-info="item"></the-product>
      </template>
    </the-box>
  </div>
</template>

<script setup>
import TheBox from "@/components/TheBox/TheBox.vue";
import TheGallery from "@/components/TheGallery";
import TheProduct from "@/components/TheProduct.vue";
import SHOES_COLLECTION from "@/services/collections/index";
import { onMounted, ref } from "vue";

const shoesCollection = ref(SHOES_COLLECTION.shoes);

onMounted(() => {
  console.log(shoesCollection.value);
});
</script>
