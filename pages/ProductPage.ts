import {Page, Locator} from '@playwright/test'
import { error } from 'node:console'

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

    //creating common instance

    constructor(page: Page) {

        this.page = page
        this.menuButton = page.locator('#react-burger-menu-btn')
        this.aboutButton = page.locator('#about_sidebar_link')
        this.logoutButton = page.locator('#logout_sidebar_link')
        this.productName = page.locator('.inventory_item_name')
        this.productDescription = page.locator('.inventory_item_desc')
        this.productPrice = page.locator('.inventory_item_price')
        this.addToCart = page.locator('.btn.btn_primary.btn_small.btn_inventory')

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

}