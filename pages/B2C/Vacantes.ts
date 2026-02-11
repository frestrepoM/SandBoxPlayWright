import { Page, expect } from '@playwright/test';

export class AplicarVacante{
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
  }



  
  async SpeVisible(): Promise<void> {
			await expect(this.page.getByText('Datos requeridos por el Servicio Público de Empleo')).toBeVisible({timeout : 100000});
		}

  

}