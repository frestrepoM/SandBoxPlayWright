import { Page, expect } from '@playwright/test';

export class MoverCandidatosPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  
   
  async moverCandidatoEntreEtapas() {
    
    try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByText('auxiliar de bodegaa').nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }
    //await this.page.getByText('Postularon').click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])").first().click();
    await this.page.getByRole('button', { name : 'Enviar'}).click();

  
  }

  async moverCandidatoEntreEtapasAContratado() {

    try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByText('auxiliar de bodegaa').nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    };
    await this.page.locator("(//*[@title='Finalistas (1)'])").click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])[2]").click();
    await this.page.getByRole('button', { name : 'Enviar a contratados'}).click();
    await this.page.getByRole('button', { name : 'Sí, cambiar estado'}).click();

    
  }

  async moverCandidatoEntreEtapasHastaFinalista() {

    try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByText('auxiliar de bodegaa').nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }
    await this.page.getByText('Postularon').click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])[2]").click();
    await this.page.getByRole('button', { name : 'Enviar'}).click();
    await this.page.getByText('Preseleccionados').click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])[2]").click();
    await this.page.getByRole('button', { name : 'Enviar'}).click();

  }

  async moverCandidatosEstadoCancelado() {

    try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByText('auxiliar de bodegaa').nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }
    await this.page.getByText('Finalistas').click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__discard tooltip__btn'])[2]").click();
    await this.page.getByRole('button', {name : 'Si, descartar'}).click();
    await this.page.locator('[data-test-id="btn-onEndView"]').click();
    await this.page.locator('[id="1"]').click();

    

  }




}
