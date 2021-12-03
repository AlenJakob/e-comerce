<template>
  <main class="product-details">
    <div class="product-header">
      <h3 class="product-header__brand">{{ itemInfo.brand_name }}</h3>
      <h1 class="product-header__heading">{{ itemInfo.name }}</h1>
      <article class="product-header__content">
        {{ itemInfo.description }}
      </article>
    </div>

    <div class="product-summary">
      <p class="product-summary__price">${{ itemInfo.price }}.00</p>
      <p class="product-summary__discount">${{ itemInfo.price / 2 }}.00</p>
    </div>

    <div class="product-details">
      <button
        class="product-details__btn-size"
        :class="{ 'product-details__btn-size--active': index === sizePicker }"
        v-for="(size, index) in itemInfo.size_range"
        :key="index"
        @click="setShoeDetails(index, size)"
      >
        {{ size }}
      </button>
      <p class="product-details__color">
        <span class="product-details__color-text">color:</span>
        <span class="product-details__color-label">{{ itemInfo.color }}</span>
      </p>
    </div>

    <div class="product-cta">
      <div class="cta__box">
        <button
          @click="removeQtyProduct"
          class="cta__box__button cta__box__button--border-right-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="12"
            height="4"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </button>
        <input class="cta__box__value" :value="product.quantity" />
        <button
          @click="addQtyProduct"
          class="cta__box__button cta__box__button--border-left-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="12"
            height="12"
          >
            <defs>
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
              />
            </defs>
            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
          </svg>
        </button>
      </div>
      <product-button
        @click="callToAction(itemInfo.id, product)"
        class="cta__box-button--spacing"
        text="Add to cart"
        :is-bold="true"
      ></product-button>
    </div>
    {{ product }}
  </main>
</template>

<script setup>
import { defineProps, ref, reactive, onMounted, inject } from "vue";
// NOTE: method accept array
import ProductButton from "@/components/ui/utils/ProductButton";

const store = inject("store");

const props = defineProps({
  itemInfo: {
    type: Object,
    default: () => ({}),
  },
});

const sizePicker = ref(0);

const product = reactive({
  size: props.itemInfo.size_range[0],
  quantity: 1,
});

const setShoeDetails = (index, size) => {
  product.size = size;
  sizePicker.value = index;
};
const addQtyProduct = () => {
  product.quantity++;
};
const removeQtyProduct = () => {
  if (product.quantity <= 1) {
    return;
  }
  product.quantity--;
};

const callToAction = (id, product) => {
  store.methods.addProduct(id, product);
  product.quantity = 1;
};
onMounted(() => {
  //   console.log("fom details product");
});
</script>
<style lang="scss" scoped>
.product-details {
  flex: 1;
}
.product-header {
  &__brand {
    color: $c-orange;
    font-weight: $fw-bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
    font-size: 14px;
  }
  &__heading {
    margin-bottom: 2rem;
    color: $c-very-dark-blue;
  }
  &__content {
    color: $c-dark-grayish-blue;
    margin-bottom: 2rem;
    line-height: 1.5rem;
  }
}
.product-summary {
  margin-bottom: 2rem;

  &__price {
    font-size: 2rem;
    font-weight: $fw-bold;
    color: $c-very-dark-blue;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  &__discount {
    font-size: 1rem;
    font-weight: $fw-bold;
    color: $c-grayish-blue;
    letter-spacing: 1px;
    text-decoration: line-through;
  }
}
// .product-details__btn-size--active // active product of marked shoe size
// TODO: method that allows to choose only 1 size of shoes
.product-details {
  margin: 1rem 0;
  &__btn-size {
    background: #f1f1f1;
    border: 2px dashed transparent;
    border-radius: 4px;
    margin: 0 0.4rem;
    color: $c-dark-gray;
    font-weight: $fw-bold;
    height: 40px;
    width: 40px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      background: rgba($c-black, 0.1);
    }
    &--active {
      border-color: rgba($c-dark-gray, 0.6);
    }
  }
  &__color {
    margin: 2rem 0;
  }
  &__color-text {
    color: $c-dark-gray;
  }
  &__color-label {
    margin-left: 8px;
    font-weight: $fw-bold;
    border: 2px dashed rgba($c-dark-gray, 0.4);
    border-radius: 4px;
    font-size: 1rem;
    padding: 2px 12px;
  }
}
.product-cta {
  display: flex;
  align-items: center;
}
.cta__box {
  background: $c-light-gray-blue;
  border-radius: 1rem;
  display: flex;
  height: 46px;
  &__button {
    border-radius: 1rem;
    background: $c-light-gray-blue;
    border: none;
    width: 46px;
    font-size: 2rem;
    font-weight: $fw-bold;
    color: $c-orange;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: rgba($c-grayish-blue, 0.6);
    }
    &:active {
      background: rgba($c-grayish-blue, 0.8);
    }
    &--border-right-none {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &--border-left-none {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &__value {
    border-color: rgba($c-orange, 0.2);
    text-align: center;
    font-size: 1.2rem;
    font-weight: $fw-bold;
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.cta__box-button--spacing {
  margin-left: 1rem;
}
</style>
