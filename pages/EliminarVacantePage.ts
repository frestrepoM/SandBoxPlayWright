import { Page, expect } from '@playwright/test';

export class VacanteEliminarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async eliminarVacante(nombreVacante: string) {
    // Ir a la pestaña de expiradas
    await this.page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await this.page.waitForTimeout(2500);
    // Ir a la pestaña de publicas  
    await this.page.locator('//div[@id="rc-tabs-0-tab-1"]').click();

    // Esperar a que aparezca la vacante por nombre
    await expect(this.page.getByText(nombreVacante).first()).toBeVisible({ timeout: 40000 });

    // Abrir menú de acciones de la primera vacante
    await this.page.waitForSelector("(//*[@class='cardVacancy__content--submenu'])[1]", { state: "visible" });
    await this.page.locator("(//*[@class='cardVacancy__content--submenu'])[1]").click();

    // Seleccionar opción "Cancelar" (posición 9 en el menú desplegable)
    await this.page.locator("(//*[@class='ant-dropdown-menu-title-content'])[9]").click();

    // Confirmar el cambio de estado
    await this.page.locator("//*[@class='ant-btn ant-btn-default change-vacancy-status__modal-confirm-button']").click();
    await this.page.getByText('Si, cambiar estado').click();

    // Verificar que el estado cambió a "Cancelada"
    await expect(this.page.locator("//*[text()='Cancelada']")).toHaveText('Cancelada');
  }
}
