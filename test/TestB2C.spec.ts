import { test, expect } from '@playwright/test';
import { EliminarCandidato } from '../pages/B2C/EliminarCandidato';
import { RegistroCandidato } from '../pages/B2C/RegistroCandidato';
import { RegistroNiveles } from '../pages/B2C/RegistroNiveles';
import { BuscarEmpleoPage } from '../pages/B2B/AplicarVacanteCandidato';
import { AplicarVacante } from '../pages/B2C/Vacantes';
import { FormularioSPE } from '../pages/B2C/FormularioSPE';
import { HojaDeVdia } from '../pages/B2C/HojaDeVida';

test.describe('Crear candidato', () => {

    test('Crear candidato nivel uno', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await page.pause();
        await registroNivelUno.verificarClaseBotonNivelUno();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato nivel dos sin experencias ni estudios ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDos();
        await registroNivelDos.verificarClaseBotonNivelDos();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato nivel dos con experencia y sin estudios ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConExperencia();
        await registroNivelDos.verificarClaseBotonNivelDos();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato nivel dos con estudios y sin experencia ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudios();
        await registroNivelDos.verificarClaseBotonNivelDos();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato nivel dos con estudios y experencia ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudiosExperencia();
        await registroNivelDos.verificarClaseBotonNivelDos();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato nivel tres ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)
        const registroNivelTres = new RegistroNiveles(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudiosExperencia();
        await registroNivelTres.terminarNivelTres();
        await registroNivelTres.verificarClaseBotonNivelTres();
        await eliminarCandidato.eliminarCandidatoPorIdConFoto();
        await eliminarCandidato.verificarCuentaEliminada();
    });


    test('Crear candidato nivel cuatro ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)
        const registroNivelTres = new RegistroNiveles(page);
        const registroNivelCuatro = new RegistroNiveles(page)

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudiosExperencia();
        await registroNivelTres.terminarNivelTres();
        await registroNivelCuatro.terminarNivelCuatro();
        //Hacer que actualice el perfil para ver reflejado el video y confirmar el texto de nivel 4
        await registroNivelCuatro.verificarClaseBotonNivelCuatro();
        await eliminarCandidato.eliminarCandidatoPorIdConFoto();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato y llenar formulario SPE con estudios y experencia ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)
        const registroNivelTres = new RegistroNiveles(page);
        const registroNivelCuatro = new RegistroNiveles(page)
        const aplicarVacanteCandidato = new BuscarEmpleoPage(page);
        const vacantes = new AplicarVacante(page)
        const spe = new FormularioSPE(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudiosExperencia();
        await registroNivelTres.terminarNivelTres();
        await registroNivelCuatro.terminarNivelCuatro();
        await aplicarVacanteCandidato.buscarVacante('Test SPE QA AUTOMATIZACION')
        await aplicarVacanteCandidato.aplicarVacanteYNoCerrar();
        await vacantes.SpeVisible();
        await spe.LlenarFormularioSPEConEstudiosExperencia();
        await eliminarCandidato.eliminarCandidatoPorIdConFoto();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    test('Crear candidato y llenar formulario SPE con estudios y sin experencia  ', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const eliminarCandidato = new EliminarCandidato(page);
        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)
        const registroNivelTres = new RegistroNiveles(page);
        const registroNivelCuatro = new RegistroNiveles(page)
        const aplicarVacanteCandidato = new BuscarEmpleoPage(page);
        const vacantes = new AplicarVacante(page)
        const spe = new FormularioSPE(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudios();
        await registroNivelTres.terminarNivelTres();
        await registroNivelCuatro.terminarNivelCuatro();
        await aplicarVacanteCandidato.buscarVacante('Test SPE QA AUTOMATIZACION')
        await aplicarVacanteCandidato.aplicarVacanteYNoCerrar();
        await vacantes.SpeVisible();
        await page.pause
        await spe.LlenarFormularioSPEConEstudiosSinExperencia();
        await eliminarCandidato.eliminarCandidatoPorIdConFoto();
        await eliminarCandidato.verificarCuentaEliminada();
    });

    //test('Crear candidato y llenar formulario SPE sin estudios y con experencia  ', async ({ page }) => {   
    //   // Cierra cualquier popup (nueva pestaña) que se abra
    //   page.on('popup', async (popup) => {
    //       await popup.close();
    //   });
    //   const eliminarCandidato = new EliminarCandidato(page);
    //   const registrasCandidato = new RegistroCandidato(page);
    //   const registroNivelUno = new RegistroNiveles(page);
    //   const registroNivelDos = new RegistroNiveles(page)
    //   const registroNivelTres = new RegistroNiveles(page);
    //   const registroNivelCuatro = new RegistroNiveles(page)
    //   const aplicarVacanteCandidato = new BuscarEmpleoPage(page);
    //   const vacantes = new AplicarVacante(page)
    //   const spe = new FormularioSPE(page)
    //   await registrasCandidato.registrarCandidato({
    //       email: 'fabianrestestone@yopmail.com',
    //       nombre: 'qa',
    //       apellido: 'sandbox',
    //       telefono: '3113676864',
    //       password: 'res123',
    //       ciudad: 'medellin'
    //   })
    //   await registroNivelUno.terminarNivelUno();
    //   await registroNivelDos.terminarNivelDosConExperenciaYNoVigente();
    //   await registroNivelTres.terminarNivelTres();
    //   await registroNivelCuatro.terminarNivelCuatro();
    //   await aplicarVacanteCandidato.buscarVacante('Test SPE QA AUTOMATIZACION')
    //   await aplicarVacanteCandidato.aplicarVacanteYNoCerrar();
    //   await vacantes.SpeVisible();
    //   await spe.LlenarFormularioSPEConEstudiosSinExperencia();
    //   await eliminarCandidato.eliminarCandidatoPorIdConFoto();
    //   await eliminarCandidato.verificarCuentaEliminada();
    //   });

    test('Validar nivel 1 para editar la hoja de vida', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const hojaDeVida = new HojaDeVdia(page);
        const eliminarCandidato = new EliminarCandidato(page);
        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await hojaDeVida.HojaDeVida();
        await hojaDeVida.validarTextoHojaDeVidaVisible();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();

    });

    test('Validar nivel 2 para editar la hoja de vida', async ({ page }) => {
        // Cierra cualquier popup (nueva pestaña) que se abra
        page.on('popup', async (popup) => {
            await popup.close();
        });

        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const registroNivelDos = new RegistroNiveles(page)
        const hojaDeVida = new HojaDeVdia(page);
        const eliminarCandidato = new EliminarCandidato(page);
        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        })
        await registroNivelUno.terminarNivelUno();
        await registroNivelDos.terminarNivelDosConEstudiosExperencia();
        await hojaDeVida.HojaDeVida();
        await hojaDeVida.EditarHojaDeVida();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();


    });

    test('Validar cargue de hoja de vida en el nivel 1', async ({ page }) => {

        page.on('popup', async (popup) => {
            await popup.close();
        });

        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const eliminarCandidato = new EliminarCandidato(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        });
        await registroNivelUno.terminarNivelUno();
        await registroNivelUno.cargarHojaDeVidaNivelUno();
        await registroNivelUno.validarArchivoHojaDeVidaCargado();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();


    });

    test('Validar cargue de hoja de vida en el nivel 2', async ({ page }) => {

        page.on('popup', async (popup) => {
            await popup.close();
        });

        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const eliminarCandidato = new EliminarCandidato(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        });
        await registroNivelUno.terminarNivelUno();
        await registroNivelUno.terminarNivelDos();
        await registroNivelUno.cargarHojaDeVidaNivelDosConEstudiosExperiencia();
        await registroNivelUno.validarArchivoHojaDeVidaCargado();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();

    });

    test('Validar cargue de hoja de vida en el nivel 2 incompleto', async ({ page }) => {

        page.on('popup', async (popup) => {
            await popup.close();
        });

        const registrasCandidato = new RegistroCandidato(page);
        const registroNivelUno = new RegistroNiveles(page);
        const eliminarCandidato = new EliminarCandidato(page);

        await registrasCandidato.registrarCandidato({
            email: 'fabianrestestone@yopmail.com',
            nombre: 'qa',
            apellido: 'sandbox',
            telefono: '3113676864',
            password: 'res123',
            ciudad: 'medellin'
        });
        await registroNivelUno.terminarNivelUno();
        await registroNivelUno.terminarNivelDosSinMarcarEstudiosExperiencia();
        await registroNivelUno.cargarHojaDeVidaNivelUno();
        await registroNivelUno.validarArchivoHojaDeVidaCargado();
        await eliminarCandidato.eliminarCandidatoPorId();
        await eliminarCandidato.verificarCuentaEliminada();

    });

})