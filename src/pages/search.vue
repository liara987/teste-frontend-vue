<template>
  <div>
    <vHeader />
    <vSearchBar v-model="searchText" />
    <vContainer :gutter="true">
      <section class="loading" v-if="loading">
        <vLoading />
      </section>

      <section class="products" v-else>
        <ul class="products__list">
          <li v-for="product in products">
            <a
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
          </li>
        </ul>
      </section>

      <footer class="pagination" v-if="products.length > 0">
        <vPagination v-model="pageNumber" />
      </footer>
    </vContainer>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { getProducts } from "../tools/get-products";
import vHeader from "@/components/header.vue";
import vSearchBar from "@/components/search-bar.vue";
import vContainer from "@/components/container.vue";
import vProductCard from "@/components/product-card.vue";
import vPagination from "@/components/pagination.vue";
import vLoading from "@/components/loading.vue";

const router = useRouter();
const products = ref([]);
const pageNumber = ref(1);
const searchText = ref("");
const loading = ref(false);

function fetchData(text) {
  getProducts(pageNumber.value)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Algo deu errado");
    })
    .then((data) => {
      if (text !== "") {
        products.value = data.products.filter((item) =>
          item.title.includes(text)
        );
        if (products.value.length === 0) {
          router.push("/produto-nao-encontrado");
        }
      } else {
        products.value = data.products;
      }
    })
    .catch((err) => console.error(err))
    .finally(() => (loading.value = false));
}

watchEffect(() => {
  loading.value = true;
  fetchData(searchText.value);
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
  display: flex;
  justify-content: center;
  width: 100%;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 10px;
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
    width: fit-content;

    @media (min-width: $layout-breakpoint-tablet) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: $layout-breakpoint-desktop) {
      margin-top: 24px;
      grid-template-columns: repeat(5, 1fr);
      gap: 24px;
    }
  }
}
</style>
