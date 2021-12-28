<template>
  <ul class="breadcrumbs">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      viewBox="0 0 48 48"
      width="20px"
      height="20px"
    >
      <path
        d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"
      />
    </svg>
    <li
      class="breadcrumbs__item"
      :class="{ active: i === breadCrumblist.length - 1 }"
      v-for="(crumb, i) in breadCrumblist"
      :key="i"
    >
      <router-link class="breadcrumbs__link" :to="crumb.link">{{
        removeSlash(crumb.name)
      }}</router-link
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 14 24"
        fill="none"
        class="breadcrumbs__item-icon"
        v-if="i !== breadCrumblist.length - 1"
      >
        <path
          d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
          fill="black"
        />
      </svg>
    </li>
  </ul>
</template>

<script setup>
// helper
// remove all special characters // TODO move to helper!
// const reg = /[^a-zA-Z]/g;
const reg = /\\|\//g;
const removeSlash = (url) => {
  return url.replace(reg, "");
};
import { defineProps, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
  crumbs: {
    type: Array,
    default: () => [],
  },
  lastRoute: {
    type: String,
    default: "",
  },
  productName: {
    type: String,
    default: "",
  },
});
const breadCrumblist = computed(() => {
  if (props.productName) {
    return [
      { name: "Home", link: "/" },
      { name: props.lastRoute, link: props.lastRoute },
      { name: props.productName, link: route.fullPath },
    ];
  }
  return [
    { name: "Home", link: "/" },
    { name: route.fullPath, link: route.fullPath },
  ];
});
</script>

<style lang="scss" scoped>
// TODO STYLE THE BREADCRUMBS
.breadcrumbs {
  display: flex;
  padding: 2rem 0;
  align-items: center;
  &__item {
    display: flex;
    break-after: column;
    align-items: center;
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
  }
  &__link {
    text-decoration: none;
    color: $c-black;
  }
  &__item-icon {
    margin-left: 8px;
  }
}
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
