<template>
  <div class="the-box">
    <slot class="the-box__gallery" name="gallery"></slot>
    <slot class="the-box__product" name="product"></slot>
  </div>
</template>

<style lang="scss" scoped>
.the-box {
  display: flex;
  gap: 20px;
  padding: 2rem 4rem;
  margin-top: 2rem;
}
</style>
