const testdata = JSON.parse(JSON.stringify(require("../Testdata/testdata.json")));
const allure       = require('allure-js-commons');

const {test , expect} = require ('@playwright/test');
const { chromium } = require('playwright');

// import {HookPage} from '../utils/HookPage';
// import {ActionPage} from '../utils/BrowserUtils';
// import {AssertionPage} from '../utils/AssertionUtils';
// import * as config from '../pages/AcePage';



test('Load the URL', async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage(); // Define 'page' variable here
    await page.goto('https://www.google.co.in/');
    // await page.waitForTimeout(30000); 
    await browser.close();   
});