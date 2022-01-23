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
  padding: 1rem 2rem;
  margin-bottom: 4rem;
}
</style>
