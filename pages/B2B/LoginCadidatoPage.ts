import { Page, expect } from '@playwright/test';

export class LoginCandidatoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginCandidatos() {
    const url = process.env.URLCANDIDATOS ?? '';
    await this.page.goto(url);
    await this.page.getByRole('textbox', { name: 'Escribe tu email' }).click();
    await this.page.getByRole('textbox', { name: 'Escribe tu email' }).fill('fabianrestrepotest@yopmail.com');
    await this.page.getByRole('textbox', { name: 'Escribe tu contraseña' }).fill('res123');
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").scrollIntoViewIfNeeded();
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").click();
    
  }
}