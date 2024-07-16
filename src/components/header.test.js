import { shallowMount } from '@vue/test-utils'
import vContainer from '@/components/container.vue'

describe('Container', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vContainer)
    expect(wrapper.vm).toBeTruthy()
  })
})
