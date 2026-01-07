// Importe playwright module
import {test, expect } from '@playwright/test'
//Write a test
test('Handling IFrame, Drag and Drop Elements in Playwright', async ({page}) => {
    //Go to URL
    await page.goto('https://jqueryui.com/droppable/');
    //Drag Element and Drop Element inside IFrame
    const iframe = page.frameLocator('[class="demo-frame"]');
    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');
    await dragElement.dragTo(dropElement);
    //Validate Drag and Drop Action
    await expect(dropElement).toHaveText('Dropped!');
});