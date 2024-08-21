import { test, expect } from "@playwright/experimental-ct-react";

import { InputAndButton } from "./story"; // Adjust the import path

test.describe("InputAndButton Component", () => {
  test("should focus input and button in order when tabbing", async ({
    page,
    mount,
  }) => {
    // Mount the component using Playwright's React fixture
    const component = await mount(
      <InputAndButton
        buttonText="Hello"
        inputValue="Input"
        onButtonClick={() => ({})}
        onInputChange={() => ({})}
      />
    );

    const input = component.locator("input");
    const button = component.locator("button");
    // Tab to focus the input element
    await page.keyboard.press("Tab");
    await expect(input).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(button).toBeFocused();
    const body = page.locator('body');
    // set tabIndex to body to make it focusable
    await body?.evaluate((body) => (body.tabIndex = 0));
    await page.keyboard.press("Tab");
    await expect(await body.evaluate((body) => document.activeElement === body)).toBeTruthy();
  });
});
