<template>
	<div class="cart">
		<!-- // Steps goes here -> step 1 -> step 2 -> step 3 -->
		<div class="cart-box">
			<checkout-list
				class="checkout-list-container"
				:cart="cart"
			></checkout-list>
			<checkout-details :total-price="totalPrice"></checkout-details>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import CheckoutList from "@/components/TheCheckout/CheckoutList";
import CheckoutDetails from "@/components/TheCheckout/CheckoutDetails";
import store from "@/store";

const cart = computed(()=> store.state.cart)
const totalPrice = computed(() => {
	return store.state.totalPrice;
});
</script>

<style lang="scss" scoped>
.checkout-list-container {
	width: 100%;
}
.cart-box {
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
	padding: 1rem 0;
	gap: 1rem;
}
</style>
