import { expect, type Locator, type Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async open(path: string) {
    await this.page.goto(path);
  }
  async fillInput(locator: Locator, value: string) {
    await locator.type(`${value}`)
  }
  async clickElem(locator: Locator) {
    await locator.click()
  }
  async refresh() {
    await this.page.reload();
  }
}