<template>
  <div>
    <vContainer :gutter="false">
      header
    </vContainer>

    <vContainer :gutter="true">
      <a
        v-for="product in products"
        :key="product.id"
        :href="`https://www.enjoei.com.br/p/${product.slug}-${product.id}`"
      >
        {{ product.title.name }}
      </a>
    </vContainer>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import vContainer from '@/components/container.vue'

  const products = ref([])

  onMounted(() => {
    fetch('/api/v5/users/enjoei-pro/products/liked?page=1&query=camisa')
  })
</script>
