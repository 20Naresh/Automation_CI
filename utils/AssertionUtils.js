import { expect } from '@playwright/test';

exports.AssertionPage =

    class AssertionPage {

        constructor(page) {
            this.page = page;
            
        }

        async elementVisible(selector) {
            try {
                const visible = await this.page.locator(selector)
                await expect(visible).toBeVisible()
                //await expect(this.page.locator(selector)).toBeVisible()         
                console.log("Element is visible")
            }

            catch (error) {
                console.error("Element is not visible", error)
            }
        }

        async elementDisabled(selector) {
            try {
                await expect(this.page.locator(selector)).toBeDisabled()
                console.log("Element is Disabled")
            }

            catch (error) {
                console.error("Element is not disabled", error)
            }
        }

        async elementEnabled(selector) {
            try {
                const enabled = await this.page.locator(selector)
                await expect(enabled).toBeEnabled()
                //await expect(this.page.locator(selector)).toBeEnabled().toBeTruthy()
                console.log("Element is Enabled")
            }

            catch (error) {
                console.error("Element is not enabled", error)
            }
        }

        async elementChecked(selector) {
            try {
                const checked = await this.page.locator(selector)
                await expect(checked).toBeChecked()
                //await expect(this.page.locator(selector)).toBeChecked()
                console.log("Element is Checked")
            }

            catch (error) {
                console.error("Element is not checked", error)
            }
        }

    }