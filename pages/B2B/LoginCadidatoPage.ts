import { Page, expect } from '@playwright/test';

export class LoginCandidatoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
   
  }

  async loginCandidatos() {
  
    await this.page.bringToFront();
    const url = process.env.URLCANDIDATOS ?? '';
    await this.page.goto(url);
    await this.page.getByRole('textbox', { name: 'Escribe tu correo electrónico' }).click();
    await this.page.getByRole('textbox', { name: 'Escribe tu correo electrónico' }).fill('fabianrestrepotest@yopmail.com');
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").click();
   
    const newTab = await this.page.context().newPage();
    await newTab.goto('https://yopmail.com/');
    await newTab.locator('#login').fill('fabianrestrepotest@yopmail.com');
    await newTab.locator('#refreshbut').click();

    await this.page.bringToFront();
    //await this.page.getByRole('textbox', { name: 'Escribe tu contraseña' }).fill('res123');
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").scrollIntoViewIfNeeded();
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").click();
    
  }
}