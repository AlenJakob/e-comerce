<template>
  <div class="cart-tooltip">
    <div class="cart-tooltip__container">
      <div class="cart-tooltip__product" v-for="item in cart" :key="item.id">
        <div class="product-details">
          <span class="product-details__title">{{ item.name }}</span>
          <ul class="product-details__list">
            <li class="product-details__list-item">${{ item.price / 2 }} x</li>
            <li class="product-details__list-item">
              {{ item.quantity }} <b style="color: red">{{ item.size }}</b>
            </li>
            <li
              class="
                product-details__list-item
                product-details__list-item--bold-price
              "
            >
              ${{ (item.price / 2) * item.quantity }}
            </li>
            <!-- <li
              class="
                product-details__list-item
                product-details__list-item--line-through
              "
            >
              {{ item.price / 2 }}
            </li> -->
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
    <product-button class="cart-btn" text="checkout"></product-button>
  </div>
</template>

<script setup>
// TODO: Show only 1 record if the item is te same
import ProductButton from "@/components/ui/utils/ProductButton";
import store from "@/store";
import { computed } from "vue";
const cart = computed(() => {
  return store.state.cart;
});
</script>
<style scoped lang="scss">
.cart-tooltip {
  box-sizing: border-box;
  position: absolute;
  min-height: 180px;
  padding: 1rem;
  width: 350px;
  right: 0;
  top: calc(150px / 2 - 20px);
  background: white;
  box-shadow: 0px 15px 15px rgba($c-black, 0.1);
  margin: 1rem 0;
  &__container {
    max-height: 300px;
    overflow-y: scroll;
  }
  &__product {
    display: flex;
    align-items: center;
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
  &__title {
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
