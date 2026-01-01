import { expect } from '@playwright/test';

export class EliminarCandidato {
    private page: import('playwright').Page;

    constructor(page: import('playwright').Page) {
        this.page = page;
    }

    async eliminarCandidatoPorId(): Promise<void> {
        await this.page.locator("//*[@class='mg_avatar_magneto-ui-default-avatar_1upgt']").click();
        await this.page.getByText('Configuración').click();
        await this.page.getByRole('button', {name : 'trash-red'}).click();
        await this.page.getByRole('button', {name : 'Sí, eliminar'}).click();
        await this.page.waitForTimeout(1500);

        
    }

    async eliminarCandidatoPorIdConFoto(): Promise<void> {
        await this.page.locator("//*[@class='mg_avatar_avatarComponent_1upgt']").click();
        await this.page.getByText('Configuración').click();
        await this.page.getByRole('button', {name : 'trash-red'}).click();
        await this.page.getByRole('button', {name : 'Sí, eliminar'}).click();
        await this.page.waitForTimeout(1500);
        
    }

    async verificarCuentaEliminada(): Promise<void> {
    const eliminadoMsg = this.page.getByText('¡Hemos eliminado tu cuenta!');
    await eliminadoMsg.waitFor({ state: 'visible', timeout: 15000 });
    await expect(eliminadoMsg).toBeVisible();
    }
}