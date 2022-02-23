<template>
  <div class="list">
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list {
  padding: 16px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: $c-white;
  z-index: 1200;
  @include tablet-portrait-up {
    display: none;
  }
}
</style>
