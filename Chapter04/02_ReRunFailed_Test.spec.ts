// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('Test 1', async ({page}) => {

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
test('Test 2', async ({page}) => {
expect(true).toBe(false);
});

//Write a test
test('Test 3', async ({page}) => {
expect(true).toBe(false);
});