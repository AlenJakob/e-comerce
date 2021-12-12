<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="n in 5" :key="n">
          <img
            class="glide__slide-img"
            alt="tmp alt please put something here"
            src="https://img.eobuwie.cloud/card_desktop_430w(wysiwyg/eobuwie/akcjeGlobalny/12_2021/newsg/fila_874X874.jpg)/fila_874X874.jpg"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Glide from "@glidejs/glide/dist/glide.esm";
// git commit --amedn --no-edit
onMounted(async () => {
  const glide = await new Glide(".glide", {
    gap: 20,
    perView: 4,
    startAt: 1,
    type: "carousel",
  });
  glide.mount();
});
</script>
<style lang="scss" scoped>
.glide {
  overflow: hidden;
}
.glide__slides {
  display: flex;
  max-width: 300px;
}
.glide__slide-img {
  max-width: 300px;
}
</style>
