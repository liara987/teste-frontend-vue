import { shallowMount } from "@vue/test-utils";
import vLoading from "@/components/loading.vue";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
  })),
});

describe("Componente: Loading", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vLoading);
    expect(wrapper.vm).toBeTruthy();
  });
});
