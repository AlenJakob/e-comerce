<template>
  <main class="product-details">
    <div class="product-header">
      <h3 class="product-header__brand">{{ itemInfo.brand_name }}</h3>
      <h1 class="product-header__heading">{{ itemInfo.name }}</h1>
      <article class="product-header__content">
        {{ itemInfo.description }}
      </article>
    </div>

    <div class="product-summary">
      <p class="product-summary__price">${{ itemInfo.price }}.00</p>
      <p class="product-summary__discount">${{ itemInfo.price / 2 }}0</p>
    </div>

    <div class="product-details">
      <button
        class="product-details__btn-size"
        :class="{ 'product-details__btn-size--active': index === 2 }"
        v-for="(size, index) in SHOE_CALCULATE(itemInfo.size_range)"
        :key="index"
      >
        {{ size }}
      </button>
      <p class="product-details__color">
        color:
        <span class="product-details__color--label">{{ itemInfo.color }}</span>
      </p>
    </div>

    <div class="product-cta">
      <div class="cta__box">
        <button class="cta__box__button">-</button>
        <span class="cta__box__value">0</span>
        <button class="cta__box__button">+</button>
      </div>
      <product-button
        class="cta__box-button--spacing"
        text="Add to cart"
      ></product-button>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from "vue";
// NOTE: method accept array
import SHOE_CALCULATE from "@/helpers/index";
import ProductButton from "@/components/ui/utils/ProductButton";

defineProps({
  itemInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.product-details {
  flex: 1;
}
.product-header {
  &__brand {
    color: $c-orange;
    font-weight: $fw-bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
    font-size: 14px;
  }
  &__heading {
    margin-bottom: 2rem;
    color: $c-very-dark-blue;
  }
  &__content {
    color: $c-dark-grayish-blue;
    margin-bottom: 2rem;
    line-height: 1.5rem;
  }
}
.product-summary {
  margin-bottom: 2rem;

  &__price {
    font-size: 2rem;
    font-weight: $fw-bold;
    color: $c-very-dark-blue;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  &__discount {
    font-size: 1rem;
    font-weight: $fw-bold;
    color: $c-grayish-blue;
    letter-spacing: 1px;
    text-decoration: line-through;
  }
}
// .product-details__btn-size--active // active state of marked shoe size
// TODO: method that allows to choose only 1 size of shoes
.product-details {
  margin: 1rem 0;
  &__btn-size {
    background: #f1f1f1;
    border: 2px dashed transparent;
    border-radius: 4px;
    margin: 0 0.4rem;
    color: $c-dark-gray;
    font-weight: $fw-bold;
    height: 40px;
    width: 40px;
    &:first-child {
      margin-left: 0;
    }
    &--active {
      border-color: rgba($c-dark-gray, 0.6);
    }
  }
  &__color {
    margin: 2rem 0;
  }
  &__color--label {
    margin-left: 8px;
    font-weight: $fw-bold;
    border: 2px dashed rgba($c-dark-gray, 0.4);
    border-radius: 4px;
    font-size: 1.2rem;
    padding: 2px 12px;
  }
}
.product-cta {
  display: flex;
  align-items: center;
}
.cta__box {
  background: $c-light-gray-blue;
  border-radius: 1rem;
  display: flex;
  height: 46px;
  &__button {
    border-radius: 1rem;
    background: $c-light-gray-blue;
    border: none;
    width: 46px;
    font-size: 2rem;
    font-weight: $fw-bold;
    color: $c-orange;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: rgba($c-grayish-blue, 0.6);
    }
    &:active {
      background: rgba($c-grayish-blue, 0.8);
    }
  }
  &__value {
    font-size: 1.2rem;
    font-weight: $fw-bold;
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.cta__box-button--spacing {
  margin-left: 1rem;
}
</style>
