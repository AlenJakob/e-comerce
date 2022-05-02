<template>
	<!-- <div class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides"> -->

	<agile :options="sliderSettings" draggable="false">
			<product-slider-item v-for="n in 25" :key="n"></product-slider-item>
	</agile>
	<!-- </ul>
		</div>
	</div> -->
</template>

<script setup>
import { VueAgile as agile } from "vue-agile";
import { ref } from "vue";
import ProductSliderItem from "@/components/ui/ProductSliderItem";

const sliderSettings = ref({
	autoplay: false,
	autoplaySpeed: 5000,
	slidesToShow: 4,
	dots: false,
	initialSlide: 0,
	centerMode: true,
});
</script>