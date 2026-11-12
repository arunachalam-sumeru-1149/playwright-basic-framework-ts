import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { ProductPage } from '../../pages/ProductPage'
import { AboutPage } from '../../pages/AboutPage'
import loginData from '../../test-data/loginData.json'

test.describe('Product Page Validation', () => {

    test.beforeEach('Perform Login', async({page}) => {

        const loginPage = new LoginPage(page)

        await loginPage.gotoLoginPage()
        await loginPage.login(loginData.valid_user.username, loginData.valid_user.password)

    })

    test('Validate About Page and Goback Scenarios', async({page}) => {

        const productPage = new  ProductPage(page)
        const aboutPage = new AboutPage(page)

        await productPage.openAboutPage()
        await expect(aboutPage.announcementText).toBeVisible()
        //await page.pause()
        await expect(aboutPage.bookademoButton).toBeVisible()
        await page.goBack()
        await expect(productPage.menuButton).toBeVisible()

    })

    test('Validate Logout Functionality', async({page}) => {
        
        const productPage = new ProductPage(page)
        const loginPage = new LoginPage(page)

        await productPage.performLogout()
        await expect(loginPage.loginButton).toBeVisible()
        
    })

    test('Validate All Products are Displayed', async({page}) =>{

        const productPage = new ProductPage(page)

        await productPage.validateAllProductIsDisplayed()

    })

    test('Validate Add First Product to Cart', async({page}) =>{

        const productPage = new ProductPage(page)

        await productPage.addFirstProductToCart()
        
    })

    test('Validate Add All Product to Cart', async({page}) =>{

        const productPage = new ProductPage(page)

        const initialProductCount = await productPage.addToCart.count()

        await productPage.addAllProductToCart()
        await expect(productPage.addToCart).toHaveCount(0)
        await expect(productPage.cartIcon).toHaveText(String(initialProductCount))
        
    })

})