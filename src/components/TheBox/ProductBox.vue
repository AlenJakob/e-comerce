<template>
  <div class="product-box">
    <slot class="product-box__gallery" name="gallery"></slot>
    <slot class="product-box__product" name="product"></slot>
  </div>
</template>

<style lang="scss" scoped>
.product-box {
  display: flex;
  gap: 20px;
  padding: 2rem 4rem;
  margin: 4rem 0;
}
</style>
