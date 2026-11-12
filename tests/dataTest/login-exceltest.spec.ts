import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { LoginData, readExcel } from '../../utils/excelReader'

const loginData: LoginData[] = readExcel('./test-data/loginData.xlsx', 'loginData')

//console.log('Excel Data:', loginData)

test.describe('Login Tests', () => {

    for (const data of loginData) {

        //if (data.run !== 'yes') continue //if the run column is not set to 'yes', skip this test case
        //if (data.run == 'yes') continue //if the run column is set to 'yes', skip this test case

        test(`Login Test - ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Skipping test as run column is not set to "yes"')

            const loginPage = new LoginPage(page)

            await test.step('Navigate to Login Page and Perform Login', async () => {
                await loginPage.gotoLoginPage()
            })
            await test.step('Perform Login', async () => {
                await loginPage.login(data.username, data.password)
            })

            await test.step('Validate Login Result', async () => {
                if (data.expected === 'success') {

                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

                } else {

                    await expect(loginPage.errorMessage).toBeVisible()

                }

            })
        })

    }

})