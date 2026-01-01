import { Page, Request, Response } from '@playwright/test';

export class NetworkLogger {
    public requests: string[] = [];
    public responses: string[] = [];

    constructor(page: Page) {
        page.on('request', (request: Request) => {
            this.requests.push(`[Request] ${request.method()} ${request.url()}`);
        });
        page.on('response', (response: Response) => {
            this.responses.push(`[Response] ${response.status()} ${response.url()}`);
        });
    }

    printLogs(testName: string) {
        console.log(`--- Network logs for: ${testName} ---`);
        this.requests.forEach(r => console.log(r));
        this.responses.forEach(r => console.log(r));
        console.log('-------------------------------------');
    }
}

