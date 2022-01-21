<template>
  <div class="cart-tooltip">
    <div class="cart-tooltip__container">
      <p v-if="!productsInCart" class="cart-tooltip__info">
        No Products in Cart
      </p>
      <div class="cart-tooltip__product" v-for="item in cart" :key="item.id">
        <img
          class="product-details__image"
          :src="item.main_image[0].img"
          :alt="item.main_image[0].name"
        />
        <div class="product-details">
          <ul class="product-details__title">
            <li>{{ item.name }}</li>
            <li style="color: rgb(173, 95, 0)">( size: {{ item.size }} )</li>
          </ul>
          <ul class="product-details__list">
            <li class="product-details__list-item">${{ item.price / 2 }} x</li>
            <li class="product-details__list-item">
              {{ item.quantity }}
            </li>
            <li
              class="
                product-details__list-item
                product-details__list-item--bold-price
              "
            >
              ${{ (item.price / 2) * item.quantity }}
            </li>
          </ul>
        </div>
        <span
          @click="store.methods.removeProduct(item.id, item.size)"
          class="product-btn-remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="14"
            height="16"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </span>
      </div>
    </div>
    <base-button
      @click="closeCart"
      href="/cart"
      class="cart-btn"
      text="checkout"
    ></base-button>
    <span @click="closeCart" class="cart-tooltip__close"
      ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="15">
        <path
          class="cart-tooltip__close--icon-color"
          d="m11.596.782 2.122 2.122L9.12
        7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878
        7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        /></svg
    ></span>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/utils/BaseButton";
import store from "@/store";
import { computed, defineEmits } from "vue";
const cart = computed(() => {
  return store.state.cart;
});
const productsInCart = computed(() => {
  return store.state.cart.length;
});
const emit = defineEmits(["close-cart"]);
const closeCart = () => {
  emit("close-cart");
};
</script>
<style scoped lang="scss">
.cart-tooltip {
  z-index: 1000;
  box-sizing: border-box;
  position: absolute;
  min-height: 180px;
  padding: 1rem;
  width: 350px;
  right: 0;
  top: calc(180px / 2 - 20px);
  background: white;
  box-shadow: 0px 15px 15px rgba($c-black, 0.1);
  margin: 4px 0;
  &__container {
    max-height: 300px;
    overflow-y: scroll;
    position: relative;
  }
  &__product {
    display: flex;
    align-items: center;
  }
  &__info {
    font-size: 18px;
    text-align: center;
  }
  &__close {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $c-white;
    box-shadow: 0 0 3px grey;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: calc(50% - 40px);
    bottom: -20px;
    transform: translateX(-50%);
    &:hover .cart-tooltip__close--icon-color {
      fill: $c-accent;
    }
  }
}
.product-container {
  overflow-y: scroll;
}
.product-details {
  max-height: 400px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
  &__image {
    max-width: 60px;
  }
  &__title {
    font-size: 14px;
    color: $c-dark-grayish-blue;
    margin-bottom: 0.5rem;
  }
  &__list {
    display: flex;
  }
  &__list-item {
    margin-right: 0.2em;
    &:last-child {
      margin-left: 0.2em;
    }
    &--bold-price {
      font-weight: $fw-bold;
    }
  }
}
.product-btn-remove {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right: 0.2rem;
  max-width: 50px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba($c-black, 0.1);
  }
}
.cart-btn.product-button {
  width: 100%;
}
</style>
