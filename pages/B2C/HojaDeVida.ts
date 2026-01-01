import { Page, expect } from '@playwright/test';

export class HojaDeVdia{
      
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
  }

async HojaDeVida(): Promise<void> {
    await this.page.locator("//*[@class='headerSectionLevels-module__header-section--opt-btn___-8O7T']").click();
}

async validarTextoHojaDeVidaVisible(): Promise<void> {
        const locator = this.page.getByText('Para poder elegir entre más de 7 diseños profesionales de hoja de vida', { exact: false });
        await expect(locator).toBeVisible({ timeout: 7000 });
      }

async EditarHojaDeVida(): Promise<void> {

  await this.page.locator('div:nth-child(9) > div > .carousel-module__carousel__group-item___NJniI > .carouselItem-module__carousel-item___MtYar > .carouselItem-module__carousel-item__mask___vUS6p').click();
  await this.page.getByRole('button', { name: 'data:image/png;base64,' }).click();
  await this.page.locator('div:nth-child(11) > div > .carousel-module__carousel__group-item___NJniI > .carouselItem-module__carousel-item___MtYar > .carouselItem-module__carousel-item__mask___vUS6p').click();
  await this.page.getByRole('button', { name: 'data:image/svg+xml,%3csvg%20width=\'19\'%20height=\'18\'%20viewBox=\'0%200%2019%2018' }).click();
  await this.page.getByRole('button', { name: 'Allerta qa sandbox' }).click();
}

}

