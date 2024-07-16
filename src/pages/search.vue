<template>
  <div>
    <vHeader></vHeader>

    <vContainer :gutter="true">
      <vLoading v-if="products.values.length > 0"></vLoading>
      <!-- <section class="product-search">
        <strong
          class="c-product-search__result-count"
          v-if="products.lenght > 0"
        >
          {{ products.lenght }} produtos encontrados</strong
        >
      </section> -->
      <section class="product-list">
        <a
          v-for="product in products"
          :key="product.id"
          :href="`https://www.enjoei.com.br/p/${product.slug}-${product.id}`"
        >
          <vProductCard
            :imageId="product.image_public_id"
            :price="product.price.listed"
            :sale="product.price.sale"
            :title="product.title"
            path=""
          >
          </vProductCard>
        </a>
      </section>

      <section class="pagination" v-if="products.values.length > 0">
        <vPagination></vPagination>
      </section>
    </vContainer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "../tools/get-products";
import vContainer from "@/components/container.vue";
import vProductCard from "@/components/product-card.vue";
import vPagination from "@/components/pagination.vue";

import vHeader from "@/components/header.vue";
import vLoading from "@/components/loading.vue";

const products = ref([]);

onMounted(() => {
  getProducts()
    .then((res) => res.json())
    .then((data) => (products.value = data.products));
});
</script>

<style lang="scss">
$layout-breakpoint-tablet: 728px;
$layout-breakpoint-desktop: 1024px;

.product-search {
  display: flex;
  margin: 20px 0;

  @media (min-width: $layout-breakpoint-desktop) {
    margin: 24px 0;

    &__result-count {
      font-family: var(--font-family);
      font-size: 14px;
      line-height: 16.41px;
      color: var(--color-text-3);
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 182px;

  @media (min-width: $layout-breakpoint-desktop) {
    margin-top: 40px;
    margin-bottom: 146px;
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 163px);
  justify-content: center;
  gap: 10px;

  @media (min-width: $layout-breakpoint-tablet) {
    grid-template-columns: repeat(4, 163px);
  }

  @media (min-width: $layout-breakpoint-desktop) {
    grid-template-columns: repeat(5, 216px);
    gap: 24px;
  }
}
</style>
