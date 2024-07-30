<template lang="">
  <button
    @click="clearField()"
    :class="['c-clear', { '-transparent': transparent }]"
  >
    limpar busca
  </button>
</template>

<script setup>
defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
});
const searchText = defineModel();

function clearField() {
  searchText.value = "";
}
</script>

<style lang="scss">
.c-clear {
  width: 140px;
  height: 48px;
  background-color: var(--color-highlight);
  font-family: var(--font-family);
  color: var(--color-white);
  font-size: 16px;
  line-height: 18.75px;
  border: none;
  border-radius: 3px;

  &.-transparent {
    color: var(--color-highlight);
    background: transparent;
    border: none;
    padding: 0 0 0 10px;
    width: max-content;
    text-align: center;
  }
}
</style>
