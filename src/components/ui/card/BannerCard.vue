<template>
	<div class="banner-card">
		<img class="banner-card__image" :src="banner.img" alt="" />
		<h2 class="banner-card__title">{{ banner.name }}</h2>
		<p class="banner-card__category">
			Category: <i>{{ banner.category[0] }}</i>
		</p>
		<p class="banner-card__content">{{ banner.description }}</p>
		<ul class="banner-card__slugs">
			<li
				class="banner-card__slugs-item"
				v-for="slug in banner.collection_slugs"
				:key="slug"
			>
				<a :href="slug"> #{{ slug }}</a>
			</li>
		</ul>
		<base-button :outline="true" text="Check Out"></base-button>
	</div>
</template>

<script setup>
import BaseButton from "@/components/ui/utils/BaseButton"

import { defineProps } from "vue"
defineProps({
	banner: {
		type: Object,
		default: () => ({})
	}
})
</script>

<style lang="scss" scoped>
.banner-card {
	flex: 1;
	max-width: 345px;
	&__image {
		object-fit: cover;
		border-radius: 5px;
		max-width: 100%;
	}
	&__title {
		margin: 1rem 0;
	}
	&__content {
		margin: 1rem 0;
	}
	&__category {
		font-size: 14px;
	}
	&__slugs {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0;
	}
	&__slugs-item {
		white-space: nowrap;
		font-size: 12px;
		margin: 4px;
		&:first-child {
			margin-left: 0;
		}
		&:nth-child(5) {
			margin-left: 0;
		}
		& a {
			color: #6d6763;
		}
	}
}
</style>
