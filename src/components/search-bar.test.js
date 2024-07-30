import { shallowMount } from "@vue/test-utils";
import vSearchBar from "@/components/search-bar.vue";

describe("Componente: SearchBar", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vSearchBar);
    expect(wrapper.vm).toBeTruthy();
  });
});
