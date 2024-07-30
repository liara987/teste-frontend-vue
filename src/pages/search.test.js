import { shallowMount } from "@vue/test-utils";
import vSearch from "@/pages/search.vue";
import { beforeEach } from "vitest";

describe("Page: Search", () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue("123");
  });

  it("mounts", async () => {
    const wrapper = shallowMount(vSearch);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm).toBeTruthy();
  });

  it("requests products from the API", async () => {
    const wrapper = shallowMount(vSearch);
    await wrapper.vm.$nextTick();
    expect(fetch).toHaveBeenCalledWith(
      "https://www.enjoei.com.br/api/v5/users/enjoei-pro/products/liked?page=1"
    );
  });
});
