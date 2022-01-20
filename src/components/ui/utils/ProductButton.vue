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
        <button
          class="product-cta__button"
          :class="{
            'product-button-cta--bold': isBold,
            'product-cta--outline': outline,
          }"
        >
          <slot></slot>
          <span class="product-cta__button-text">{{ props.text }}</span>
        </button></template
      >
    </div>
  </transition>
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
  isSmall: {
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
  &-cta__button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 2rem 0;
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
