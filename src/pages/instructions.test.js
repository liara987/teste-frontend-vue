import { RouterLink } from 'vue-router'
import { router } from '@/router'
import { shallowMount } from '@vue/test-utils'
import vInstructions from '@/pages/instructions.vue'

describe('Instructions', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vInstructions, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('renders relevant text', () => {
    const wrapper = shallowMount(vInstructions, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('instruções')
  })

  it('links to search page', () => {
    const wrapper = shallowMount(vInstructions, {
      global: {
        plugins: [router]
      }
    })
    const link = wrapper.findComponent(RouterLink)

    expect(link.attributes().to).toBe('/busca')
  })
})
