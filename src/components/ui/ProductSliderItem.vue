<template>
  <li class="product-slider-item" d>
    <img
      class="product-slider-item__slide-img"
      alt="tmp alt please put something here"
      src="https://www.eobuwie.com.pl/media/catalog/product/cache/image/800x800/0/0/0000209915907_01_plj.jpg"
    />
    <div class="product-slider-item__content">
      <h3 class="product-slider-item__content-title">Title shoes</h3>
      <p class="product-slider-item__content-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eos
        veniam! Expedita?
      </p>
      <base-button text="checkout"></base-button>
    </div>
  </li>
</template>

<script setup>
import BaseButton from "@/components/ui/utils/BaseButton";
</script>
<style lang="scss" scoped>
.product-slider-item {
  &__slide-img {
    width: 190px;
  }
  &__content-title {
    margin: 1rem 0;
    color: #383b41;
  }
  &__content-text {
    color: #68707d;
    margin-bottom: 1rem;
  }
}
</style>
