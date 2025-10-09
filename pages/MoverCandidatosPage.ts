import { Page, expect } from '@playwright/test';

export class MoverCandidatosPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  
   
  async moverCandidatoEntreEtapas() {

    await this.page.getByText('auxiliar de bodegaa').click();
    await this.page.locator("(//*[@class='navbarResources__item '])[2]").click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])[2]").click();
    await this.page.getByRole('button', { name : 'Enviar'}).click();

    
  }

  async moverCandidatoEntreEtapasAContratado() {

    await this.page.getByText('auxiliar de bodegaa').click();
    await this.page.locator("(//*[@title='Finalistas (1)'])").click();
    await this.page.locator("(//*[@class='ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last'])[2]").click();
    await this.page.locator("(//*[@class='ant-btn ant-btn-default ant-btn-icon-only actions__button actions__approve tooltip__btn'])[2]").click();
    await this.page.getByRole('button', { name : 'Enviar a contratados'}).click();
    await this.page.getByRole('button', { name : 'Si, cambiar estado'}).click();

    
  }


}
