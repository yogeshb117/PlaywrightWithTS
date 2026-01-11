// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('Timeouts in Playwright', async ({page}) => {

    test.setTimeout(1 * 60 * 1000); //1 minute
    console.log('Test Execution Started..... ');
    //Go to URL
    await page.goto('https://duckduckgo.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    //Validate webpage Title
    await expect(page).toHaveTitle('Playwright Typescript by Testers Talk ✅ - YouTube', { timeout: 5000 }); //5 seconds individual step assertion timeout

    //await page.waitForTimeout(60000);
});

//Action Timeout Example
test('My First Playwright Typescript Test', async ({page}) => {

    console.log('Test Execution Started..... ');
    //Go to URL
    await page.goto('https://duckduckgo.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page.getByRole('link', { name: 'Playwright Type by Testers Talk -' }).first().click({ timeout: 5000 }); //5 seconds action timeout
    //Validate webpage Title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
});