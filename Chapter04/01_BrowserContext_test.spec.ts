// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('Muntiple Browser/tabs in Playwright Typescript', async ({page, browser}) => {

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

    //Create new browser context
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    //Go to URL
    await page2.goto('https://duckduckgo.com/');

    //Search with keywords
    await page2.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page2.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page2.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    //Validate webpage Title
    await expect(page2).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

    //Create new tab in existing browser context
    const newTab = await context2.newPage();

    //Go to URL
    await newTab.goto('https://duckduckgo.com/');

    //Search with keywords
    await newTab.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await newTab.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');    
});