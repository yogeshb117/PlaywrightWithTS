// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('Handling Alert PopUps Playwright', async ({page}) => {

    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Dialog Type is: ${dialog.type()}`);
        console.log(`Alert message is: ${dialog.message()}`);
    });
    await page.getByText('See an example alert', { exact: true }).click();
    
});

//Write a test
test('Handling PopUps in Playwright', async ({page}) => {

    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        //dialog.accept();     // For OK button
        dialog.dismiss();       // For Cancel button
        console.log(`Dialog Type is: ${dialog.type()}`);
        console.log(`Pop-Ups message is: ${dialog.message()}`);
    });
    await page.getByText('See a sample confirm', { exact: true }).click();

});

//Write a test
test('Handling Prompt PopUps in Playwright', async ({page}) => {

    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async(dialog) => {
        console.log(`Dialog Type is: ${dialog.type()}`);
        console.log(`Prompt message is: ${dialog.message()}`);
        dialog.accept('Playwright Test');  // For OK button with input text
    });
    await page.getByText('See a sample prompt', { exact: true }).click();

});