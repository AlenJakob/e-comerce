<template>
  <div class="base-hamburger-menu">
    <ul class="base-hamburger-menu__content">
      <router-link
        v-for="link in consts.MENU_CATEGORIES"
        :key="link.id"
        :to="link.path"
        class="base-hamburger-menu__content-elem"
        @click="toggleMobileMenu"
        >{{ link.name }}
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import store from "@/store";
import consts from "@/services/index";

const toggleMobileMenu = () => {
  store.methods.toggleMobileMenu();
};
</script>

<style lang="scss" scoped>
.base-hamburger-menu {
  padding: 30px 0 0 16px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: $c-white;
  z-index: 1200;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__content-elem {
    font-size: 1.5rem;
    color: $c-dark-grayish-blue;
    margin-bottom: 8px;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    &:hover {
      border-color: $c-orange;
      color: $c-very-dark-blue;
    }
  }
  @include tablet-portrait-up {
    display: none;
  }
}
</style>
