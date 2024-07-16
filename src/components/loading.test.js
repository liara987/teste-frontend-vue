import { shallowMount } from '@vue/test-utils'
import vLoading from '@/components/loading.vue'

describe('Loading', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vLoading)
    expect(wrapper.vm).toBeTruthy()
  })
})
