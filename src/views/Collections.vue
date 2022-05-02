<template>
	<div>
		<breadcrumbs></breadcrumbs>
		<product-box v-for="item in productListClone" :key="item">
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
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SHOES_COLLECTION from "@/services/collections/index";
import { reactive } from "vue";

const state = reactive({ productList: SHOES_COLLECTION });
const productListClone = JSON.parse(
	JSON.stringify(state.productList.shoes)
).reverse();
</script>
