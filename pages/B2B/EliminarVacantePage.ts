import { Page, expect } from '@playwright/test';

export class VacanteEliminarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async eliminarVacante(nombreVacante: string) {
    // Ir a la pestaña de expiradas
    await this.page.waitForTimeout(9000);
    await this.page.reload();

    // Esperar a que aparezca la vacante por nombre
    try {
      await this.page.getByText('auxiliar de bodegaa', { exact: false }).first().waitFor({ state: 'visible', timeout: 5000 });
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }
// modificar la linea de arriba.
    // Abrir menú de acciones de la primera vacante
    await this.page.waitForSelector("(//*[@class='cardVacancy__content--submenu'])[1]", { state: "visible" });
    await this.page.locator("(//*[@class='cardVacancy__content--submenu'])[1]").click();

    // Seleccionar opción "Cancelar" (posición 9 en el menú desplegable)
    await this.page.locator("(//*[@class='ant-dropdown-menu-title-content'])[9]").click();
    
    // Confirmar el cambio de estado
    
    await this.page.getByRole('button', { name: 'Cambiar estado de vacante' }).click();
    await this.page.getByRole('button', { name: 'Sí, cambiar estado' }).click();
  
    // Verificar que el estado cambió a "Cancelada"
    await expect(this.page.locator("//*[text()='Cancelada']")).toHaveText('Cancelada');
  }
}
