import { expect, LocatorScreenshotOptions, type Locator, type Page } from '@playwright/test';
import BasePage from "./base.page.js";

export default class HomePage extends BasePage {
  public readonly url: string = "https://www.nexusmods.com/";
  inputSearch: Locator;
  inputFilterGames: Locator;
  btnSearch: Locator;
  btnDownloadManually:Locator;
  btnSearchCategories: Locator;
  OptionSearchCategoriesMods: Locator;
  OptionSearchCategoriesGames: Locator;
  OptionSearchCategoriesImages: Locator;
  OptionSearchCategoriesVideos: Locator;
  OptionSearchCategoriesAuthors: Locator;
  OptionFilterGameSingleRes: Locator;
  tabFiles: Locator;
  btnDownloadManuallyConfirm: Locator;
  filterGames:Locator;
  messageCantDownload: Locator;
  messageNoGames: Locator;
  modSkyUi: Locator;
  
  constructor(page: Page) {
    super(page)
    this.inputSearch = page.locator("//input[@id='gsearch']");
    this.inputFilterGames = page.locator('input[type="search"]').first()

    this.btnSearch = page.locator("//button[@class='search-button']")
    this.btnSearchCategories = page.locator("//button[@class='rj-search-category-dropdown-toggle']")
    this.btnDownloadManually = page.getByRole('link', { name: 'Manual' });
    this.btnDownloadManuallyConfirm = page.locator(`//a[@class="btn"]`, {hasText:/Download/});

    this.filterGames = page.getByLabel('', { exact: true });
    
    this.OptionSearchCategoriesMods = page.locator(`//ul[@class="rj-search-category-dropdown"]`).locator('li',{hasText: "Mods"});
    this.OptionSearchCategoriesGames = page.locator(`//ul[@class="rj-search-category-dropdown"]`).locator('li',{hasText: "Games"});
    this.OptionSearchCategoriesImages = page.locator(`//ul[@class="rj-search-category-dropdown"]`).locator('li',{hasText: "Images"});
    this.OptionSearchCategoriesVideos = page.locator(`//ul[@class="rj-search-category-dropdown"]`).locator('li',{hasText: "Videos"});
    this.OptionSearchCategoriesAuthors = page.locator(`//ul[@class="rj-search-category-dropdown"]`).locator('li',{hasText: "Users"});
    this.OptionFilterGameSingleRes = page.getByRole("treeitem");

    this.tabFiles = page.getByRole('link', { name: 'Files 1' });

    this.modSkyUi = page.getByRole('link', { name: "SkyUI" }).first();

    this.messageCantDownload = page.locator(`//td//*[contains(text(),'You must be logged in to download files. ')]`);
    this.messageNoGames = page.locator(`//div[@class="tabcontent"]//div[@class="game-section"]`);
  }

  async open() {
    return await super.open(this.url)
  }
}