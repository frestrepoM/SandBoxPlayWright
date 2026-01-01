// login.page.ts

import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    const url = process.env.URL ?? '';
    await this.page.goto(url);
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('textbox', { name: 'Escribe tu email' }).fill(email);
    await this.page.getByRole('button', { name: 'Continuar' }).click();
    await this.page.waitForTimeout(1500);
    await this.page.getByRole('textbox', { name: 'Escribe tu contraseña' }).fill(password);
    await this.page.getByRole('button', { name: 'Continuar' }).click();
    await this.page.waitForTimeout(1500);
  }

  async loginIncorrecto(email: string) {

    const url = process.env.URL ?? '';

    await this.page.goto(url);
    await this.page.waitForTimeout(1500);
    await this.page.getByRole('textbox', { name: 'Escribe tu email' }).fill(email);
    //await this.page.getByRole('button', { name: 'Continuar' }).click();

  }

  async expectEmailError() {
    await expect(
      this.page.locator("//div[text()='Email no es válido']")
    ).toBeVisible();
  }

  async expectPasswordError() {
    await expect(
      this.page.locator("//div[text()='La cuenta o contraseña con que intenta acceder son incorrectos, intente de nuevo.']")
    ).toBeVisible();
  }

  async ContrseñaIncorrecto(email: string, password: string) {

    const url = process.env.URL ?? '';

    await this.page.goto(url);
    await this.page.waitForTimeout(1500);
    await this.page.getByRole('textbox', { name: 'Escribe tu email' }).fill(email);
    await this.page.getByRole('button', { name: 'Continuar' }).click();
    await this.page.waitForTimeout(1500);
    await this.page.getByRole('textbox', { name: 'Escribe tu contraseña' }).fill(password);
    await this.page.getByRole('button', { name: 'Continuar' }).click();


  }



}