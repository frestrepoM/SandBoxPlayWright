  import { Page } from '@playwright/test';

  export class UtilidadesPagina {
     private page: import('playwright').Page;

    constructor(page: import('playwright').Page) {
        this.page = page;
    }
    
    static async esperarYRecargar(pagina: Page, milisegundos: number = 8000) {
      await pagina.waitForTimeout(milisegundos);
      await pagina.reload();
    }
  }