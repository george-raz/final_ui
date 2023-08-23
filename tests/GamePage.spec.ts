import { test, expect } from "@playwright/test"
import HomePage from "../pages/home.page";

test.describe("", () => {
  let home: any;
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page) as HomePage;
    await home.open();
  })

  test("Download a mod being unauthorized", async ({ page }) => {
    const expected = "You must be logged in to download files. Log in here."
    await home.clickElem(home.inputSearch);
    await home.clickElem(home.btnSearch);
    await home.clickElem(page.getByRole('link', { name: "SkyUI" }).first())
    await home.clickElem(home.tabFiles);
    await home.clickElem(home.btnDownloadManually);
    await home.clickElem(home.btnDownloadManuallyConfirm);
    expect(await home.messageCantDownload.textContent()).toBe(expected);
  })
})