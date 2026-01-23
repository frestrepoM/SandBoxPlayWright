
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/B2B/LoginAnalistaPage';
import { VacantePage } from '../pages/B2B/VacantePage';
import { VacanteEliminarPage } from '../pages/B2B/EliminarVacantePage';
import { ImportarCandidatosPage } from '../pages/B2B/ImportarCandidatosPage';
import { HomePage } from '../pages/B2B/Home';
import { ConfigurarEtapasPage } from '../pages/B2B/ConfigurarEtapas';
import { LoginCandidatoPage } from '../pages/B2B/LoginCadidatoPage';
import { BuscarEmpleoPage } from '../pages/B2B/AplicarVacanteCandidato';
import { MoverCandidatosPage } from '../pages/B2B/MoverCandidatosPage';
import { LoginYopmailPage } from '../pages/B2B/LoginYopmail';
import { CandidatosEstados } from '../pages/B2B/EstadosCandidatos';
import { NetworkLogger } from '../pages/Network/Peticiones';
import { UtilidadesPagina } from '../pages/Utils/UtilidadesPagina';

// Definición global
const text = `Buscamos Auxiliar de Bodega para apoyar en la recepción, almacenamiento y despacho de mercancía. Responsabilidades: organizar productos, preparar pedidos, realizar inventarios y mantener el orden. Requisitos: bachiller, experiencia deseable, capacidad para movilizar cargas y trabajo en equipo. Ofrecemos salario competitivo, prestaciones de ley y estabilidad. ¡Postúlate ahora!¡Postúlate ahora¡Postúlate ahora`;

//Crear vacantes
test.describe('Crear vacantes', () => {

  //let logger: NetworkLogger;
  //
  //test.beforeEach(async ({ page }) => {
  //  new NetworkLogger(page);
  //  logger = new NetworkLogger(page);
  //});
  //
  //test.afterEach(async ({}, testInfo) => {
  //  logger.printLogs(testInfo.title);
  //});

  test('Crear vacante con anuncio publico', async ({ page }) => {
    const logger = new NetworkLogger(page);
    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');
    logger.printLogs('Mi test');

  });

  test('Crear vacante con anuncio publico confidencial', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  });

  test('Crear vacante con anuncio interno', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  });

  test('Crear vacante con anuncio publico e interno', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(2).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  });

  test('Crear vacante con anuncio publico e interno confidencial', async ({ page }) => {


    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(2).click();
    await page.getByRole('switch').nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  });

  test('Crear vacante sin anuncio', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";

    //await login.login('adelgado@talenta.cloud', 'angel2012');
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(3).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  });

});
// importar
test.describe('Importar candidatos', () => {

  test('Importar candidato exitosamente de forma invidual', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";
    const importarIndividual = new ImportarCandidatosPage(page);


    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await UtilidadesPagina.esperarYRecargar(page);
    await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
    await importarIndividual.verificarImportacionExitosa();
    await eliminar.eliminarVacante('auxiliar de bodegaa');


  });

  test('Importar candidato existente de forma invidual', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";
    const importarIndividual = new ImportarCandidatosPage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await UtilidadesPagina.esperarYRecargar(page);
    await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
    await importarIndividual.verificarImportacionExitosa();
    await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
    await importarIndividual.verificarDuplicadoImportar();
    await page.click(".ant-modal-close");
    await eliminar.eliminarVacante('auxiliar de bodegaa');


  });

  test('Importar candidatos de forma masiva incorrecta', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";
    const ImportarCandidatos = new ImportarCandidatosPage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await UtilidadesPagina.esperarYRecargar(page);
    await ImportarCandidatos.importarMasivo('ImportarCA.csv');
    await page.waitForSelector("//section[@class='results']//h4[normalize-space(.)='No ha sido posible vincular a los candidatos']", { state: 'visible' });
    await ImportarCandidatos.verificarFalloImportacionMasivo();
    await page.click('.ant-modal-close');
    await eliminar.eliminarVacante('auxiliar de bodegaa');
  });

  test('Importar candidatos de forma masiva correctamente', async ({ page }) => {


    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const nombreVacante = "auxiliar de bodegaa";
    const ImportarCandidatos = new ImportarCandidatosPage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await UtilidadesPagina.esperarYRecargar(page);
    await ImportarCandidatos.importarMasivo('ImportarCAExitoso.csv');
    await page.waitForSelector("(//*[normalize-space(.)='¡Bien, hemos vinculado los candidatos!'])[2]", { state: 'visible' });
    await ImportarCandidatos.verificarImportacionMasivaExitosa();
    await page.click('.ant-modal-close');
    await eliminar.eliminarVacante('auxiliar de bodegaa');
  });

});
//Ver vacantes
test.describe('Ver vacantes', () => {

  test('Ver vacantes desde el menu hamburguesa', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await home.MenuBurguer();
    await home.validatePublishedLabel();

  });

  test('Ver vacantes desde el menu', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await home.VacantesHome();
    await home.validatePublishedLabel();

  });


});
//Login
test.describe('Inicio de sesion', () => {

  test('Inicio de sesion correcto', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await home.validateTitleName();

  })

  test('Inicio de sesion con email incorrecto', async ({ page }) => {

    const login = new LoginPage(page);

    await login.loginIncorrecto('sandbox-latam.grupo-bolivarmagneto365.com');
    await login.expectEmailError();


  })

  test('Inicio de sesion con contraseña incorrecto', async ({ page }) => {

    const login = new LoginPage(page);

    await login.ContrseñaIncorrecto('sandbox-latam.keralty@magneto365.com', '3453');
    await login.expectPasswordError();

  })



});
//Etapas
test.describe('Configurar etapas', () => {

  test('Configurar etapas e importar', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const configurarEtapas = new ConfigurarEtapasPage(page);
    const PageCandidato = await page.context().newPage();
    const loginCandidato = new LoginCandidatoPage(PageCandidato);
    const aplicarVacante = new BuscarEmpleoPage(PageCandidato);
    const moverCandidato = new MoverCandidatosPage(page);
    const PageYopmail = await page.context().newPage();
    const LoginYopmail = new LoginYopmailPage(PageYopmail);

    await page.bringToFront();
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(4000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await configurarEtapas.configurarNotificacion();
    await PageCandidato.bringToFront();
    
    await loginCandidato.loginCandidatos();
    await aplicarVacante.buscarVacante('auxiliar de bodegaa');
    await aplicarVacante.aplicarVacante();
    await page.bringToFront();
    await PageCandidato.close();
    await moverCandidato.moverCandidatoEntreEtapas();
    await PageYopmail.bringToFront();
    await LoginYopmail.validarCorreo('fabianrestrepotest@yopmail.com')
    await LoginYopmail.expectAsuntoCorreoFinalista();
    await page.bringToFront();
    await PageYopmail.close();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.locator("//*[@class='ant-btn ant-btn-primary']").click();
    await eliminar.eliminarVacante('auxiliar de bodegaa')

  })

});

test.describe('Estados cubiertas', () => {

  test('Cubierta y notificacion', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const configurarEtapas = new ConfigurarEtapasPage(page);
    const PageYopmail = await page.context().newPage();
    const LoginYopmail = new LoginYopmailPage(PageYopmail);
    const Importar = new ImportarCandidatosPage(page);
    const moverCandidato = new MoverCandidatosPage(page);

    await page.bringToFront();
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(3).click();
    //await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(6000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    //await configurarEtapas.configurarNotificacionFinalista();
    await configurarEtapas.configurarNotificacionContratados();

    //await configurarEtapas.ValidarCambiosEnLaSEtapas();
    await Importar.ImportarCandidatosHastaContratados('fabianrestrepotest@yopmail.com');
    await Importar.verificarImportacionExitosa();
    await moverCandidato.moverCandidatoEntreEtapasAContratado();
    await PageYopmail.bringToFront();
    await LoginYopmail.validarCorreo('fabianrestrepotest@yopmail.com')
    await LoginYopmail.expectAsuntoCorreoFinalista();
    await page.bringToFront();
    await PageYopmail.close();
    await page.getByRole('button', { name: ' Actividad' }).click();
    await page.getByRole('button', { name: 'Etapa: Contratados' }).nth(0).click();
    await expect(page.getByText('Evento: El candidato ha sido')).toBeVisible();
  })

});

test.describe('Estado Descartados', () => {

  test('Descartado por preguntas pre-filtro', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);

    const PageCandidato = await page.context().newPage();
    const loginCandidato = new LoginCandidatoPage(PageCandidato);
    const aplicarVacante = new BuscarEmpleoPage(PageCandidato);
    const estadoCandidatos = new CandidatosEstados(page);

    await page.bringToFront();
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(0).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacanteCuestionarioPreFiltro(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(4000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await PageCandidato.bringToFront();
    await loginCandidato.loginCandidatos();
    await aplicarVacante.buscarVacante('auxiliar de bodegaa');
    await aplicarVacante.aplicarVacanteConCP();
    await page.bringToFront();
    await PageCandidato.close();
    await estadoCandidatos.EstadoCancelado();
    await estadoCandidatos.validarCandidatoExiste('Fabian Restrepo');
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Aceptar' }).click();
    await eliminar.eliminarVacante('auxiliar de bodegaa');


  })

  test('Descartado por el analista', async ({ page }) => {

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);

    const PageCandidato = await page.context().newPage();
    const estadoCandidatos = new CandidatosEstados(page);
    const importarIndividual = new ImportarCandidatosPage(page);
    const moverCandidato = new MoverCandidatosPage(page);


    await page.bringToFront();
    await login.login('sandbox-latam.keralty@magneto365.com', 'ManzanasAzules2420+');
    await page.getByRole('heading', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(0).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacanteCuestionarioPreFiltro(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(4000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com');
    await moverCandidato.moverCandidatosEstadoCancelado();
    await estadoCandidatos.validarCandidatoExiste('Fabian Restrepo');
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Aceptar' }).click();
    await eliminar.eliminarVacante('auxiliar de bodegaa');




  })
})

