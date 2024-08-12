<template>
  <div class="c-pagination">
    <button class="c-pagination__prev" @click="prev()" :disabled="prevDisable">
      <LeftArrow class="arrow" /> anterior
    </button>
    <button class="c-pagination__next" @click="next()" :disabled="nextDisable">
      próxima <RightArrow class="arrow" />
    </button>
  </div>
</template>

<script setup>
import LeftArrow from "../assets/arrow-left-icon.svg";
import RightArrow from "../assets/arrow-right-icon.svg";
import { getProducts } from "../tools/get-products";
import { ref } from "vue";

const page = defineModel();
const prevDisable = ref(true);
const nextDisable = ref(false);

function next() {
  getProducts(page.value)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Algo deu errado");
    })
    .then((data) => {
      console.log("next", data);
      if (data.pagination.next_page > 1) {
        prevDisable.value = false;
      }

      if (data.pagination.next_page !== null) {
        page.value = data.pagination.next_page;
        nextDisable.value = false;
      } else {
        nextDisable.value = true;
      }
    })
    .catch((err) => console.error(err));
}

function prev() {
  getProducts(page.value)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Algo deu errado");
    })
    .then((data) => {
      console.log("prev", data);
      if (data.pagination.current_page === 22) {
        nextDisable.value = false;
      }

      if (data.pagination.prev_page !== null) {
        page.value = data.pagination.prev_page;
        prevDisable.value = false;
      } else {
        prevDisable.value = true;
      }
    })
    .catch((err) => console.error(err));
}
</script>

<style lang="scss">
$layout-breakpoint-desktop: 1024px;

.c-pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    font-size: 16px;
    line-height: 18.75px;
    background-color: var(--color-white);
    padding: 16px 24px;
    border: 1px solid var(--color-border);

    .arrow {
      width: 18px;
      height: 12px;
      color: initial;
    }
  }

  &__prev,
  &__next {
    color: var(--color-highlight);

    &:disabled {
      color: var(--color-text-1);
    }
  }

  @media (min-width: $layout-breakpoint-desktop) {
    width: 289px;
  }
}
</style>
