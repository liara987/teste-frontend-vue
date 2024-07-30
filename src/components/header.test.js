import { shallowMount } from "@vue/test-utils";
import vHeader from "@/components/header.vue";

describe("Componente: Header", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
