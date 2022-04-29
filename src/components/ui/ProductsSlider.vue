<template>
	<div class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<product-slider-item
					v-for="n in 25"
					:key="n"
				></product-slider-item>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue"
import Glide from "@glidejs/glide/dist/glide.esm"
import ProductSliderItem from "@/components/ui/ProductSliderItem"

onMounted(async () => {
	const glide = await new Glide(".glide", {
		gap: 50,
		perView: 5,
		type: "carousel"
	})
	glide.mount()
})
</script>
<style lang="scss" scoped>
.glide {
	overflow: hidden;
	cursor: grab;
	&:active {
		cursor: grabbing;
	}
}
.glide__slides {
	display: flex;
	width: 100%;
	max-width: 200px;
}
</style>
