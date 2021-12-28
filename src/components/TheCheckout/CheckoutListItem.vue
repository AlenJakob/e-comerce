<template>
  <div class="checkout-list-item">
    <div class="checkout-list-item__box">
      <img
        class="checkout-list-item__box-img"
        :src="productImage.img"
        :alt="productImage.name"
        draggable="false"
      />
    </div>
    <router-link :to="`/${productId}`" class="checkout-list-item__content">
      <div class="content-heading">
        <h2 class="content-heading__brand-name">{{ brandName }}</h2>
        <h3 class="content-heading__product-name">{{ productName }}</h3>
        <span class="content-heading__product-size"
          >size: {{ productSize }}
        </span>
      </div>
      <div class="content-pricing">
        <div>
          <span class="content-pricing__product-old-price">
            ${{ productPrice }}
          </span>
        </div>
        <div class="content-pricing__box">
          <span class="content-pricing__product-discount-price"
            >${{ priceWithDiscount }} x {{ productQty }}</span
          >
          <span class="content-pricing__product-calculated-price">
            Total Price: <b>${{ priceWithDiscount * productQty }}</b>
          </span>
        </div>
      </div>
    </router-link>
    <span
      @click="store.methods.removeProduct(productId, productSize)"
      class="checkout-list-item__btn-remove"
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
        <use fill="#ff7d1a" fill-rule="nonzero" xlink:href="#a" />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { DISCOUNT_CALCULATE } from "@/helpers/calculate/discountCalculator.js";
import store from "@/store";

const props = defineProps({
  brandName: {
    type: String,
    default: "",
  },
  productName: {
    type: String,
    default: "",
  },
  productPrice: {
    type: Number,
  },
  productImage: {
    type: Object,
    default: () => ({}),
  },
  productDiscount: {
    type: Number,
  },
  productId: {
    type: Number,
  },
  productSize: {
    type: Number,
  },
  productQty: {
    type: Number,
  },
});

onMounted(() => {
  console.log(props.productImage);
});

const priceWithDiscount = DISCOUNT_CALCULATE(
  props.productDiscount,
  props.productPrice
);
</script>

<style lang="scss" scoped>
.checkout-list-item {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  &:nth-child(even) {
    background: rgba($c-black, 0.03);
  }
  &__box {
    display: flex;
    flex: 1;
    border-radius: 4px;
    border: 2px dashed rgba($c-accent, 0.2);
    padding: 1px;
  }
  &__box-img {
    max-width: 100px;
    max-width: 200px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 5;
    margin-left: 30px;
    text-decoration: none;
  }
  // TODO: Move those button to Concept of DRY
  &__btn-remove {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-items: center;
    margin-right: 0.2rem;
    max-width: 50px;
    max-height: 20px;
    border-radius: 4px;
    border: 1px dashed transparent;
    cursor: pointer;
    &:hover {
      border: 1px dashed orange;
      background-color: rgba($c-orange, 0.1);
    }
  }
}

.content-heading {
  &__brand-name {
    color: $c-accent;
    text-decoration: none;
    font-size: 14px;
  }
  &__product-name {
    font-size: 1.8rem;
    font-weight: 400;
    color: $c-dark-gray;
  }
  &__product-size {
    padding: 0.4rem 0;
    display: flex;
    font-weight: 600;
    color: $c-very-dark-blue;
  }
}
.content-pricing {
  display: flex;
  flex-direction: column;
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__product-old-price {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: rgba($c-dark-gray, 0.6);
  }
  &__product-discount-price {
    font-size: 1.5rem;
    color: $c-dark-gray;
  }
  &__product-calculated-price {
    font-size: 1.5rem;
    color: $c-dark-gray;
  }
}
</style>
