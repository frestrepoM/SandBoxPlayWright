import { Page, expect } from '@playwright/test';

export class LoginCandidatoPage {
  readonly page: Page;
  private readonly email = 'fabianrestrepotest@yopmail.com';

  constructor(page: Page) {
    this.page = page;
  }

  async loginCandidatos() {
    const url = process.env.URLCANDIDATOS ?? '';
    await this.page.goto(url);
    await this.page.getByRole('textbox', { name: 'Escribe tu correo electrónico' }).fill(this.email);
    await this.page.locator('button.ant-btn-primary').filter({ hasText: /Continuar/i }).click();

    const emailMethod = this.page.locator('.otp-method-list__item').filter({ hasText: 'Enviar al correo electrónico:' });
    await emailMethod.click();

    // Obtenemos el OTP
    const otp = await this.getOtpFromYopmail();

    // Volvemos a la App
    //await this.page.bringToFront();
    const otpInputs = this.page.locator('.verification-code-container .verification-code-input__item');
    
    for (let i = 0; i < otp.length; i++) {
      await otpInputs.nth(i).fill(otp[i]);
    }


  }

  private async getOtpFromYopmail(): Promise<string> {
    const yopPage = await this.page.context().newPage();
    
    try {
      // 1. Navegación a la Home (evita el error 403/500 de navegación directa)
      await yopPage.goto('https://yopmail.com/es/');
      
      // 2. Ingreso manual del usuario
      const loginInput = yopPage.locator('#login');
      await loginInput.fill(this.email.split('@')[0]);
      await loginInput.press('Enter');

      // 3. Espera del correo con Polling optimizado
      const inboxFrame = yopPage.frameLocator('#ifinbox');
      const correoMagneto = inboxFrame.getByText('Notificaciones Magneto').first();

      await expect(async () => {
        // Si no aparece el correo, pulsamos refrescar
        if (!(await correoMagneto.isVisible())) {
          await yopPage.locator('#refresh').click();
        }
        await expect(correoMagneto).toBeVisible({ timeout: 8000 });
      }).toPass({ 
        intervals: [3000, 5000], 
        timeout: 60000 
      });

      await correoMagneto.click();

      // 4. Extracción del código OTP
      const mailFrame = yopPage.frameLocator('#ifmail');
      const otpSelector = mailFrame.locator('span[style*="font-size: 40px"]');
      
      await expect(otpSelector).toBeVisible({ timeout: 15000 });
      const otpRaw = await otpSelector.textContent();

      if (!otpRaw) throw new Error("OTP no encontrado en el cuerpo del correo");
      const cleanOtp = otpRaw.trim().replace(/\D/g, '');

      // 5. Intento de limpieza (No bloqueante)
      await this.clearYopmailInbox(yopPage).catch(() => console.log("⚠️ Limpieza omitida"));

      return cleanOtp;

    } catch (error) {
        console.error("Error en flujo Yopmail:", error);
        throw error;
    } finally {
      await yopPage.close();
    }
  }

private async clearYopmailInbox(yopPage: Page) {
  try {
    // 1. Manejador de diálogos (debe estar antes del clic)
    yopPage.once('dialog', async dialog => {
      console.log(`💬 Confirmando eliminación: ${dialog.message()}`);
      await dialog.accept();
    });

    // 2. Abrir el menú de opciones (los tres puntos de tu imagen)
    // 1. Localizamos el frame de la bandeja de entrada
    const inboxFrame = yopPage.frameLocator('#ifinbox');

    // 2. Buscamos el checkbox dentro de ese frame. 
    // Usamos el texto del remitente o asunto para asegurar que clicamos el correcto.
    await inboxFrame
    .locator('div.mctn', { hasText: 'Notificaciones Magneto' })
    .locator('input.mc')
    .click();
    // Pequeña espera para que la animación del menú termine
    await yopPage.waitForTimeout(1500);
    

    // 3. Clic en eliminar todo
    await yopPage.locator('#delsel').waitFor({ state: 'visible' });
    await yopPage.locator('#delsel').click();

    console.log("🗑️ Buzón vaciado con éxito.");

  } catch (error: unknown) {
    // Solución al error de TypeScript: Type Guard
    if (error instanceof Error) {
      console.error("Falló el vaciado de Yopmail:", error.message);
    } else {
      console.error("Falló el vaciado de Yopmail:", error);
    }
  }
}


}