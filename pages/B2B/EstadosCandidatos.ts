import { Page } from '@playwright/test';

export class CandidatosEstados {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async EstadoCancelado(){

     try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByText('auxiliar de bodegaa').nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }

    //await this.page.getByText('Descartados').click();
    await this.page.locator('.activeCounters__item', { hasText: 'Descartados' }).click();
    await this.page.locator('[id="1"]').click();

  }


    async validarCandidatoExiste(texto: string): Promise<boolean> {
      // Devuelve true si el texto existe y es visible, false si no existe
      try {
        await this.page.getByText(texto, { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
        return true;
      } catch {
        return false;
      }
    }

}