import {Page, Locator} from '@playwright/test'

export class ProductPage {

    //defining type

    readonly page: Page
    readonly menuButton: Locator
    readonly aboutButton: Locator
    readonly logoutButton: Locator
    readonly productName: Locator
    readonly productDescription: Locator
    readonly productPrice: Locator
    readonly addToCart: Locator
    readonly cartIcon: Locator

    //creating common instance

    constructor(page: Page) {

        this.page = page
        this.menuButton = page.locator('#react-burger-menu-btn')
        this.aboutButton = page.locator('#about_sidebar_link')
        this.logoutButton = page.locator('#logout_sidebar_link')
        this.productName = page.locator('.inventory_item_name')
        this.productDescription = page.locator('.inventory_item_desc')
        this.productPrice = page.locator('.inventory_item_price')
        this.addToCart = page.locator('xpath=//button[text()="Add to cart"]')
        this.cartIcon = page.locator('.shopping_cart_badge')

    }

    //adding function for actions on objects

    async openAboutPage () {

        await this.menuButton.click()
        await this.aboutButton.click()
        
    }

    async performLogout () {

        await this.menuButton.click()
        await this.logoutButton.click()
        
    }
    async validateAllProductIsDisplayed() {

        const name = await this.productName.allTextContents()
        const description = await this.productDescription.allTextContents()
        const price = await this.productPrice.allTextContents()
        const buttonCount = await this.addToCart.count()

        // console.log(name.length)
        // console.log(description.length)
        // console.log(price.length)
        // console.log(buttonCount)

        if (name.length === 0)

            throw new Error("No Product is displayed")

        if (name.length !== description.length || name.length !== price.length || name.length !== buttonCount)

            throw new Error("Product Details mismatch")

    }

    async addFirstProductToCart() {

        await this.addToCart.first().click()

    }

    async addAllProductToCart() {

        while(await this.addToCart.count() > 0){

            await this.addToCart.first().click()

        }
    }

}