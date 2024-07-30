import { shallowMount } from "@vue/test-utils";
import vPagination from "@/components/pagination.vue";

describe("Componente: Pagination", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vPagination);
    expect(wrapper.vm).toBeTruthy();
  });
});
