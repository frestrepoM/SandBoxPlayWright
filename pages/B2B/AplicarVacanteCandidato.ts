import { Page } from '@playwright/test';

export class BuscarEmpleoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async buscarVacante(nombreVacante: string) {

    await this.page.locator("(//*[@placeholder='Busca empleo por cargo o profesión'])").click();
    await this.page.locator("//*[@placeholder='Busca empleo por cargo o profesión']").fill(nombreVacante);
    await this.page.locator("(//*[@class='mg_main_button_MainButtonComponent_lh5z0 undefined '])[2]").click();

  }

  async aplicarVacante() {
    // Click en aplicar
    await this.page.locator('#mg_job_actions_magneto-ui_external-child_1awr3')
      .getByRole('button', { name: 'Aplicar' }).click();

    // Cerrar confirmación
    await this.page.getByRole('button', { name: 'Cerrar' }).click();
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
      await this.page.locator('#mg_job_actions_magneto-ui_external-child_1awr3')
        .getByRole('button', { name: 'Aplicar' }).click();

      await this.page.getByRole('button', { name: 'respuesta 2' }).click();
      await this.page.waitForTimeout(1500);

      await this.page.getByRole('button', { name: 'Enviar respuestas' }).click();

      // Cerrar confirmación
      await this.page.getByRole('button', { name: 'Cerrar' }).click();

    }
}