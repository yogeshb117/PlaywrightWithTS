
//import playwright module
import { test, expect } from '@playwright/test'


//Write a test
test('test', async ({ page }) => {

        //Go to URL

        //await page.goto('https://github.com/yogeshb117');
        //Get by Role Link
        // await page.getByRole('link', { name: 'Sign in' }).click();

        //GetByLabel
        // await page.getByLabel('Homepage', { exact: true }).first().click();
        //GetByAltText
        //await page.getByAltText("View yogeshb117's full-sized avatar").click();
        //GetByTestId
        //await page.getByTestId("repositories").first().click();
        
        //GetByText
       // await page.getByText('Sign up').click();

       //GetByPlaceholder, Xpath, CSS Selector

       //await page.goto('https://www.youtube.com/');
       
       //await page.getByPlaceholder('Search').fill('Testers Talk');
       //await page.locator('//input[@name="search_query"]').fill('Testers Talk');
       
        // GetByTitle
        await page.goto('https://www.google.com/');
        await page.getByTitle('Search').fill('Playwright with testers talk');
       

});