import { Page, expect } from '@playwright/test';

export class LoginCandidatoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginCandidatos() {
    // 1. Navegación inicial a la App
    await this.page.bringToFront();
    const url = process.env.URLCANDIDATOS ?? '';
    await this.page.goto(url);

    // 2. Ingreso de credenciales
    await this.page.getByRole('textbox', { name: 'Escribe tu correo electrónico' }).fill('fabianrestrepotest@yopmail.com');
    
    // Selector de botón optimizado para continuar
    await this.page.locator('button.ant-btn-primary').filter({ hasText: /Continuar/i }).click();

    // 3. Selección de método OTP (Envío de correo)
    const emailMethod = this.page.locator('.otp-method-list__item').filter({ hasText: 'Enviar al correo electrónico:' });
    await emailMethod.scrollIntoViewIfNeeded();
    await emailMethod.click();

    // 4. Gestión de Yopmail en nueva pestaña
    const newTab = await this.page.context().newPage();
    await newTab.goto('https://yopmail.com/');
    await newTab.locator('#login').fill('fabianrestrepotest@yopmail.com');
    await newTab.locator('#login').press('Enter');

    // 5. ESPERA ACTIVA DEL CORREO (Polling)
    // Localizamos el iframe de la bandeja de entrada y el correo esperado
    const inboxFrame = newTab.frameLocator('#ifinbox');
    const correoMagneto = inboxFrame.getByText('Notificaciones Magneto').first();

    // Esta función reintenta el bloque hasta que el correo sea visible
    await expect(async () => {
      const isVisible = await correoMagneto.isVisible();
      if (!isVisible) {
        // Si no se ve el correo, hace clic en el botón de refrescar de la interfaz de Yopmail
        await newTab.locator('#refresh').click();
      }
      // Verificamos la visibilidad con un timeout corto para el reintento
      await expect(correoMagneto).toBeVisible({ timeout: 5000 });
    }).toPass({
      intervals: [2000, 5000, 5000], // Esperas entre reintentos
      timeout: 60000 // Tiempo máximo total: 1 minuto
    });

    // 6. Abrir correo y extraer OTP
    await correoMagneto.click();

    const mailFrame = newTab.frameLocator('#ifmail');
    const otpSelector = mailFrame.locator('span[style*="font-size: 40px"]');
    
    // Esperamos a que el código cargue dentro del iframe del mensaje
    await expect(otpSelector).toBeVisible({ timeout: 10000 });
    const otpRaw = await otpSelector.textContent();

    if (!otpRaw) {
      throw new Error("❌ Error: El código OTP no se encontró en el cuerpo del correo.");
    }

    const cleanOtp = otpRaw.trim().replace(/\D/g, '');
    console.log(`🚀 OTP obtenido: ${cleanOtp}`);

    // Cerramos Yopmail para no dejar basura en el navegador
    await newTab.close();

    // 7. Volver a la App y llenar los 6 campos del OTP
    await this.page.bringToFront();
    const otpInputs = this.page.locator('.verification-code-input__item');

    // Bucle para llenar cada cuadrito individualmente
    for (let i = 0; i < cleanOtp.length; i++) {
      await otpInputs.nth(i).fill(cleanOtp[i]);
    }

    // 8. Verificación de éxito (opcional)
    // await expect(this.page).toHaveURL(/dashboard|welcome/);
    console.log("✅ Login completado exitosamente.");
  }
}