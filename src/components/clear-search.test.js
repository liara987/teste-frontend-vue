import { shallowMount, mount } from "@vue/test-utils";
import vClearSearch from "@/components/clear-search.vue";

describe("Componente: ClearSearch", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vClearSearch);
    expect(wrapper.vm).toBeTruthy();
  });

  it("toggle class according to prop transparent", () => {
    const withTransparentClass = "-transparent";

    let wrapper = shallowMount(vClearSearch);
    wrapper = shallowMount(vClearSearch);
    expect(wrapper.classes()).not.toContain(withTransparentClass);

    wrapper = shallowMount(vClearSearch, { propsData: { transparent: true } });
    expect(wrapper.classes()).toContain(withTransparentClass);
  });

  it("clear search", async () => {
    const wrapper = mount(vClearSearch, {
      propsData: {
        searchText: "initialText",
        'onUpdate:searchText': (e) => wrapper.setProps({ modelValue: e })
      },
    });
    await wrapper.find("button").trigger("click");
    // expect searchText to be empty
  });
});
