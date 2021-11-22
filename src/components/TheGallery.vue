<template>
  <div class="the-gallery">
    <div>
      <img
        class="the-gallery__image"
        :src="currentImg"
        :alt="images[0].url"
        @click="emitIsOpen"
      />
    </div>
    <div class="thumbnail">
      <the-thumbnail
        v-for="(item, i) in thumbnails"
        :key="item.id"
        :index="i"
        class="thumbnail__img"
        :class="{ active: i === activeItem }"
        :item="item"
        @set-image="setImage"
        @click="setActiveClass(i)"
      ></the-thumbnail>
    </div>
  </div>
</template>

<script setup>
import TheThumbnail from "@/components/TheThumbnail";
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  thumbnails: {
    type: Array,
    default: () => [],
  },
});

const currentImg = ref(props.images[0].img);
// const isActive = ref(false);
const activeItem = ref(0);

const emit = defineEmits(["open-gallery"]);

const setImage = (item) => {
  currentImg.value = item;
};
const setActiveClass = (i) => {
  console.log(i);
  activeItem.value = i;
};
const emitIsOpen = () => {
  emit("open-gallery");
};
</script>

<style lang="scss" scoped>
.main-gallery {
  position: absolute;
  left: 0;
  top: 50%;
}
.thumbnail {
  display: flex;
  flex: 1;
  gap: 10px;
}
.thumbnail__img {
  border: 3px dashed transparent;
}
.the-gallery {
  position: relative;
  flex: 1;
  cursor: pointer;

  &__image {
    object-fit: cover;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
}

.active {
  border-color: $c-orange;
}
</style>
