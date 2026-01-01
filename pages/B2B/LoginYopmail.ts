import { Page, expect } from '@playwright/test';

export class LoginYopmailPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async validarCorreo(email: string) {
    const url = process.env.URL_YOPMAIL ?? '';

    await this.page.goto(url);
    await this.page.locator("#login").click();
    await this.page.locator("#login").fill(email);
    await this.page.locator("//*[@class='material-icons-outlined f36']").click();


  }

  async expectAsuntoCorreoFinalista() {

    const frame = this.page.frameLocator('iframe[name="ifmail"]');

    // Esperar a que el iframe cargue completamente
    await frame.locator('div.ellipsis.nw.b.f18').waitFor({ state: 'visible' });

    // Verificar que el texto "Documento prueba" esté 
    try {
      await expect(frame.locator('div.ellipsis.nw.b.f18', { hasText: 'Documento prueba' })).toBeVisible();
    } catch (error) {
      await this.page.reload();
      await expect(frame.locator('div.ellipsis.nw.b.f18', { hasText: 'Documento prueba' })).toBeVisible({ timeout: 30000 });

    }

  }


  // async expectAsuntoCorreoItpPws() {
  //
  //   const frame = await this.page.frameLocator('iframe[name="ifmail"]');
  //  
  //   await expect(frame.getByText('Invitación a Pruebas Psicotécnicas')).toBeVisible();
  //
  // }
}
