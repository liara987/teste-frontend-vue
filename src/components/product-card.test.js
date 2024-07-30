import { shallowMount } from "@vue/test-utils";
import vProductCard from "@/components/product-card.vue";

describe("Componente: ProductCard", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vProductCard, {
      propsData: {
        imageId: "",
        title: "",
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
