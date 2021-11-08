<template>
  <div class="home">
    <the-box>
      <template v-slot:gallery
        ><the-gallery :images="images"></the-gallery
      ></template>
      <template v-slot:product><the-product></the-product></template>
    </the-box>
  </div>
</template>

<script>
// @ is an alias to /src
import TheBox from "@/components/TheBox/TheBox.vue";
import TheGallery from "@/components/TheGallery";
import TheProduct from "@/components/TheProduct.vue";

export default {
  name: "Home",
  data() {
    return {
      images: [
        {
          id: 1,
          img: "image-product-1",
          thumb: "image-product-1-thumbnail",
          alt: "shoes product",
        },
        {
          id: 2,
          img: "image-product-2",
          thumb: "image-product-2-thumbnail",
          alt: "shoes product",
        },
        {
          id: 2,
          img: "image-product-3",
          thumb: "image-product-3-thumbnail",
          alt: "shoes product",
        },
        {
          id: 2,
          img: "image-product-4",
          thumb: "image-product-4-thumbnail",
          alt: "shoes product",
        },
      ],
    };
  },
  components: { TheBox, TheGallery, TheProduct },
};
</script>

<style lang="scss" scoped>
.header {
  color: $c-red;
}
</style>
