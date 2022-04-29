<template>
	<div class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li
					class="glide__slide"
					v-for="(item, index) in props.images"
					:key="index"
				>
					<img
						class="glide__slide-img"
						alt="tmp alt please put something here"
						:data-id="index"
						:src="item.img"
					/>
				</li>
			</ul>
			<div class="glide__arrows" data-glide-el="controls">
				<button
					class="arrow glide-arrow--left arrow__left"
					data-glide-dir="<"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="18"
					>
						<path
							class="arrow--color"
							d="M11 1 3 9l8 8"
							stroke="#1D2026"
							stroke-width="3"
							fill="none"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					class="arrow glide-arrow--right arrow__right"
					data-glide-dir=">"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="18"
					>
						<path
							class="arrow--color"
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							stroke-width="3"
							fill="none"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.esm"
import { onMounted, defineProps } from "vue"
const props = defineProps({
	images: {
		type: Array,
		default: () => []
	},
	activeImage: {
		type: Number,
		default: 0
	}
})

onMounted(async () => {
	const glide = await new Glide(".glide", {
		Controls,
		Breakpoints,
		gap: 0,
		perView: 1,
		startAt: props.activeImage,
		focusAt: "center",
		type: "carousel",
		autoplay: 0,
		animationDuration: 600
	})
	glide.mount()
})
</script>

<style lang="scss" scoped>
// Required Core Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
.glide {
	width: 600px;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
}
.glide__slide-img {
	width: 100%;
}
.arrow {
	position: absolute;
	background: $c-white;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	width: 50px;
	height: 50px;
	box-shadow: 0 0 3px rgba($c-black, 0.5);
	top: 50%;
	&:hover .arrow--color {
		stroke: $c-accent;
	}

	&__left {
		left: -25px;
	}
	&__right {
		right: -25px;
	}
}
</style>
