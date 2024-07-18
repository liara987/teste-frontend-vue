<template lang="">
  <div>
    <button
      @click="clearField()"
      :class="props.transparent ? 'c-clear__transparent' : 'c-clear'"
    >
      limpar busca
    </button>
  </div>
</template>

<script setup>
const searchText = defineModel();
const props = defineProps({
  transparent: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

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
  margin-bottom: 60px;

  &__transparent {
    color: var(--color-highlight);
    background: transparent;
    border: none;
    padding: 0 0 0 10px;
    width: max-content;
    text-align: center;
  }
}
</style>
