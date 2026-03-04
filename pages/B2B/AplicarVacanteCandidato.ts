import { expect, Page } from '@playwright/test';

export class BuscarEmpleoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async buscarVacante(nombreVacante: string) {

    await this.page.locator("(//*[@class='mg_input_magneto-ui-input--container_input_tifvx'])[2]").click();
    await this.page.locator("(//*[@class='mg_input_magneto-ui-input--container_input_tifvx'])[2]").fill(nombreVacante);
    await this.page.getByRole('textbox').first().press('Enter');
    await this.page.waitForTimeout(1000);


  }

  async buscarVacanteDesdeElPerfil(nombreVacante: string) {

    await this.page.locator("//*[@placeholder='Busca empleo por cargo o profesión']").click();
    await this.page.locator("//*[@placeholder='Busca empleo por cargo o profesión']").fill(nombreVacante);
    await this.page.locator('form').locator('button[type="submit"]').click();
    //await this.page.locator("//button[@class='mg_main_button_MainButtonComponent_lh5z0 undefined ']").first().press('Enter');
    await this.page.waitForTimeout(1000);


  }

  async aplicarVacante() {
    // Click en aplicar
    const card = this.page.locator('article').filter({
      has: this.page.locator('h2', { hasText: 'auxiliar de bodegaa' }),
      hasNot: this.page.locator('h2', { hasText: 'COMFAMA' })}).first();
      await card.scrollIntoViewIfNeeded();
      await card.first().click();
      await this.page.waitForTimeout(1500);
      const botonAplicar = this.page.getByRole('button', { name: /aplicar/i }).first();
      await botonAplicar.first().click();
      //await expect(botonAplicar).toBeDisabled();
      await expect(this.page.getByText('¡Ya aplicaste!').first()).toBeVisible({ timeout: 15000 });
      
    // Cerrar confirmación
    //await this.page.getByRole('button', { name: 'Cerrar' }).click();
  }

  async aplicarVacanteYNoCerrar() {
    // Click en aplicar

    const card = this.page.locator('article').filter({
      has: this.page.locator('h2', { hasText: 'Test SPE QA AUTOMATIZACION' }),
      hasNot: this.page.locator('h2', { hasText: 'COMFAMA' })});
      await card.scrollIntoViewIfNeeded();
      await card.first().click();
      await this.page.locator('section').filter({
          hasText: 'Test SPE QA AUTOMATIZACION'})
          this.page.getByLabel('actions.jobActions')
          .getByRole('button', { name: /aplicar/i }).first().first().click();
    }



  async aplicarVacanteConCP() {
      // Click en aplicar
      const card = this.page.locator('article').filter({
      has: this.page.locator('h2', { hasText: 'auxiliar de bodegaa' }),
      hasNot: this.page.locator('h2', { hasText: 'COMFAMA' })}).first();
      await card.scrollIntoViewIfNeeded();
      await card.first().click();
      await this.page.waitForTimeout(1500);
      await this.page.locator("//*[@class='applyButton_application-button__bJoK_ applyButton_apply-btn__leXCI']").click();
      

      await this.page.getByText('respuesta 2', { exact: true }).click();
      await this.page.waitForTimeout(1500);
      await this.page.getByText('Enviar respuestas', { exact: true }).click();
      await this.page.getByText('Se ha enviado tu aplicación', { exact: true }).first().waitFor({ state: 'visible', timeout: 10000 });
      
      //await this.page.getByRole('button', { name: 'Enviar respuestas' }).click();

      // Cerrar confirmación
      //await this.page.getByRole('button', { name: 'Cerrar' }).click();

    }
}