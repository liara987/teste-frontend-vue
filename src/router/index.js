import { createRouter, createWebHistory } from 'vue-router'
import vSearch from '@/pages/search.vue'
import vProductNotFound from '@/pages/product-not-found.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: to => {
      return 'busca'
    },
  },
  {
    path: '/busca',
    name: 'Search',
    component: vSearch,
    meta: {
      seoTitle: 'Busca de produtos'
    }
  },
  {
    path: '/produto-nao-encontrado',
    name: 'ProductNotFound',
    component: vProductNotFound,
    meta: {
      seoTitle: 'Produto não encontrado'
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  let pageTitle = 'Enjoei'

  if (to.meta.seoTitle) {
    pageTitle = `${to.meta.seoTitle} - ${pageTitle}`
  }

  document.title = pageTitle

  next()
})
