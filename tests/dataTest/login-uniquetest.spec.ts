import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { readData } from '../../utils/dataReader'

// const loginData = readData('./test-data/loginDataNew.json')
// const loginData = readData('./test-data/LoginData.csv')
const loginData = readData('./test-data/LoginData.xlsx', 'loginData')

test.describe('Login Tests', () => {

    for (const data of loginData) {

        test(`Login Test - ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Skipping test, as run is set to no')

            const loginPage = new LoginPage(page)

            await loginPage.gotoLoginPage()
            await loginPage.login(data.username, data.password)

            if (data.expected === 'success') {

                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

            } else {

                await expect(loginPage.errorMessage).toBeVisible()

            }

        })
    }
})