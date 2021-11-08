<template>
  <div class="home">
    <the-box>
      <template v-slot:gallery
        ><the-gallery :images="product.images"></the-gallery
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
      product: {
        description: {
          manufactures: "Sneaker Company",
          title: "Fall Limiteles Sneakers",
          description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
          regularPrice: "250.00 ",
          discount: "50",
        },
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
      },
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
