// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('Handling Dropdown Lists in Playwright', async ({page}) => {

    //Go to URL
    await page.goto('https://facebook.com/');
    //Click on Create New Account button
    await page.getByRole('button', { name: 'Create new account' }).click();
    //Select Dropdown using value
    await page.getByLabel('Month').selectOption('3');
    //Select Dropdown using visible text
    await page.getByLabel('Month').selectOption('May');
    //Validate all options in dropdown
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
});
