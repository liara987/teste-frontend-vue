<template lang="">
  <div class="c-header">
    <a href="https://www.enjoei.com.br/">
      <img class="c-header__logo" src="../assets/enjoei-logo.svg" />
    </a>
  </div>
</template>

<style lang="scss">
$layout-breakpoint-desktop: 1024px;

.c-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid;
  border-color: var(--color-border);
  margin-bottom: 20px;

  &__logo {
    width: 30px;
    height: 30px;
  }

  @media (min-width: $layout-breakpoint-desktop) {
    height: 70px;
    margin-bottom: 24px;
  }
}
</style>
