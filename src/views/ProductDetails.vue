<template>
	<div>
		<breadcrumbs
			:last-route="lastRoute"
			:product-name="result[0].name"
		></breadcrumbs>
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
import ProductBox from "@/components/TheBox/ProductBox.vue"
import ProductGallery from "@/components/ProductGallery"
import ProductDetails from "@/components/ProductDetails"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import SHOES_COLLECTION from "@/services/collections/index"
import { defineProps, reactive, computed } from "vue"
import { useRouter } from "vue-router"
const props = defineProps({
	id: {
		type: [String, Number]
	}
})
const router = useRouter()
const state = reactive({ productList: SHOES_COLLECTION })
const lastRoute = reactive(router.options.history.state.back) // this is how we got last page
const result = computed(() => {
	return state.productList.shoes.filter(
		(item) => Number(item.id) === Number(props.id)
	)
})
</script>
