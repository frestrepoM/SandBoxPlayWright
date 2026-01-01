import { Page, expect } from '@playwright/test';

export class FormularioSPE{
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
  }



  
  async LlenarFormularioSPEConEstudiosExperencia(): Promise<void> {
    await this.page.pause();
    await this.page.getByRole('button', { name: 'Selecciona un sexo arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'Hombre' }).click();
    await this.page.getByRole('button', { name: 'Selecciona un género arrow-' }).click();
    await this.page.getByRole('button', { name: 'Masculino' }).click();
    await this.page.getByRole('button', { name: 'Selecciona tu orientación' }).click();
    await this.page.getByRole('button', { name: 'Heterosexual' }).click();
    await this.page.getByRole('button', { name: 'Unión libre' }).click();
    await this.page.getByRole('button', { name: 'Nivel de estudio arrow-icon' }).click();
    await this.page.getByRole('textbox', { name: 'Nivel de estudio' }).press('CapsLock');
    await this.page.getByRole('button', { name: 'Profesional', exact: true }).click();
    
    await this.page.getByRole('button', { name: 'Guardar' }).click();
    await this.validarInformacionActualizada();    
    await this.page.getByRole('button', { name: 'close icon' }).click();
    await this.page.getByRole('link', { name: 'Hoja de vida' }).click();
    await this.page.getByRole('button', { name: 'icon Nivel 2 Hazte visible' }).click();
    await this.validarDatosRequeridosSPEVisible();

  }

  async LlenarFormularioSPEConEstudiosSinExperencia(): Promise<void> {

    await this.page.getByRole('button', { name: 'Selecciona un sexo arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'Hombre' }).click();
    await this.page.getByRole('button', { name: 'Selecciona un género arrow-' }).click();
    await this.page.getByRole('button', { name: 'Masculino' }).click();
    await this.page.getByRole('button', { name: 'Selecciona tu orientación' }).click();
    await this.page.getByRole('button', { name: 'Heterosexual' }).click();
    await this.page.getByRole('button', { name: 'Unión libre' }).click();
    await this.page.getByRole('button', { name: 'Nivel de estudio arrow-icon' }).click();
    await this.page.getByRole('textbox', { name: 'Nivel de estudio' }).press('CapsLock');
    await this.page.getByRole('button', { name: 'Profesional', exact: true }).click();
    
    await this.page.getByRole('button', { name: 'Guardar' }).click();
    await this.validarInformacionActualizada();    
    await this.page.getByRole('button', { name: 'close icon' }).click();
    await this.page.getByRole('link', { name: 'Hoja de vida' }).click();
    await this.page.getByRole('button', { name: 'icon Nivel 2 Hazte visible' }).click();
    await this.validarDatosRequeridosSPEVisible();

  }
  
  async validarInformacionActualizada(): Promise<void> {
  await this.page.waitForSelector('text=Información actualizada', { state: 'visible' });}

  async validarDatosRequeridosSPEVisible(): Promise<void> {
  const elemento = this.page.locator('div').filter({ hasText: /^Datos requeridos por el Servicio Público de Empleo$/ }).first();
  await expect(elemento).toBeVisible();
}
  

}