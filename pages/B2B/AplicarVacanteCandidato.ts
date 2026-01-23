import { Page } from '@playwright/test';

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
    await this.page.getByRole('textbox').first().press('Enter');
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
      await this.page.locator("//*[@class='applyButton_application-button__bJoK_ applyButton_apply-btn__leXCI']").click();
      
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
      await this.page.locator('#mg_job_actions_magneto-ui_external-child_1awr3')
        .getByRole('button', { name: 'Aplicar' }).click();


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
      

      await this.page.getByRole('button', { name: 'respuesta 2' }).click();
      await this.page.waitForTimeout(1500);

      await this.page.getByRole('button', { name: 'Enviar respuestas' }).click();

      // Cerrar confirmación
      //await this.page.getByRole('button', { name: 'Cerrar' }).click();

    }
}