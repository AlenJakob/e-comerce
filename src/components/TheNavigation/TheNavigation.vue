<template>
	<div class="the-navigation">
		<screen-overlay
			@click="toggleCart"
			:is-open="cartVisible"
		></screen-overlay>
		<router-link to="/" class="the-navigation__logo">
			<svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
					fill="#1D2026"
					fill-rule="nonzero"
				/>
			</svg>
		</router-link>
		<nav class="the-navigation__menu">
			<router-link
				v-for="link in consts.MENU_CATEGORIES"
				:key="link.id"
				:to="link.path"
				class="the-navigation__menu-link"
			>
				{{ link.name }}
			</router-link>
		</nav>
		<div class="the-navigation__cta">
			<span class="cart" @click="toggleCart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="24"
					viewBox="0 0 26 24"
					fill="none"
				>
					<path
						d="M24.9328 4.3692H4.60191L4.30044 0.9792C4.27662 0.711612 4.15418 0.462698 3.95724 0.281469C3.7603 0.10024 3.50313 -0.000173254 3.23635 2.24406e-07H1.06766C0.7845 2.24406e-07 0.512936 0.11328 0.312711 0.314919C0.112485 0.516558 0 0.790039 0 1.0752C0 1.36036 0.112485 1.63384 0.312711 1.83548C0.512936 2.03712 0.7845 2.1504 1.06766 2.1504H2.25925L3.48777 15.93C3.57476 16.9236 4.1074 18.0012 5.02611 18.7332C3.371 20.862 4.88312 24 7.57611 24C9.81033 24 11.3856 21.756 10.6194 19.6296H16.4642C15.6992 21.7536 17.2709 24 19.5087 24C20.367 23.999 21.1899 23.6552 21.7969 23.044C22.4039 22.4328 22.7453 21.604 22.7462 20.7396C22.7453 19.8752 22.4039 19.0464 21.7969 18.4352C21.1899 17.824 20.367 17.4802 19.5087 17.4792H7.58326C6.77179 17.4792 6.06518 16.9872 5.76013 16.2684L22.8248 15.258C23.0519 15.2447 23.2687 15.1587 23.4439 15.0125C23.619 14.8664 23.7432 14.6678 23.7984 14.4456L25.9683 5.706C26.0075 5.54737 26.0104 5.38182 25.9767 5.2219C25.9429 5.06199 25.8735 4.91192 25.7735 4.78307C25.6736 4.65422 25.5459 4.54999 25.4 4.47828C25.2541 4.40657 25.0951 4.36927 24.9328 4.3692ZM7.57492 21.8496C7.29146 21.8363 7.02397 21.7136 6.82803 21.5069C6.6321 21.3002 6.52277 21.0254 6.52277 20.7396C6.52277 20.4538 6.6321 20.179 6.82803 19.9723C7.02397 19.7656 7.29146 19.6429 7.57492 19.6296C7.85838 19.6429 8.12586 19.7656 8.3218 19.9723C8.51774 20.179 8.62706 20.4538 8.62706 20.7396C8.62706 21.0254 8.51774 21.3002 8.3218 21.5069C8.12586 21.7136 7.85838 21.8363 7.57492 21.8496ZM19.5087 21.8496C19.2252 21.8363 18.9577 21.7136 18.7618 21.5069C18.5658 21.3002 18.4565 21.0254 18.4565 20.7396C18.4565 20.4538 18.5658 20.179 18.7618 19.9723C18.9577 19.7656 19.2252 19.6429 19.5087 19.6296C19.7921 19.6429 20.0596 19.7656 20.2555 19.9723C20.4515 20.179 20.5608 20.4538 20.5608 20.7396C20.5608 21.0254 20.4515 21.3002 20.2555 21.5069C20.0596 21.7136 19.7921 21.8363 19.5087 21.8496ZM21.9169 13.158L5.47296 14.13L4.79375 6.5208H23.5648L21.9169 13.158Z"
						fill="#69707D"
					/>
				</svg>
				<span class="cart__quantity">{{ itemsInCart }}</span>
			</span>
			<span class="img cart__avatar"></span>
			<base-hamburger
				@click="showMenu"
				class="cart__hamburger"
			></base-hamburger>
			<cart-tooltip
				@close-cart="toggleCart"
				v-if="cartVisible"
			></cart-tooltip>
		</div>
	</div>
</template>

<script setup>
import ScreenOverlay from "@/components/ui/utils/ScreenOverlay"
import CartTooltip from "@/components/ui/utils/CartTooltip"
import BaseHamburger from "@/components/ui/utils/BaseHamburger"
import consts from "@/services/index"
import store from "@/store"
import { computed, ref } from "vue"

const cartVisible = ref(false)

const itemsInCart = computed(() => {
	return store.state.cart.reduce((acc, val) => (acc += val.quantity), 0)
})

const toggleCart = () => {
	cartVisible.value = !cartVisible.value
}

const showMenu = () => {
	store.methods.toggleMobileMenu()
}
</script>

<style lang="scss" scoped>
.the-navigation {
	box-sizing: border-box;
	border-bottom: 1px solid $c-grayish-blue;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 97px;
	&__logo {
		margin-right: 3rem;
	}

	&__menu {
		display: none;
		align-items: center;
		flex-grow: 1;
		@include tablet-portrait-up {
			display: flex;
		}
	}

	&__menu-link {
		display: flex;
		align-items: center;
		min-height: 60px;
		color: $c-dark-grayish-blue;
		text-decoration: none;
		padding: 1rem 0;
		margin-right: 2rem;
		border-bottom: 4px solid transparent;
		&:hover {
			border-color: $c-orange;
			color: $c-very-dark-blue;
		}
	}

	&__cta {
		display: flex;
		position: relative;
		align-items: center;
	}
}
.cart {
	z-index: 1000;
	height: 50px;
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	margin-right: 40px;

	&__quantity {
		position: absolute;
		border-radius: 20px;
		font-size: 14px;
		text-align: center;
		right: -18px;
		top: 2px;
		color: white;
		background: $c-accent;
		width: 28px;
		padding: 1px;
	}
	&__avatar {
		margin-right: 20px;
	}
}
.img {
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: $c-orange;
}
</style>
