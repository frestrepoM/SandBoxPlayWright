export type DatosCandidato = {
  email: string;
  nombre: string;
  apellido: string;
  telefono: string;
  password: string;
  ciudad: string;
};
import { Page, expect } from '@playwright/test';

export class RegistroCandidato {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  async registrarCandidato(datos: DatosCandidato): Promise<void> {
    const { email, nombre, apellido, telefono, password, ciudad } = datos;
    const url = process.env.URL_REGISTRO_CANDIDATOS ?? '';
    await this.page.goto(url);
    await this.page.locator("//*[@class='mg_main_button_MainButtonComponent_lh5z0 undefined ']").click();
    await this.page.getByRole('textbox', { name: 'Correo electrónico', exact: true }).fill(email);
    await this.page.getByRole('textbox', { name: 'Confirmación correo electró' }).fill(email);

    await this.page.waitForTimeout(1500);
    await this.page.mouse.click(708, 630);
    await this.page.mouse.click(708, 693);

    await this.page.getByRole('button', { name: 'Siguiente arrow-icon' }).click();
    //await this.page.getByRole('button', { name: 'País de residencia arrow-icon' }).click();
    //await this.page.getByRole('textbox', { name: 'País de residencia' }).click();
    //await this.page.getByRole('textbox', { name: 'País de residencia' }).fill('colom');
    //await this.page.getByRole('button', { name: 'list-img Colombia' }).click();
    await this.page.getByRole('textbox', { name: 'Nombre(s)' }).click();
    await this.page.getByRole('textbox', { name: 'Nombre(s)' }).fill(nombre);
    await this.page.getByRole('textbox', { name: 'Nombre(s)' }).press('Tab');
    await this.page.getByRole('textbox', { name: 'Apellido(s)' }).fill(apellido);
    await this.page.getByRole('spinbutton', { name: 'Numero teléfono' }).fill(telefono);
    await this.page.waitForTimeout(1500);
    await this.page.getByRole('button', { name: 'Siguiente arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'sex-icon' }).nth(0).click();
    await this.page.getByRole('button', { name: 'Siguiente arrow-icon' }).click();
    await this.page.getByRole('textbox', { name: 'Nueva contraseña', exact: true }).fill(password);
    await this.page.getByRole('textbox', { name: 'Confirmar nueva contraseña' }).fill(password);
    await this.page.getByRole('button', { name: 'Siguiente arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'Selecciona sectores laborales' }).click();
    await this.page.getByRole('button', { name: 'Administración y oficina' }).click();
    await this.page.getByRole('button', { name: 'select-icon Agrega un cargo,' }).click();
    await this.page.getByRole('textbox', { name: 'Agrega un cargo, oficio o' }).fill('qa');
    await this.page.getByRole('button', { name: 'qa' }).click();

    await this.page.getByRole('textbox', { name: 'Escriba un valor' }).fill('200.0000');
    await this.page.getByRole('button', { name: 'Nivel de estudios arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'Profesional' }).click();
    await this.page.getByRole('button', { name: 'select-icon Ciudad' }).click();
    await this.page.getByRole('textbox', { name: 'Ciudad' }).click();
    await this.page.getByRole('textbox', { name: 'Ciudad' }).fill(ciudad);
    await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
    await this.page.getByRole('button', { name: 'Tiempo completo' }).click();
    await this.page.getByRole('button', { name: 'Siguiente arrow-icon' }).click();
    await this.page.getByRole('button', { name: 'Finalizar arrow-icon' }).click();
  }

}
