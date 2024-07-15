import { createRouter, createWebHistory } from 'vue-router'
import vInstructions from '@/pages/instructions.vue'
import vSearch from '@/pages/search.vue'

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: vInstructions
  },
  {
    path: '/busca',
    name: 'Search',
    component: vSearch,
    meta: {
      seoTitle: 'Instruções'
    }
  }
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
