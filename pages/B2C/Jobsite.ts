import { Page, expect } from '@playwright/test';

export class Jobsite {
    async validarHeadingKeralty(): Promise<void> {

        const [jobsitePage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page
                .locator("//*[@class='mg_job_actions_magneto-ui-job-actions_icon-anchor_1awr3']")
                .nth(1)
                .click()
        ]);

        await jobsitePage.waitForLoadState('domcontentloaded');

        await expect(
            jobsitePage.locator('h1', { hasText: 'KERALTY' })
        ).toBeVisible({ timeout: 15000 });
        await jobsitePage.close();

    }

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async irAJobsite(): Promise<void> {




        await this.page.locator("//*[@class='mg_avatar_avatarComponent_1upgt']").click();
        await this.page.locator("(//*[@class='mg_menu_icon_magneto-ui-menu-icon_1fe5w  '])[1]").nth(0).click();
        const card = this.page.locator('article').filter({
            has: this.page.locator('h2', { hasText: 'Jobsite sin CP' }),
            hasNot: this.page.locator('h2', { hasText: 'COMFAMA' })
        });
        await card.first().click();
        await this.validarHeadingKeralty();
        

    }
}