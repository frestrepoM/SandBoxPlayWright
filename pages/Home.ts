import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async MenuBurguer(){

    await this.page.locator("//button[@class='mg_main_button_MainButtonComponent_lh5z0 undefined ']").click();
    await this.page.locator("(//*[@title='Vacantes'])[2]").click();

  }

    async VacantesHome(){

        await this.page.getByText("Ver vacantes").click();
    }

    async validatePublishedLabel() {

      await expect(this.page.locator('//div[@id="rc-tabs-0-tab-1"]')).toBeVisible({ timeout: 10000 });
      }

    async validateTitleName() {
      await expect(this.page.locator("//strong[text()='Angel']")).toBeVisible({timeout:10000});
  }

}