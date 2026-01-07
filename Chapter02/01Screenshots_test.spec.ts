// Importe playwright module
import {test, expect } from '@playwright/test'

//Write a test
test('My First Playwright Typescript Test', async ({page}) => {

    //Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');

    //Element Screenshots
    await page.locator('#page-header-container').screenshot({path: './Screenshots/ElementScreenshot.png'});

    //Page Screenshot
    await page.screenshot({path: './Screenshots/PageScreenshot.png'});

    //Full Page Screenshot
    await page.screenshot({path: './Screenshots/FullPageScreenshot.png', fullPage: true});
});