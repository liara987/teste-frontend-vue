<template>
  <vHeader />
  <vSearchBar />
  <div class="l-container">
    <h1 class="l-title">ué, não encontramos nadinha</h1>
    <h2 class="l-subtitle">que tal recomeçar do começo?</h2>
    <router-link to="/busca">
      <vClearSearch />
    </router-link>
    <figure class="l-figure">
      <BlankSlate class="l-svg" />
    </figure>
  </div>
</template>

<script setup>
import BlankSlate from "../assets/blank-slate.svg";
import vClearSearch from "@/components/clear-search.vue";
import vHeader from "@/components/header.vue";
import vSearchBar from "@/components/search-bar.vue";
</script>

<style scoped lang="scss">
$layout-breakpoint-tablet: 728px;

.l-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 20px;

  .l-title,
  .l-subtitle {
    font-family: var(--font-family);
    color: var(--color-text-3);
    margin: 0;
    text-align: left;
  }

  .l-title {
    font-size: 32px;
    line-height: 37.5px;
    margin: 38px 0 22px;
    font-weight: var(--font-weight-extra-bold);
  }

  .l-subtitle {
    font-size: 18px;
    line-height: 21.09px;
    margin-bottom: 43px;
    font-weight: var(--font-weight-light);
  }

  .l-figure {
    display: flex;
    justify-content: left;
    width: 100vw;
    margin: 0;
    position: relative;
    .l-svg {
      position: absolute;
      right: 10px;
    }
  }

  @media (min-width: $layout-breakpoint-tablet) {
    align-items: center;
    padding: 0 52px;
    .l-figure {
      justify-content: center;

      .l-svg {
        position: relative;
      }
    }
  }
}
</style>
