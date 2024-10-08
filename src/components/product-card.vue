<template>
  <div class="c-product-card">
    <img class="c-product-card__image" :src="imageUrl" />
    <span class="c-product-card__percentage" v-if="sale">
      <em> {{ salePercentage }}% off </em>
    </span>
    <span class="c-product-card__price" v-if="sale">
      <em>R$ {{ sale }}</em> <del>R$ {{ price }}</del>
    </span>
    <span class="c-product-card__price" v-else> R$ {{ price }} </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

const props = defineProps({
  imageId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sale: {
    type: Number,
    required: false,
  },
});

const imageUrl = computed(() =>
  getImageUrl(props.imageId, IMAGE_PRESETS.product.card)
);
const salePercentage = discountCalculator(props.sale, props.price);

function discountCalculator(sale, price) {
  const discount = price - sale;
  return computed(() => Math.round((discount / price) * 100));
}
</script>

<style scoped lang="scss">
$layout-breakpoint-mobile: 375px;

.c-product-card {
  width: 100%;
  position: relative;

  &__image {
    width: 180px;
    height: 180px;
    border-radius: 3px;
  }

  &__percentage {
    position: absolute;
    right: 2px;
    top: 2px;
    padding: 6px 5px 4px 5px;
    border-radius: 2px;
    background-color: var(--color-highlight);

    em {
      color: var(--color-white);
      font-family: var(--font-family);
      font-style: normal;
      font-size: 12px;
      line-height: 14.06px;
    }
  }

  &__price {
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: max-content;
    padding: 6px 5px 4px 5px;
    border-radius: 2px;
    background-color: var(--color-white);
    color: var(--color-gray-5);

    font-size: 12px;
    font-weight: var(--font-weight-semi-bold);
    font-family: var(--font-family);
    line-height: 12px;

    em {
      color: var(--color-highlight);
      font-style: normal;
    }

    del {
      font-weight: var(--font-weight-regular);
      color: var(--color-gray-4);
    }
  }

  @media (min-width: $layout-breakpoint-mobile) {
    &__image {
      border-radius: 2px;
      width: 216px;
      height: 216px;
    }
  }
}
</style>
