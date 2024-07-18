<template>
  <div class="c-loading">
    <div
      class="c-loading__item"
      v-for="index in totalItems.value"
      :key="index"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";

const totalItems = ref(6);

function isDesktop() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

onBeforeMount(() => {
  totalItems.value = computed(() => {
    return isDesktop() ? 28 : 6;
  });
});
</script>

<style lang="scss">
.c-loading {
  $layout-breakpoint-tablet: 728px;
  $layout-breakpoint-desktop: 1024px;

  display: grid;
  grid-template-columns: repeat(2, 163px);
  justify-content: center;
  gap: 10px;

  &__item {
    width: 163px;
    height: 163px;
    background-color: var(--color-placeholder);
    border-radius: 3px;
    background: linear-gradient(
        90deg,
        var(--color-placeholder) 40%,
        var(--color-gray-2),
        var(--color-placeholder) 60%
      )
      right / 300% 100%;
    animation: skeleton-loading 1.5s linear infinite;

    @keyframes skeleton-loading {
      to {
        background-position: left;
      }
    }
  }

  @media (min-width: $layout-breakpoint-tablet) {
    grid-template-columns: repeat(4, 163px);
  }

  @media (min-width: $layout-breakpoint-desktop) {
    grid-template-columns: repeat(5, 216px);
    gap: 24px;
    &__item {
      width: 216px;
      height: 216px;
    }
  }
}
</style>
