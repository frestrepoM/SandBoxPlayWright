import { Page, expect } from '@playwright/test';

export class RegistroNiveles {
	readonly page: Page;
	readonly descripcionPerfil: string = 'Ingeniero Informatico del Politecnico Jaime Isaza Cadavid. ...';


	constructor(page: Page) {
		this.page = page;
	}

	async terminarNivelUno(): Promise<void> {
		await this.page.getByRole('button', { name: 'close icon' }).click();
		await this.page.locator("//*[@class='mg_avatar_magneto-ui-default-avatar_1upgt']").click();
		await this.page.locator("(//*[@class='mg_menu_icon_magneto-ui-menu-icon_menu-text_1fe5w'])[5]").click();
		await this.page.waitForTimeout(2000);

	}

	async verificarClaseBotonNivelUno(): Promise<void> {
		await expect(this.page.getByRole('button', { name: 'icon Nivel 1 Preferencias de' })).toHaveClass('levelLayout-module__toggle-button___RDHzl levelLayout-module__toggle-button--first___QgxF8');
	}

	async verificarClaseBotonNivelDos(): Promise<void> {
		await expect(this.page.getByRole('button', { name: 'icon Nivel 2 Hazte visible para' })).toHaveClass('levelLayout-module__toggle-button___RDHzl');
	}

	async verificarClaseBotonNivelTres(): Promise<void> {
		await expect(this.page.getByRole('button', { name: 'icon Nivel 3 Haz que tu perfil' })).toHaveClass('levelLayout-module__toggle-button___RDHzl');
	}

	async verificarClaseBotonNivelCuatro(): Promise<void> {
		await expect(this.page.getByRole('button', { name: 'icon Nivel 4 Entra en los' })).toHaveClass('levelLayout-module__toggle-button___RDHzl');
	}

	async terminarNivelDos(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByText('No tengo experiencia').click();
		await this.page.getByText('No tengo estudios').click();

		await this.page.waitForTimeout(2000);
	}

	async terminarNivelDosConExperencia(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir experiencia laboral' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).fill('qa');
		await this.page.getByRole('button', { name: 'Empresa', exact: true }).click();
  		await this.page.getByRole('textbox', { name: 'Empresa' }).fill('qa');
 		await this.page.getByRole('button', { name: 'qa' }).first().click();
		await this.page.getByRole('textbox', { name: 'Funciones del cargo' }).fill('qaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		await this.page.locator('label').filter({ hasText: 'Sí' }).locator('div').click();
		await this.page.getByRole('combobox').first().selectOption('4');
		await this.page.getByRole('combobox').nth(1).selectOption('2017');
		await this.page.waitForTimeout(500);
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByText('No tengo estudios').click();

		await this.page.waitForTimeout(2000);
	}

	async terminarNivelDosConExperenciaYNoVigente(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir experiencia laboral' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).fill('qa');
		await this.page.getByRole('button', { name: 'Empresa', exact: true }).click();
  		await this.page.getByRole('textbox', { name: 'Empresa' }).fill('qa');
 		await this.page.getByRole('button', { name: 'qa' }).first().click();
		await this.page.getByRole('textbox', { name: 'Funciones del cargo' }).fill('qaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		await this.page.locator('label').filter({ hasText: /^No$/ }).locator('div').click();
		await this.page.getByRole('combobox').first().selectOption('5');
		await this.page.getByRole('combobox').nth(1).selectOption('2019');
		await this.page.getByRole('combobox').nth(2).selectOption('0');
		await this.page.getByRole('combobox').nth(3).selectOption('2025');
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByText('No tengo estudios').click();

		await this.page.waitForTimeout(2000);
	}

	async terminarNivelDosConEstudios(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByText('No tengo experiencia').click();
		await this.page.getByRole('button', { name: 'Añadir estudios icon' }).click();
		await this.page.getByRole('button', { name: '¿Qué estudiaste?' }).click();
 		await this.page.getByRole('textbox', { name: '¿Qué estudiaste?' }).fill('ing');
 		await this.page.getByRole('button', { name: 'ingenieria', exact: true }).click();
 		await this.page.getByRole('button', { name: '¿Dónde estudiaste (institució' }).click();
 		await this.page.getByRole('textbox', { name: '¿Dónde estudiaste (institució' }).fill('politecnico colombiano jaime');
 		await this.page.getByRole('button', { name: 'Politécnico Colombiano Jaime Isaza Cadavid', exact: true }).click();
 		await this.page.getByRole('button', { name: '¿Título obtenido (profesión)?' }).click();
 		await this.page.getByRole('textbox', { name: '¿Título obtenido (profesión)?' }).fill('inge');
 		await this.page.getByRole('button', { name: 'ingeniero', exact: true }).click();
		await this.page.locator('label').filter({ hasText: /^No$/ }).locator('div').click();
		await this.page.getByRole('combobox').first().selectOption('7');
		await this.page.getByRole('combobox').nth(1).selectOption('2016');
		await this.page.getByRole('combobox').nth(2).selectOption('2');
		await this.page.getByRole('combobox').nth(3).selectOption('2025');
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.waitForTimeout(2000);
	}

	async terminarNivelDosConEstudiosExperencia(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir experiencia laboral' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).click();
		await this.page.getByRole('textbox', { name: 'Nombre específico del cargo' }).fill('qa');
		await this.page.getByRole('button', { name: 'Empresa', exact: true }).click();
		//await this.page.pause(); // no esta cogiendo el boton empresa para seleccionarlo
  		await this.page.getByRole('textbox', { name: 'Empresa' }).fill('qa');
  		await this.page.getByRole('button', { name: 'qa' }).first().click();
		await this.page.getByRole('textbox', { name: 'Funciones del cargo' }).fill('qaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		await this.page.locator('label').filter({ hasText: 'Sí' }).locator('div').click();
		await this.page.getByRole('combobox').first().selectOption('4');
		await this.page.getByRole('combobox').nth(1).selectOption('2017');
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir estudios icon' }).click();
		await this.page.getByRole('button', { name: '¿Qué estudiaste?' }).click();
 		await this.page.getByRole('textbox', { name: '¿Qué estudiaste?' }).fill('ing');
 		await this.page.getByRole('button', { name: 'ingenieria', exact: true }).click();
 		await this.page.getByRole('button', { name: '¿Dónde estudiaste (institució' }).click();
 		await this.page.getByRole('textbox', { name: '¿Dónde estudiaste (institució' }).fill('politecnico colombiano jaime');
 		await this.page.getByRole('button', { name: 'Politécnico Colombiano Jaime Isaza Cadavid', exact: true }).click();
 		await this.page.getByRole('button', { name: '¿Título obtenido (profesión)?' }).click();
 		await this.page.getByRole('textbox', { name: '¿Título obtenido (profesión)?' }).fill('inge');
 		await this.page.getByRole('button', { name: 'ingeniero', exact: true }).click();
		await this.page.locator('label').filter({ hasText: /^No$/ }).locator('div').click();
		await this.page.getByRole('combobox').first().selectOption('7');
		await this.page.getByRole('combobox').nth(1).selectOption('2016');
		await this.page.getByRole('combobox').nth(2).selectOption('2');
		await this.page.getByRole('combobox').nth(3).selectOption('2025');
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.waitForTimeout(2000);
	}

	async terminarNivelDosSinMarcarEstudiosExperiencia(): Promise<void> {
		await this.page.getByRole('button', { name: 'Completar datos personales' }).nth(0).click();
		await this.page.getByRole('button', { name: 'Tipo de documento arrow-icon' }).click();
		await this.page.getByRole('button', { name: 'Cédula de ciudadanía' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).click();
		await this.page.getByRole('textbox', { name: 'Número de documento' }).fill('1045644434');
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).click();
		await this.page.getByRole('textbox', { name: 'D' }).nth(2).fill('2');
		await this.page.getByRole('textbox', { name: 'D' }).nth(3).fill('1');
		await this.page.getByRole('textbox', { name: 'M' }).nth(3).fill('0');
		await this.page.getByRole('textbox', { name: 'M' }).nth(4).fill('5');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).first().fill('1');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(1).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(2).fill('9');
		await this.page.getByRole('textbox', { name: 'A', exact: true }).nth(3).fill('7');
		await this.page.getByRole('button', { name: 'Ciudad', exact: true }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellibn');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();

		await this.page.waitForTimeout(2000);
	}

	async terminarNivelTres(): Promise<void> {
		await this.page.getByRole('button', { name: 'Añadir descripción del perfil' }).click();
		await this.page.getByRole('button', { name: 'Llenar descripción del perfil' }).click();
		await this.page.getByRole('textbox', { name: 'Descripción del perfil' }).click();
		await this.page.getByRole('textbox', { name: 'Descripción del perfil' }).fill(this.descripcionPerfil);
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir habilidades y' }).click();
		await this.page.getByRole('textbox', { name: 'Escribe una habilidad o' }).click();
		await this.page.getByRole('textbox', { name: 'Escribe una habilidad o' }).fill('qa');
		await this.page.locator('form').filter({ hasText: 'Agrega tus habilidades y' }).getByRole('button').first().click();
		await this.page.getByRole('textbox', { name: 'Escribe una habilidad o' }).click();
		await this.page.getByRole('textbox', { name: 'Escribe una habilidad o' }).fill('pw');
		await this.page.locator('form').filter({ hasText: 'Agrega tus habilidades y' }).getByRole('button').first().click();
		await this.page.locator('div').filter({ hasText: /^pwBásico$/ }).locator('span').nth(2).click();
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir foto de perfil' }).click();
		await this.page
			.getByRole('button', { name: 'Arrastra tu foto de perfil' })
			.locator('input[type="file"]')
			.setInputFiles('test/test-data/lazari.jpeg');
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.getByRole('button', { name: 'Añadir ubicación icon' }).click();
		await this.page.getByRole('button', { name: 'select-icon Ciudad' }).click();
		await this.page.getByRole('textbox', { name: 'Ciudad' }).fill('medellin');
		await this.page.getByRole('button', { name: 'Medellín, Antioquia, Colombia' }).click();
		await this.page.getByRole('textbox', { name: 'Dirección' }).click();
  		await this.page.getByRole('textbox', { name: 'Dirección' }).fill('carrera46E');
  		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.waitForTimeout(2500);
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.waitForTimeout(1500);

	}
	async terminarNivelCuatro(): Promise<void> {

		await this.page.getByRole('button', { name: 'Añadir vídeo presentación icon' }).click();
		await this.page.getByRole('button', { name: 'video-presentation-action Subir vídeo' }).click();
		await this.page
			.getByRole('button', { name: 'Arrastra tu vídeo presentació' })
			.locator('input[type="file"]')
			.setInputFiles('test/test-data/intento1.webm');
		await this.page.waitForTimeout(5000);
		await this.page.getByRole('button', { name: 'Guardar' }).click();
		await this.page.reload();
		await this.page.waitForTimeout(1500);


	}

	async cargarHojaDeVidaNivelUno(): Promise<void> {
		await this.page
			.locator('label').filter({ hasText: 'Abre el explorador de archivos' })
			.locator('input[type="file"]')
			.setInputFiles('test/test-data/HV Fabian Restrepo Aguilar (1) (1).docx');
		await this.page.getByRole('button', { name: 'Leer datos' }).click();
		await this.page.getByRole('button', { name: 'Siguiente data:image/svg+xml' }).click();

	}

	async cargarHojaDeVidaNivelDosConEstudiosExperiencia(): Promise<void> {
		await this.page
			.locator('label').filter({ hasText: 'Abre el explorador de archivos' })
			.locator('input[type="file"]')
			.setInputFiles('test/test-data/HV Fabian Restrepo Aguilar (1) (1).docx');
		await this.page.getByRole('button', { name: 'Guardar' }).click();

	}

	async validarArchivoHojaDeVidaCargado(): Promise<void> {
		const locator = this.page.getByText('Hoja de vida.docx37 KB |', { exact: false });
		await expect(locator).toBeVisible({ timeout: 7000 });
	}

}

