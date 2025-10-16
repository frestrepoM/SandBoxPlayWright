import { Page, expect } from '@playwright/test';

export class ConfigurarEtapasPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async configurarNotificacionFinalista() {
    // Verifica si la vacante seleccionada es 'auxiliar de bodegaa'
    try {
      await this.page.getByText('auxiliar de bodegaa').waitFor({ state: 'visible', timeout: 9000 });
      await this.page.locator("//*[@class='ant-dropdown-trigger las la-ellipsis-v']").nth(0).click();
    } catch {
      throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    }
    // Click en configure stage desde el menu hamburguesa de vacantes
    
    //await this.page.locator("(//*[@class='ant-dropdown-menu-title-content'])[7]").scrollIntoViewIfNeeded();
    //await this.page.waitForSelector("(//*[@class='ant-dropdown-menu-title-content'])[7]", { state: 'visible', timeout: 5000 });
    await this.page.locator("(//*[@class='ant-dropdown-menu-title-content'])[7]").click();
    await this.page.locator("(//*[@class='newStages_V2__dropdown '])[2]").click();
    await this.page.locator("//*[@class='ant-menu-title-content']").nth(0).click();
    await this.page.locator("(//span[@class='mg_switch_magneto-ui-slider_1g2ul mg_switch_magneto-ui-round_1g2ul'])[5]").click();
    await this.page.locator("(//*[@class='ant-select-selection-search-input'])[4]").click();
    await this.page.getByText('Atracción digital').nth(0).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//*[@class='main_button-text'])[3]").click();
    await this.page.waitForTimeout(1000);
    await expect(this.page.getByText('Los cambios han sido guardados correctamente')).toBeVisible();
    await this.page.locator("//*[@class='configurationStages_header-back']").click();
    await this.page.locator("//*[@class='ant-btn ant-btn-default newStages_V2__footer-button']").click();
  }

  // ...otros métodos y lógica...
}
