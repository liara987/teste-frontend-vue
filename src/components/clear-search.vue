<template lang="">
  <div>
    <router-link :to="props.url">
      <button class="l-clear-search">limpar busca</button>
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  }
});
</script>
<style lang="scss">
  .l-clear-search {
    width: 140px;
    height: 48px;
    background-color: var(--color-highlight);
    font-family: var(--font-family);
    color: var(--color-white);
    font-size: 16px;
    line-height: 18.75px;
    border: none;
    border-radius: 3px;
    margin-bottom: 60px;
  }
</style>
