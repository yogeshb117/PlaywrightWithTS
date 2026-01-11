// Importe playwright module
import { test, expect } from '@playwright/test'

const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];

for (const searchKeyword of searchKeywords) {

    //Write a test
    test(`My First Playwright Typescript Test ${searchKeyword}`, async ({ page }) => {

        console.log('Test Execution Started..... ');
        //Go to URL
        await page.goto('https://duckduckgo.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        //Click on playlist link
        await page.getByRole('link', { name: searchKeyword }).first().click();
        //Validate webpage Title
        await expect(page).toHaveTitle(searchKeyword+'☑️ - YouTube');

        //API Testing by Testers Talk☑️
    });
}