<template>
  <a
    class="c-product-card"
    :href="href"
  >
    <img
      class="c-product-card__image"
      :src="imageUrl"
    />
  </a>
</template>

<script setup>
  import { computed } from 'vue'
  import { getImageUrl, IMAGE_PRESETS } from '@/tools/get-image-url'

  const props = defineProps({
    imageId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  })

  const imageUrl = computed(() => getImageUrl(props.imageId, IMAGE_PRESETS.product.card))
  const href = computed(() => `https://www.enjoei.com.br/p/${props.path}`)
</script>

<style scoped lang="scss">
  .c-product-card {
    display: block;
  }
</style>
