
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginAnalistaPage';
import { VacantePage} from '../pages/VacantePage';
import { VacanteEliminarPage} from '../pages/EliminarVacantePage';
import { ImportarCandidatosPage } from '../pages/ImportarCandidatosPage';
import { HomePage } from '../pages/Home';
import { ConfigurarEtapasPage } from '../pages/ConfigurarEtapas';
import { LoginCandidatoPage } from '../pages/LoginCadidatoPage';
import { BuscarEmpleoPage } from '../pages/AplicarVacanteCandidato';
import { MoverCandidatosPage } from '../pages/MoverCandidatosPage';
import { LoginYopmailPage } from '../pages/LoginYopmail';

//Crear vacantes
test.describe('Crear vacantes', () =>{
  
test('Crear vacante con anuncio publico', async ({ page }) => {

  const text = `Buscamos Auxiliar de Bodega para apoyar en la recepción, almacenamiento y despacho de mercancía. Responsabilidades: organizar productos, preparar pedidos, realizar inventarios y mantener el orden. Requisitos: bachiller, experiencia deseable, capacidad para movilizar cargas y trabajo en equipo. Ofrecemos salario competitivo, prestaciones de ley y estabilidad. ¡Postúlate ahora!¡Postúlate ahora¡Postúlate ahora`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

  //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await eliminar.eliminarVacante('auxiliar de bodegaa');
 
});

test('Crear vacante con anuncio publico confidencial', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

  //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.getByRole('switch').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await eliminar.eliminarVacante('auxiliar de bodegaa');
 
});

test('Crear vacante con anuncio interno', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

 //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await eliminar.eliminarVacante('auxiliar de bodegaa');
 
});

test('Crear vacante con anuncio publico e interno', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

  //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').nth(2).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await eliminar.eliminarVacante('auxiliar de bodegaa');
 
});

test('Crear vacante con anuncio publico e interno confidencial', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

  //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').nth(2).click();
  await page.getByRole('switch').nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await eliminar.eliminarVacante('auxiliar de bodegaa');
 
});

test('Crear vacante sin anuncio', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";

  //await login.login('adelgado@talenta.cloud', 'angel2012');
  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
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

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";
  const importarIndividual = new ImportarCandidatosPage(page);

  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
  await page.waitForTimeout(2000);
  await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
  await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
  await importarIndividual.verificarImportacionExitosa();
  await eliminar.eliminarVacante('auxiliar de bodegaa');

 
});

  test('Importar candidato existente de forma invidual', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";
  const importarIndividual = new ImportarCandidatosPage(page);

  await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
  await page.waitForTimeout(1500);
  await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
  await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
  await importarIndividual.verificarImportacionExitosa();
  await importarIndividual.ImportarCandidatos('fabianrestrepotest@yopmail.com')
  await importarIndividual.verificarDuplicadoImportar();
  await page.click(".ant-modal-close");
  await eliminar.eliminarVacante('auxiliar de bodegaa');

 
});

  test('Importar candidatos de forma masiva incorrecta', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";
  const ImportarCandidatos = new ImportarCandidatosPage(page);

  await login.login('adelgado@talenta.cloud', 'angel2012');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
  await page.waitForTimeout(1500);
  await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
  await ImportarCandidatos.importarMasivo('ImportarCA.csv');
  await page.waitForSelector("//section[@class='results']//h4[normalize-space(.)='No ha sido posible vincular a los candidatos']", { state: 'visible' });
  await ImportarCandidatos.verificarFalloImportacionMasivo(); 
  await page.click('.ant-modal-close');
  await eliminar.eliminarVacante('auxiliar de bodegaa');
});

test('Importar candidatos de forma masiva correctamente', async ({ page }) => {

  const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;

  const login = new LoginPage(page);
  const vacante = new VacantePage(page);
  const eliminar = new VacanteEliminarPage(page);
  const nombreVacante = "auxiliar de bodegaa";
  const ImportarCandidatos = new ImportarCandidatosPage(page);

  await login.login('adelgado@talenta.cloud', 'angel2012');
  await page.getByRole('link', { name: 'Nueva vacante' }).click();
  await page.locator('.ant-radio-wrapper').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await vacante.crearVacante(text);
  await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
  await page.waitForTimeout(1500);
  await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
  await ImportarCandidatos.importarMasivo('ImportarCAExitoso.csv');
  await page.waitForSelector("(//*[normalize-space(.)='¡Bien, hemos vinculado los candidatos!'])[2]", { state: 'visible' });
  await ImportarCandidatos.verificarImportacionMasivaExitosa();
  await page.click('.ant-modal-close');
  await eliminar.eliminarVacante('auxiliar de bodegaa');
});
    
});
//Ver vacantes
test.describe('Ver vacantes', () =>{

  test('Ver vacantes desde el menu hamburguesa', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('adelgado@talenta.cloud', 'angel2012');
    await home.MenuBurguer();
    await home.validatePublishedLabel();
  
  });

  test('Ver vacantes desde el menu', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('adelgado@talenta.cloud', 'angel2012');
    await home.VacantesHome();
    await home.validatePublishedLabel();
  
  });


});
//Login
test.describe('Login', () => {

  test('Inicio de sesion correcto', async ({page}) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.login('adelgado@talenta.cloud', 'angel2012');
    await home.validateTitleName();

  })

  test('Inicio de sesion con email incorrecto', async ({page}) => {

    const login = new LoginPage(page);

    await login.loginIncorrecto('adelgadotalenta.cloud');
    await login.expectEmailError();
    

  })

  test('Inicio de sesion con contraseña incorrecto', async ({page}) => {

    const login = new LoginPage(page);

    await login.ContrseñaIncorrecto('adelgado@talenta.cloud', '3453');
    await login.expectPasswordError();
    
  })



});
//Etapas
test.describe('Configurar etapas', () => {

  test('Configurar etapas e importar', async ({page}) =>{

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const configurarEtapas = new ConfigurarEtapasPage(page);
    const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;
    const PageCandidato = await page.context().newPage();
    const loginCandidato = new LoginCandidatoPage(PageCandidato);
    const aplicarVacante = new BuscarEmpleoPage(PageCandidato);
    const moverCandidato =  new MoverCandidatosPage(page);
    const PageYopmail =  await page.context().newPage();
    const LoginYopmail = new LoginYopmailPage(PageYopmail);
    
    await page.bringToFront();
    await login.login('adelgado@talenta.cloud', 'angel2012');
    await page.getByRole('link', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(10000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await configurarEtapas.configurarNotificacionFinalista();
    await configurarEtapas.ValidarCambiosEnLaSEtapas();
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
    await page.getByRole('button', {name : 'Back'}).click();
    await page.locator("//*[@class='ant-btn ant-btn-primary']").click();
    await eliminar.eliminarVacante('auxiliar de bodegaa')

  })

  
  test('Configurar etapas psw y potencial', async ({page}) =>{

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const configurarEtapas = new ConfigurarEtapasPage(page);
    const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;
    const PageYopmail =  await page.context().newPage();
    const LoginYopmail = new LoginYopmailPage(PageYopmail);
    const Importar = new ImportarCandidatosPage(page);
    
    await page.bringToFront();
    await login.login('adelgado@talenta.cloud', 'angel2012');
    await page.getByRole('link', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').first().click();
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(9000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await configurarEtapas.configurarNotificacionPwsPotencial();
    await configurarEtapas.ValidarCambiosEnLaSEtapas();
    await Importar.ImportarCandidatoPruebasPsicologicas('fabianrestrepotest@yopmail.com');
    await PageYopmail.bringToFront();
    await LoginYopmail.validarCorreo('fabianrestrepotest@yopmail.com')
    await LoginYopmail.expectAsuntoCorreoItpPws();
    await page.bringToFront();
    await PageYopmail.close();
    await eliminar.eliminarVacante('auxiliar de bodegaa');

  })


});

test.describe('Estados vacantes', () => {

  test('Cubierta y notificacion', async ({page}) =>{

    const login = new LoginPage(page);
    const vacante = new VacantePage(page);
    const eliminar = new VacanteEliminarPage(page);
    const configurarEtapas = new ConfigurarEtapasPage(page);
    const text = `
    Esta es una descripción de prueba para la vacante. 
    Debe contener varios párrafos y detalles, como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.
    ... (aquí puedes poner hasta 400 palabras si lo necesitas) ...Debe contener varios párrafos y detalles,
     como requisitos, responsabilidades,
    beneficios y oportunidades de crecimiento dentro de la organización.`;
    const PageYopmail =  await page.context().newPage();
    const LoginYopmail = new LoginYopmailPage(PageYopmail);
    const Importar = new ImportarCandidatosPage(page);
    const moverCandidato = new MoverCandidatosPage(page);
    
    await page.bringToFront();
    await login.login('adelgado@talenta.cloud', 'angel2012');
    await page.getByRole('link', { name: 'Nueva vacante' }).click();
    await page.locator('.ant-radio-wrapper').nth(3).click();
    //await page.getByRole('switch').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await vacante.crearVacante(text);
    await page.locator('//div[@id="rc-tabs-0-tab-3"]').click();
    await page.waitForTimeout(9000);
    await page.locator('//div[@id="rc-tabs-0-tab-1"]').click();
    await configurarEtapas.configurarNotificacionFinalista();
    await configurarEtapas.configurarNotificacionContratados();
    await configurarEtapas.ValidarCambiosEnLaSEtapas();
    await Importar.ImportarCandidatosHastaContratados('fabianrestrepotest@yopmail.com');
    await moverCandidato.moverCandidatoEntreEtapasAContratado();
    await PageYopmail.bringToFront();
    await LoginYopmail.validarCorreo('fabianrestrepotest@yopmail.com')
    await LoginYopmail.expectAsuntoCorreoFinalista();
    await page.bringToFront();
    await PageYopmail.close();
    await page.pause();
  })


});

test.describe('Estado cancelada', () => {

  test('Cprueba', async ({page}) =>{

    const login = new LoginPage(page);
    
    await page.bringToFront();
    await login.login('sandbox-latam.grupo-bolivar@magneto365.com', 'ManzanasAzules2420+');
    await page.pause();
  })

  
  
});


