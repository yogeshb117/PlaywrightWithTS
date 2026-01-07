import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {

    await test.step('Navigate to URL', async () => {
        await page.goto('https://github.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
    });

    await test.step('Enter username & password', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
    });

    await test.step('Click Sign In Button', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    });

    await test.step('Verify Sign In Error Message', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });

});
