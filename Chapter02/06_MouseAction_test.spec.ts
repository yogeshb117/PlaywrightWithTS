// Importe playwright module
import { test, expect } from '@playwright/test'
//Write a test
test('Mouse Action in Playwright', async ({ page }) => {
    //Go to URL
    // await page.goto('https://duckduckgo.com/?q=playwright+by+testers+talk');
    //Left button click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click({button:'left'});    
    //middle button click
    // await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click({ button: 'middle' });
    //Right button click
    // await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click({button:'right'}); 
    //Mouse hover action
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search by voice').first().hover();
    //Double click action
    await page.getByLabel('Search by voice').dblclick();
});