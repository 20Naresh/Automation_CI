const { chromium } = require('playwright');
const allure       = require('allure-js-commons');

let browser;
let page;

// beforeAll(async () => {
    
//  allure.startSuite("Edit Central - POC");
//  allure.addEnvironment('Browser', 'Chromium');
//   browser = await chromium.launch();
//   page    = await browser.newPage();
// });

// afterAll(async () => {
   
//   await browser.close();
//   allure.endSuite();

// });
