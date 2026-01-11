// Importe playwright module
import { test, expect } from '@playwright/test'
//Write a test
test('Select the Date value in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/datepicker/');

    // Hardcode Date value selection inside IFrame
    const iframe = page.frameLocator('[class="demo-frame"]');
    // await iframe.locator('[id="datepicker"]').fill('01/08/2026');

    //Select Dynamic Date value selection from Datepicker Calendar
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();

    //Select Past Date value selection from Datepicker Calendar
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text=11').click();

    //Select Future Date value selection from Datepicker Calendar
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text=11').click();

});