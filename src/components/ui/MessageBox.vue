<template>
	<div
		class="message-box"
		:class="{ 'message-box--danger': messageStateColor }"
		v-if="props.messageStatus"
	>
		<h3
			class="message-box__text"
			:class="{ 'message-box__text--danger': messageStateColor }"
		>
			{{ messageText }}
		</h3>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="23"
			height="13"
			viewBox="0 0 23 13"
			fill="none"
		>
			<path
				d="M2 1L8.02346 12M6.339 11.5526L22 1.77487"
				:stroke="iconStateColor"
				stroke-width="3"
			/>
		</svg>
	</div>
</template>

<script setup>
import { defineProps, provide, computed } from "vue"
import store from "@/store"
provide("store", store)

const props = defineProps({
	messageText: {
		type: String,
		default: ""
	},
	messageStatus: {
		type: Boolean,
		default: false
	},
	messageState: {
		type: String,
		default: ""
	}
})

const messageStateColor = computed(() => {
	return props.messageState === "danger"
})

const iconStateColor = computed(() => {
	return props.messageState === "danger" ? "#990000" : "#289900"
})
</script>

<style lang="scss" scoped>
.message-box {
	display: flex;
	align-items: center;
	border: 1px solid #289900;
	background: $c-white;
	padding: 0.5rem 1rem;
	position: fixed;
	bottom: 35px;
	left: 25px;
	z-index: 1000;
	border-radius: 4px;
	&--danger {
		border-color: #990000;
	}
	&__text {
		margin: 0 1rem;
		color: #289900;
		&--danger {
			color: #990000;
		}
	}
}
</style>
