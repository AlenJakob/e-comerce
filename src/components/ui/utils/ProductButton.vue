<template>
  <div class="product-cta">
    <router-link
      v-if="href"
      class="product-cta-button product-cta-button--link"
      :to="href"
    >
      {{ props.text }}</router-link
    >
    <template v-else>
      <button
        class="product-cta-button"
        :class="{
          'product-button-cta--bold': isBold,
          'product-cta--outline': outline,
        }"
      >
        <slot></slot>
        <span>{{ props.text }}</span>
      </button></template
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "click",
  },
  isBold: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  outline: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.product {
  &-cta {
    display: flex;
  }
  &-cta-button {
    flex: 1;
    margin: 2rem 0;
    background: $c-orange;
    color: $c-white;
    border-radius: 0.4rem;
    border: none;
    height: 46px;
    min-width: 150px;
    cursor: pointer;
    &:hover {
      background: rgba($c-orange, 0.9);
    }
    &--bold {
      font-weight: $fw-bold;
    }
    &--link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
}
.product-cta-button {
  &--small {
    height: 36px;
  }
  &--medium {
    height: 48px;
  }
}
.product-cta--outline {
  color: $c-orange;
  border: 1px solid $c-orange;
  background: $c-white;
  &:hover {
    background: rgba($c-orange, 0.1);
  }
}
</style>
