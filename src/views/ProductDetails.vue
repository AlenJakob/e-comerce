<template>
  <div>
    <product-box v-for="item in result" :key="item">
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
import { defineProps, reactive, computed } from "vue";

const props = defineProps({
  id: {
    type: [String, Number],
  },
});
const state = reactive({ productList: SHOES_COLLECTION });

// const productListClone = JSON.parse(JSON.stringify(state.productList.shoes));

const result = computed(() => {
  return state.productList.shoes.filter(
    (item) => Number(item.id) === Number(props.id)
  );
});

// Temporary get item by given id

// const shoeItem = () => {
//   return;
// };
</script>
