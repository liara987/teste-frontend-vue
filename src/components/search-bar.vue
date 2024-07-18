<template>
  <div class="c-search-bar">
    <input
      placeholder="buscar"
      type="text"
      name=""
      v-model="searchText"
      class="c-search-bar__input"
    />
    <vClearSearch
      v-if="searchText"
      :transparent="true"
      v-model="searchText"
    />
  </div>
</template>

<script setup>
import vClearSearch from "@/components/clear-search.vue";
import { ref, watchEffect } from "vue";
import { getProducts } from "../tools/get-products";

const searchText = defineModel();
const products = ref([]);

function fetchData(text) {
  if (text !== "") {
    getProducts()
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Algo deu errado");
      })
      .then((data) => {
        products.value = data.products.filter((item) =>
          item.title.includes(text)
        );
      })
      .catch((err) => console.error(err));
  }
}

watchEffect(() => {
  fetchData(searchText.value);
});
</script>

<style lang="scss">
$layout-breakpoint-desktop: 1024px;

.c-search-bar {
  display: flex;
  align-items: center;
  margin: 0 20px;

  &__input {
    position: relative;
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 13px 12px;
    height: 42px;
    background: url("@/assets/search-icon.svg?url") no-repeat bottom 9px right
      12px;
    background-size: 24px;

    &::placeholder {
      font-family: var(--font-family);
      font-size: 16px;
      line-height: 18.75px;
      color: var(--color-text-1);
      font-weight: var(--font-weight-extra-bold);
    }

    &:focus {
      font-family: var(--font-family);
      font-size: 16px;
      line-height: 18.75px;
      outline: none !important;
    }
  }

  @media (min-width: $layout-breakpoint-desktop) {
    margin: 0 52px 16px;
    justify-content: flex-end;

    &__input {
      max-width: 240px;
    }
  }
}
</style>
