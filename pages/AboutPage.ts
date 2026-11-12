import {Page, Locator} from '@playwright/test'

export class AboutPage {

    //defining type

    readonly page: Page
    readonly announcementText: Locator
    readonly bookademoButton: Locator

    //creating common instance

    constructor(page: Page) {

        this.page = page
        this.announcementText = page.locator('.announcement-cta-text')
        this.bookademoButton = page.getByRole('link', {name:'Book a Demo'}).first()

    }

}