// Importe playwright module
import { test, expect } from '@playwright/test'
//Write a test
test('Keyboard Action in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.google.com');

    //Enter action using keyboard
    await page.getByLabel('Search').first().click();
    await page.getByLabel('Search').first().fill('Playwright with testers talk');
    await page.getByLabel('Search').first().press('Enter');
    //Selecting and deleting from keyboard
    await page.getByLabel('Search').first().click();
    await page.getByLabel('Search').first().press('Control+A');
    await page.getByLabel('Search').first().press('Delete');

    //Press TAB and Enter key
    await page.getByLabel('Search', { exact: true }).first().click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
});