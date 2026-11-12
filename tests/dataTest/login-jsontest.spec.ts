import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import loginData from '../../test-data/loginDataNew.json'

loginData.forEach((data) => { // Loop through each set of test data in the JSON file

    if (data.run) return //check if the test should be run or not based on the 'run' property in the JSON data

    test(`Login Test Run ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page)

        await loginPage.gotoLoginPage()
        await loginPage.login(data.username, data.password)

        if (data.expected === 'success') {

            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

        } else {

            await expect(loginPage.errorMessage).toBeVisible()

        }

    })

})
