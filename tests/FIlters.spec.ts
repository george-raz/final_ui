import { test, expect } from "@playwright/test"
import HomePage from "../pages/home.page";

test.describe("", () => {
  let home: any;
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page) as HomePage;
    await home.open();
  })

  test("Search for an existing game by full match in 'Games' filter", async ({ page }) => {
    const expected = "Skyrim Special Edition";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(home.filterGames);
    await home.fillInput(home.inputFilterGames, "Skyrim Special Edition");
    expect(await home.OptionFilterGameSingleRes.textContent()).toBe(expected)
  })

  test("Check that 'Games' filter's input is case insensitive", async ({ page }) => {
    const expected = "Skyrim Special Edition";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(home.filterGames);
    await home.fillInput(home.inputFilterGames, "skyriM speciaL edition");
    expect(await home.OptionFilterGameSingleRes.textContent()).toBe(expected)
  })

  test("Search for an existing game by partial match in 'Games' filter", async ({ page }) => {
    const expected = "Skyrim Special Edition";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(home.filterGames);
    await home.fillInput(home.inputFilterGames, "yrim special edi");
    expect(await home.OptionFilterGameSingleRes.textContent()).toBe(expected)
  })

  test("Search for non-existing game in 'Games' filter", async ({ page }) => {
    const expected = "No results found";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(home.filterGames);
    await home.fillInput(home.inputFilterGames, "qwerty123");
    expect(await home.OptionFilterGameSingleRes.textContent()).toBe(expected)
  })

  test("Check that a game's mod page can be opened from 'Games' filter", async ({ page }) => {
    const expected = "https://www.nexusmods.com/skyrimspecialedition/mods/";
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(home.filterGames);
    await home.fillInput(home.inputFilterGames, "Skyrim Special Edition");
    await home.clickElem(home.OptionFilterGameSingleRes);
    await expect(page).toHaveURL(expected)
  })
  
})