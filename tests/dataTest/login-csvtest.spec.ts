import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { readCSV } from '../../utils/csvReader'

const loginData = readCSV('test-data/loginData.csv') // Read the CSV file and store the data in a variable

loginData.forEach((data: any) => { // Loop through each set of test data in the CSV file

    if (data.run == 'true') return //check if the test should be run or not based on the 'run' property in the CSV data

    test(`Login CSV Test Run - ${data.username}`, async ({ page }) => {

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

