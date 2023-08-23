import { test, expect } from "@playwright/test"
import HomePage from "../pages/home.page";

test.describe("", () => {
  let home: any;
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page) as HomePage;
    await home.open();
  })

  test("Global search categories options are available", async ({ page }) => {
    const expected = 'rj-search-category-option category-selected'
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearchCategories);
    expect(await home.OptionSearchCategoriesMods).toBeVisible();
    expect(await home.OptionSearchCategoriesGames).toBeVisible();
    expect(await home.OptionSearchCategoriesImages).toBeVisible();
    expect(await home.OptionSearchCategoriesVideos).toBeVisible();
    expect(await home.OptionSearchCategoriesAuthors).toBeVisible();

    expect(await home.OptionSearchCategoriesMods.getAttribute("class")).toBe(expected);

    await home.clickElem(home.OptionSearchCategoriesGames);
    expect(await home.OptionSearchCategoriesGames.getAttribute("class")).toBe(expected)

    await home.clickElem(home.btnSearchCategories);
    await home.clickElem(home.OptionSearchCategoriesImages);
    expect(await home.OptionSearchCategoriesImages.getAttribute("class")).toBe(expected)

    await home.clickElem(home.btnSearchCategories);
    await home.clickElem(home.OptionSearchCategoriesVideos);
    expect(await home.OptionSearchCategoriesVideos.getAttribute("class")).toBe(expected)

    await home.clickElem(home.btnSearchCategories);
    await home.clickElem(home.OptionSearchCategoriesAuthors);
    expect(await home.OptionSearchCategoriesAuthors.getAttribute("class")).toBe(expected)
  })

  test("Search for an item with related category selected", async ({ page }) => {
    const expected = "SkyUI";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearchCategories);
    await home.clickElem(home.OptionSearchCategoriesMods);
    await home.fillInput(home.inputSearch, "SkyUI")
    await home.clickElem(home.btnSearch);
    expect(await home.modSkyUi.textContent()).toBe(expected);
  })

  test("Check search results with non-existing item", async ({ page }) => {
    const expected = /No games/;
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearchCategories);
    await home.clickElem(home.OptionSearchCategoriesGames);
    await home.fillInput(home.inputSearch, "SkyUI")
    await home.clickElem(home.btnSearch);
    expect(await home.messageNoGames.textContent()).toMatch(expected);
  })
})