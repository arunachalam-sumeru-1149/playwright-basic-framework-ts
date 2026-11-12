import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import loginData from '../../test-data/loginData.json'

test.describe('Login Page Validation', () => {

    test('Valid Login Test', async ({ page }) => {

        const loginPage = new LoginPage(page)

        await loginPage.gotoLoginPage()
        await loginPage.login(loginData.valid_user.username, loginData.valid_user.password)

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    })

    test('Invalid Login Test', async ({ page }) => {

        const loginPage = new LoginPage(page)

        await loginPage.gotoLoginPage()
        await loginPage.login(loginData.invalid_user.username, loginData.invalid_user.password)

        await expect(loginPage.errorMessage).toBeVisible()

    })
})