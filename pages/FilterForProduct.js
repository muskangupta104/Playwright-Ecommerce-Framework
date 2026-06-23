class FilterForProducts {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator(".product_sort_container");
    this.activeOption = page.locator(".active_option");
  }

  async selectName() {
    await this.sortDropdown.selectOption("za");
  }
}

module.exports = FilterForProducts;