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
    await this.page.waitForTimeout(2000);
    await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("//div[@class='otp-method-list__item--title']").nth(1).click();

    
    const newTab = await this.page.context().newPage();
    await newTab.goto('https://yopmail.com/');
    await newTab.locator('#login').fill('fabianrestrepotest@yopmail.com');
    await newTab.locator('#login').press('Enter');
    await newTab.waitForTimeout(15000);
    //await this.page.locator("//button[@id='refresh']").click();
    //await this.page.locator("button[@class='md but textu f36'").click();
    await newTab.reload();
    await newTab.locator('#refreshbut').click();
    await this.page.locator("//td[@style='border-collapse: separate; border-spacing: 0; background-color: rgba(255, 255, 254, 1); border: 1px solid rgba(207, 207, 222, 1); border-radius: 10px; vertical-align: middle; padding: 12px 0 12px 12px']").click();
    const otp=this.page.locator("//td[@style='border-collapse: separate; border-spacing: 0; background-color: rgba(255, 255, 254, 1); border: 1px solid rgba(207, 207, 222, 1); border-radius: 10px; vertical-align: middle; padding: 12px 0 12px 12px']").textContent();
    

    await this.page.bringToFront();
    //await this.page.getByRole('textbox', { name: 'Escribe tu contraseña' }).fill('res123');
    await newTab.locator("input[@class='verification-code-input__item'][1]").fill(otp.toString());
    //await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").scrollIntoViewIfNeeded();
    //await this.page.locator("//*[@class='ant-btn ant-btn-primary card__container__button--primary card__container__button--primary--soft']").click();
    
  }
}