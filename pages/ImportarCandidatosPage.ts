
import { Page, expect } from '@playwright/test';
import path from 'path';

export class ImportarCandidatosPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async ImportarCandidatos(email: string) {

    // Click en importar
    await this.page.click("//*[@class='counters__import']");
    await this.page.locator("(//*[@class='ant-input ant-input-lg'])[1]").fill(email);
    await this.page.waitForTimeout(1500);
    await this.page.click("(//*[@class='ant-select-selector'])[5]");
    await this.page.click("(//*[text()='Finalistas'])");
    await this.page.check("//*[@name='acceptTerms']");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Invitar' }).click();

  }

  async ImportarCandidatoPruebasPsicologicas(email: string) {

    // Click en importar
    await this.page.click("//*[@class='counters__import']");
    await this.page.locator("(//*[@class='ant-input ant-input-lg'])[1]").fill(email);
    await this.page.waitForTimeout(1500);
    await this.page.click("(//*[@class='ant-select-selector'])[5]");
    await this.page.click("(//*[text()='Pruebas psicológicas'])");
    await this.page.check("//*[@name='acceptTerms']");
    await this.page.getByRole('button', { name: 'Invitar' }).click();

  }

   async ImportarCandidatosHastaContratados(email: string) {

    // Click en importar
    await this.page.click("//*[@class='counters__import']");
    await this.page.locator("(//*[@class='ant-input ant-input-lg'])[1]").fill(email);
    await this.page.waitForTimeout(1500);
    await this.page.click("(//*[@class='ant-select-selector'])[5]");
    await this.page.click("(//*[text()='Finalistas'])");
    await this.page.check("//*[@name='acceptTerms']");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Invitar' }).click();


  }

   async verificarImportacionExitosa() {
    await expect(
      this.page.locator("//*[contains(text(), 'El candidato se importó con éxito')]")
    ).toBeVisible();
  }

  async verificarDuplicadoImportar() {
  await expect(
    this.page.locator("//*[contains(text(), 'El candidato ya ha sido importado a la vacante')]")
  ).toBeVisible();
 }

  async importarMasivo(fileName: string) {

  const filePath = path.join(process.cwd(), 'test', 'test-data', fileName);

  await this.page.click("//*[@class='counters__import']");
  await this.page.click("//*[@class='header__tag false header__massive-option']");
  const fileInput = this.page.locator("//div[contains(@class,'ant-upload-drag')]//input[@type='file']");
  await fileInput.setInputFiles(filePath);
  await this.page.check("//*[@name='acceptTerms']");
  await this.page.click("//*[@class='ant-btn ant-btn-default']");
  }

  async verificarFalloImportacionMasivo() {
    await expect(
      this.page.locator("//section[@class='results']//h4[normalize-space(.)='No ha sido posible vincular a los candidatos']")
    ).toBeVisible();
  }

  async verificarImportacionMasivaExitosa() {
  await expect(
    this.page.locator("(//*[normalize-space(.)='¡Bien, hemos vinculado los candidatos!'])[2]")
  ).toBeVisible();
}


}