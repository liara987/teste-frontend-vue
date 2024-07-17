<template>
  <div class="c-search-bar">
    <input
      placeholder="buscar"
      type="text"
      name=""
      class="c-search-bar__input"
    />
  </div>
</template>
<style lang="scss">
$layout-breakpoint-desktop: 1024px;

.c-search-bar {
  display: flex;
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
