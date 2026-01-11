// Importe playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('My First Playwright Typescript Test 1', { tag: ['@smoketesting'] }, async ({ page }) => {

    console.log('Test Execution Started..... ');
    //Go to URL
    await page.goto('https://duckduckgo.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    //Validate webpage Title
    await expect(page).toHaveTitle('Playwright TypeScript by Testers Talk ✅ - YouTube');
});