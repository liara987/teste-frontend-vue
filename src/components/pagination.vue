<template>
  <div class="c-pagination">
    <button class="c-pagination__prev" @click="prev()">
      <LeftArrow class="arrow" /> anterior
    </button>
    <button class="c-pagination__next" @click="next()">
      próxima <RightArrow class="arrow" />
    </button>
  </div>
</template>

<script setup>
import LeftArrow from "../assets/arrow-left-icon.svg";
import RightArrow from "../assets/arrow-right-icon.svg";

const page = defineModel();
function next() {
  page.value++;
}

function prev() {
  if (page.value > 1) {
    page.value--;
  }
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

  &__prev {
    color: var(--color-text-1);
  }

  &__next {
    color: var(--color-highlight);
  }

  @media (min-width: $layout-breakpoint-desktop) {
    width: 289px;
  }
}
</style>
