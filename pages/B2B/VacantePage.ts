// vacante.page.ts
import { Page } from '@playwright/test';

export class VacantePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async crearVacante(text: string) {
    // Elimina el bubble si existe
    // await this.page.evaluate(() => {
    //   const bubble = document.querySelector('#postulate-bubble');
    //   if (bubble) bubble.remove(); // o bubble.style.display = 'none';
    // });
    await this.page.getByRole('button', { name: 'Continuar sin IA' }).waitFor({ state: 'visible', timeout: 7000 });
    await this.page.getByRole('button', { name: 'Continuar sin IA' }).click({ force: true });
    await this.page.getByRole('textbox', { name: 'Escriba el nombre vacante o' }).click();
    await this.page.getByRole('textbox', { name: 'Escriba el nombre vacante o' }).fill('auxiliar de bodegaa');

    await this.page.locator('section').filter({ hasText: /^Tipo de contratoSelecciona un tipo$/ }).locator('span').first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Término indefinido').click();
    await this.page.waitForTimeout(1000);

    await this.page.getByRole('textbox', { name: 'Busca y selecciona hasta 5' }).click();
    await this.page.locator('div').filter({ hasText: /^Administración y oficina$/ }).click();

    await this.page.getByRole('textbox', { name: 'Busca un cargo y selecciona' }).click();
    await this.page.getByRole('textbox', { name: 'Busca un cargo y selecciona' }).fill('au');
    await this.page.locator('[id="37"]').click();

    await this.page.locator('section').filter({ hasText: /^Nivel$/ }).locator('span').first().click();
    await this.page.getByText('Analista', { exact: true }).click();
    await this.page.getByRole('checkbox', { name: 'Sin experiencia' }).check();

    await this.page.getByRole('textbox', { name: 'Escribe una ciudad o ciudades' }).click();
    await this.page.getByRole('textbox', { name: 'Escribe una ciudad o ciudades' }).fill('medellin');
    await this.page.locator('[id="16963"]').click();

    await this.page.locator('section').filter({ hasText: 'Periodicidad' }).locator('span').first().click();
    await this.page.locator('div').filter({ hasText: /^Mensual$/ }).nth(1).click();

    await this.page.locator('[data-test-id="number_from"]').click();
    await this.page.locator('[data-test-id="number_from"]').fill('$200,0000');
    //await this.page.getByText('Tecnólogo', { exact: true }).scrollIntoViewIfNeeded();
    await this.page.getByText('Tecnólogo', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Escribe la profesión o' }).fill('qa');

    await this.page.locator("//div[@contenteditable='true']").fill(text);
    // Dispara blur y change para asegurar que el campo reaccione como en el flujo manual
    await this.page.locator("//div[@contenteditable='true']").evaluate((el) => {
      el.blur();
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState('networkidle');
    await this.page.getByRole('button', { name: 'Continuar' }).nth(0).click();
    await this.page.getByRole('button', { name: 'Continuar' }).click();

    await this.page.getByRole('textbox', { name: 'Desde' }).click();
    await this.page.locator("//*[@class='ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today']").click();
    await this.page.locator("(//*[@class='ant-picker-cell ant-picker-cell-end ant-picker-cell-in-view'])[1]").click();


    await this.page.getByRole('textbox', { name: 'Busca un email' }).click();
    await this.page.locator('[id="1100000041663719"]').click();

    await this.page.waitForLoadState('networkidle');
    try {
      await this.page.locator("//*[@class='ant-btn ant-btn-round ant-btn-primary steps-wizard__actions__btn--continue v2-form publish-btn']")
        .click({ force: true, timeout: 30000 }); // espera máximo 30 segundos
    } catch (error) {
      console.log('Se demoró más de 30 seg, ejecutando flujo alterno.');
      await this.page.getByRole('button', { name: 'arrow-left' }).click();
      await this.page.getByRole('button', { name: 'Anterior' }).click();
      await this.page.getByRole('button', { name: 'Continuar sin IA' }).waitFor({ state: 'visible', timeout: 7000 });
      await this.page.getByRole('button', { name: 'Continuar sin IA' }).click({ force: true });
      await this.page.waitForTimeout(1000);
      await this.page.waitForLoadState('networkidle');
      await this.page.getByRole('button', { name: 'Continuar' }).nth(0).click();
      await this.page.getByRole('button', { name: 'Continuar' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.locator("//*[@class='ant-btn ant-btn-round ant-btn-primary steps-wizard__actions__btn--continue v2-form publish-btn']")
        .click({ force: true })
    }

    await this.page.getByRole('button', { name: 'Publicar con esta configuraci' }).click();
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.getByRole('button', { name: 'Aceptar' }).click();
    //await this.page.getByText('Borrador').click();
    //try {
    //  await this.page.getByText('auxiliar de bodegaa').waitFor({ state: 'visible', timeout: 6000 });
    //  await this.page.locator("//*[@class='ant-dropdown-trigger las la-ellipsis-v']").nth(0).click();
    //} catch {
    //  throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    //}
    //await this.page.getByText('Publicar vacantePublicar esta').click();
    //await this.page.getByRole('button', { name: 'Cambiar estado de vacante' }).click();
    //await this.page.getByRole('button', { name: 'Si, cambiar estado' }).click();
    //await this.page.getByText('Publicadas').click();

  }

  async crearVacanteCuestionarioPreFiltro(text: string) {
    // Elimina el bubble si existe
    // await this.page.evaluate(() => {
    //   const bubble = document.querySelector('#postulate-bubble');
    //   if (bubble) bubble.remove(); // o bubble.style.display = 'none';
    // });
    await this.page.getByRole('button', { name: 'Continuar sin IA' }).waitFor({ state: 'visible', timeout: 3000 });
    await this.page.getByRole('button', { name: 'Continuar sin IA' }).click({ force: true });
    await this.page.getByRole('textbox', { name: 'Escriba el nombre vacante o' }).click();
    await this.page.getByRole('textbox', { name: 'Escriba el nombre vacante o' }).fill('auxiliar de bodegaa');

    await this.page.locator('section').filter({ hasText: /^Tipo de contratoSelecciona un tipo$/ }).locator('span').first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Término indefinido').click();
    await this.page.waitForTimeout(1000);

    await this.page.getByRole('textbox', { name: 'Busca y selecciona hasta 5' }).click();
    await this.page.locator('div').filter({ hasText: /^Administración y oficina$/ }).click();

    await this.page.getByRole('textbox', { name: 'Busca un cargo y selecciona' }).click();
    await this.page.getByRole('textbox', { name: 'Busca un cargo y selecciona' }).fill('au');
    await this.page.locator('[id="37"]').click();

    await this.page.locator('section').filter({ hasText: /^Nivel$/ }).locator('span').first().click();
    await this.page.getByText('Analista', { exact: true }).click();
    await this.page.getByRole('checkbox', { name: 'Sin experiencia' }).check();

    await this.page.getByRole('textbox', { name: 'Escribe una ciudad o ciudades' }).click();
    await this.page.getByRole('textbox', { name: 'Escribe una ciudad o ciudades' }).fill('medellin');
    await this.page.locator('[id="16963"]').click();

    await this.page.locator('section').filter({ hasText: 'Periodicidad' }).locator('span').first().click();
    await this.page.locator('div').filter({ hasText: /^Mensual$/ }).nth(1).click();

    await this.page.locator('[data-test-id="number_from"]').click();
    await this.page.locator('[data-test-id="number_from"]').fill('$200,0000');
    //await this.page.getByText('Tecnólogo', { exact: true }).scrollIntoViewIfNeeded();
    await this.page.getByText('Tecnólogo', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Escribe la profesión o' }).fill('qa');

    await this.page.locator("//div[@contenteditable='true']").fill(text);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Continuar' }).nth(0).click();
    await this.page.locator("//*[@class='ant-input input-question']").fill('pregunta qa 1')
    await this.page.getByPlaceholder("Opción de respuesta 1").click();
    await this.page.getByPlaceholder("Opción de respuesta 1").fill('respuesta 1');
    await this.page.getByPlaceholder("Opción de respuesta 2").click();
    await this.page.getByPlaceholder("Opción de respuesta 2").fill('respuesta 2');
    await this.page.locator('[data-test-id="Group"]').getByLabel('').first().check();
    await this.page.getByRole('button', { name: 'Continuar' }).click();
    await this.page.getByRole('textbox', { name: 'Desde' }).click();
    await this.page.locator("//*[@class='ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today']").click();
    await this.page.locator("(//*[@class='ant-picker-cell ant-picker-cell-end ant-picker-cell-in-view'])[1]").click();


    await this.page.getByRole('textbox', { name: 'Busca un email' }).click();
    await this.page.locator('[id="1100000041663719"]').click();
    await this.page.waitForTimeout(2000);

    try {
      await this.page.locator("//*[@class='ant-btn ant-btn-round ant-btn-primary steps-wizard__actions__btn--continue v2-form publish-btn']")
        .click({ force: true, timeout: 30000 }); // espera máximo 30 segundos
    } catch (error) {
      console.log('Se demoró más de 30 seg, ejecutando flujo alterno.');
      await this.page.getByRole('button', { name: 'arrow-left' }).click();
      await this.page.getByRole('button', { name: 'Anterior' }).click();
      await this.page.getByRole('button', { name: 'Continuar sin IA' }).waitFor({ state: 'visible', timeout: 7000 });
      await this.page.getByRole('button', { name: 'Continuar sin IA' }).click({ force: true });
      await this.page.waitForTimeout(1000);
      await this.page.waitForLoadState('networkidle');
      await this.page.getByRole('button', { name: 'Continuar' }).nth(0).click();
      await this.page.getByRole('button', { name: 'Continuar' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.locator("//*[@class='ant-btn ant-btn-round ant-btn-primary steps-wizard__actions__btn--continue v2-form publish-btn']")
        .click({ force: true })
    }
    await this.page.getByRole('button', { name: 'Publicar con esta configuraci' }).click();
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.getByRole('button', { name: 'Aceptar' }).click();
    //await this.page.getByText('Borrador').click();
    //try {
    //  await this.page.getByText('auxiliar de bodegaa').waitFor({ state: 'visible', timeout: 6000 });
    //  await this.page.locator("//*[@class='ant-dropdown-trigger las la-ellipsis-v']").nth(0).click();
    //} catch {
    //  throw new Error("La vacante 'auxiliar de bodegaa' no está visible en la página");
    //}
    //await this.page.getByText('Publicar vacantePublicar esta').click();
    //await this.page.getByRole('button', { name: 'Cambiar estado de vacante' }).click();
    //await this.page.getByRole('button', { name: 'Si, cambiar estado' }).click();
    //await this.page.getByText('Publicadas').click();

  }
}
