import { shallowMount } from "@vue/test-utils";
import vProductNotFound from "@/pages/product-not-found.vue";

describe("Page: ProductNotFound", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vProductNotFound);
    expect(wrapper.vm).toBeTruthy();
  });
});
