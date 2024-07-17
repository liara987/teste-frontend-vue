<template>
  <div>
    <vContainer :gutter="true">
      <section class="loading" v-if="loading">
        <vLoading />
      </section>

      <section class="products" v-else>
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
          />
        </a>
      </section>

      <footer class="pagination" v-if="products.length > 0">
        <vPagination v-model="pageNumber" />
      </footer>
    </vContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { getProducts } from "../tools/get-products";
import vContainer from "@/components/container.vue";
import vProductCard from "@/components/product-card.vue";
import vPagination from "@/components/pagination.vue";
import vLoading from "@/components/loading.vue";

const products = ref([]);
const pageNumber = ref(1);
const loading = ref(false);

onMounted(() => {
  const fetchData = () => {
    getProducts(pageNumber.value)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Algo deu errado");
      })
      .then((data) => (products.value = data.products))
      .catch((err) => console.error(err))
      .finally(() => (loading.value = false));
  };

  watchEffect(() => {
    loading.value = true;
    fetchData();
  });
});
</script>

<style lang="scss">
$layout-breakpoint-tablet: 728px;
$layout-breakpoint-desktop: 1024px;

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

.products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    @media (min-width: $layout-breakpoint-tablet) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: $layout-breakpoint-desktop) {
      margin-top: 24px;
      grid-template-columns: repeat(5, 1fr);
      gap: 24px;
    }
}
</style>
