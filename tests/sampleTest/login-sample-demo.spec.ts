import {test, expect, Locator} from '@playwright/test'

test('Login Demo Test', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')

    const username: Locator = page.locator('#user-name')
    const password: Locator = page.locator('#password')
    const loginBtn: Locator = page.locator('#login-button')

    await username.fill('standard_user')
    await password.fill('secret_sauce')
    await loginBtn.click()
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    const title: Locator = page.locator('.title')
    await expect(title).toHaveText('Products')

})