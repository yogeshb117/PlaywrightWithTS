// Importe playwright module
import { test, expect } from '@playwright/test'
//Write a test
test('Assertions in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty Assertions
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();

    //Verify URL, Title, Text, Count Assertions

    await page.getByPlaceholder('Search', { exact: true }).first().click();
    await page.getByPlaceholder('Search', { exact: true }).first().fill('Playwright by testers talk');
    await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+testers+talk');
    await expect(page).toHaveTitle('Playwright by testers talk - YouTube');

    await expect(page.locator('[class="yt-shelf-header-layout__title"]').first()).toHaveText('Shorts');
    await expect(page.locator('[class="yt-shelf-header-layout__title"]')).toHaveCount(2);
    //Disable Count Assertion to see failure
    //await expect(page.locator('[class="yt-shelf-header-layout__title"]')).toBeDisabled();

});