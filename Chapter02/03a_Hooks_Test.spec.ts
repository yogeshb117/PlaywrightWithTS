// Importe playwright module
import {test, expect } from '@playwright/test'


//Hooks Demo use for running 2 tests with 1 worker using serial and beforeAll and afterAll hooks
test.describe.serial('Hooks demo', () => {

test.beforeAll(async () => {
    console.log('This is before all tests');
});

test.beforeEach(async ({page}) => {
    await page.goto('https://duckduckgo.com/');
    console.log('This is before each test');
});
test.afterEach(async () => {
    console.log('This is after each test');
});

test.afterAll(async () => {
    console.log('This is after all tests');
});


//Write a test
test('Test 1', async ({page}) => {
    console.log('This is Test 1');

    //Go to URL
    //await page.goto('https://duckduckgo.com/');


    //Search with keywords
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    //Validate webpage Title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})

//Write a test
test('Test 2', async ({page}) => {
    console.log('This is Test 2');  

    //Go to URL
    //await page.goto('https://duckduckgo.com/');


    //Search with keywords
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    //Click on playlist link
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    //Validate webpage Title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})

});