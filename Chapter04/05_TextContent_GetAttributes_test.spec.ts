import { test, expect } from '@playwright/test'

//Write a test
test('Get Text & Get Attribute value in Playwright', async ({ page }) => {

await page.goto('https://github.com/BakkappaN/');
//Get Attribute value
const name = await page.locator('[itemprop="name"]').textContent();// we can also use innerText() method
const finalName = name?.trim(); //Trim the extra spaces
console.log(`name is: ${finalName}`); //name is: Testers Talks
expect(finalName).toBe('Testers Talk');

const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-turbo-frame');
console.log(`Attribute value is: ${attributeValue}`); //Attribute value is: user-profile-frame
});
