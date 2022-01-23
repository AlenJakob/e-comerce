<template>
  <transition name="fade">
    <div class="product-cta" :class="{ 'product-cta--small': isSmall }">
      <router-link
        v-if="href"
        class="product-cta__button product-cta-button--link"
        :to="href"
      >
        <span class="product-cta__button-text">{{ props.text }}</span>
      </router-link>
      <template v-else>
        <button class="product-cta__button" :class="btnSettings">
          <slot></slot>
          <span class="product-cta__button-text">{{ props.text }}</span>
        </button></template
      >
    </div>
  </transition>
</template>

<script setup>
import { defineProps, computed } from "vue";
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
  isSmall: {
    type: Boolean,
    default: false,
  },
  uppercase: {
    type: Boolean,
    default: true,
  },
});

const btnSettings = computed(() => {
  return {
    "product-cta-button--bold": props.isBold,
    "product-cta--outline": props.outline,
    "product-cta-button--uppercase": props.isBold,
  };
});
</script>

<style lang="scss" scoped>
.product {
  &-cta {
    display: flex;
  }
  &-cta__button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0;
    background: $c-orange;
    color: $c-white;
    border-radius: 0.4rem;
    border: none;
    height: 46px;
    min-width: 80px;
    cursor: pointer;
    &:hover {
      background: rgba($c-orange, 0.9);
    }
    &--link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
  &-cta__button-text {
    margin: 0 20px;
  }
}
.product-cta-button {
  &--small {
    height: 36px;
  }
  &--medium {
    height: 48px;
  }
  &--bold {
    font-weight: $fw-bold;
  }
  &--uppercase {
    text-transform: uppercase;
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
.product-cta {
  &--small {
    max-height: 36px;
  }
}

// Animation fade styles
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
