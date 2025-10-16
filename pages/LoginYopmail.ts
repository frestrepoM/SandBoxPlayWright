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

    const frame = await this.page.frameLocator('iframe[name="ifmail"]');
   
    await expect(frame.getByText('Documentos').nth(1)).toBeVisible();

  }


  async expectAsuntoCorreoItpPws() {

    const frame = await this.page.frameLocator('iframe[name="ifmail"]');
   
    await expect(frame.getByText('Invitación a Pruebas Psicotécnicas')).toBeVisible();

  }
}
