exports.ActionPage =
    class ActionPage {

        constructor(page) {
            this.page = page;
        }

        async takeElementScreenShot(selector, imagename) {
            try {
                await this.page.locator(selector).screenshot({path:'test/screenshots/' +Date.now() +imagename})
                console.log("Screenshot is captured")
            }
            catch (error) {
                console.log("Unable to take screenshot ${error}")
            }
        }

        async visiblePageScreenshot(imagename) {
            try {
                await this.page.screenshot({path: 'test/screenshots/' +Date.now() +imagename})
                console.log("Screenshot captured")
            }
            catch (error) {
                console.log("Unable to take screenshot ${error}")
            }
        }

        async fullPageScreenshot(imagename) {
            try {
                await this.page.screenshot({path: 'test/screenshots/' +Date.now() +imagename, fullPage : true})                
                console.log("Screenshot captured")
            }
            catch (error) {
                console.log("Unable to take screenshot ${error}")
            }
        }

        async elementClick(selector) {
            try {
                await this.page.locator(selector).click({ timeout: 120000 })
                console.log("Element is clicked")
            }
            catch (error) {
                console.log("Unable to click the element", error)
            }
        }

        async elementFill(selector, value) {
            try {
                await this.page.locator(selector).fill(value);
                console.log("Element is clicked")
            }
            catch (error) {
                console.log("Unable to click the element ${error}")
            }
        }

        async elementCheck(selector) {
            try {
                await this.page.locator(selector).check()
                console.log("Element is clicked")
            }
            catch (error) {
                console.log("Unable to click the element ${error}")
            }
        }

    }





