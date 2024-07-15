import { shallowMount } from '@vue/test-utils'
import vSearch from '@/pages/search.vue'

global.fetch = vi.fn()

describe('Search', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vSearch)
    expect(wrapper.vm).toBeTruthy()
  })

  it('requests products from the API', () => {
    expect(fetch).toHaveBeenCalledWith('/api/v5/users/enjoei-pro/products/liked?page=1&query=camisa')
  })
})
