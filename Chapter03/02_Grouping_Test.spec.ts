// Importe playwright module
import { test, expect } from '@playwright/test'

test.describe('SmokeTesting', () => {
    //Write a test
    test('Test1', async ({ page }) => {
        console.log('Test Execution Started..... ');
        //Go to URL
        await page.goto('https://duckduckgo.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        //Click on playlist link
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        //Validate webpage Title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    });

});

test.describe('Regression Testing', () => {

    //Write a test
    test('Test2', async ({ page }) => {

        console.log('Test Execution Started..... ');
        //Go to URL
        await page.goto('https://duckduckgo.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        //Click on playlist link
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        //Validate webpage Title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    });
    //Write a test
    test('Test3', async ({ page }) => {

        console.log('Test Execution Started..... ');
        //Go to URL
        await page.goto('https://duckduckgo.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        //Click on playlist link
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        //Validate webpage Title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    });
});