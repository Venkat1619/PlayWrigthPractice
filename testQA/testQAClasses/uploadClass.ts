import { Page } from "@playwright/test";

export class upload {
    constructor(public page: Page) { }
    async uploadFiles() {
        await this.page.setInputFiles("#uploadFile", 'tests/sample.txt');
    }


}