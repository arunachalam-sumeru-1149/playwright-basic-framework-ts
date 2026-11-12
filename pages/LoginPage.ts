import {Page, Locator} from '@playwright/test'

export class LoginPage {

    //defining type

    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    //creating common instance

    constructor(page: Page) {

        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.errorMessage = page.locator('[data-test="error"]')

    }

    //adding function for actions on objects

    async gotoLoginPage() {

        await this.page.goto('https://www.saucedemo.com/')

    }

    async login (user: string, pass: string){

        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
        
    }

}