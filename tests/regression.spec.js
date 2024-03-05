const testdata = JSON.parse(JSON.stringify(require("../Testdata/testdata.json")));
const allure       = require('allure-js-commons');

import {test , expect, chromium} from '@playwright/test';
import {HookPage} from '../utils/HookPage';
import {ActionPage} from '../utils/BrowserUtils';
import {AssertionPage} from '../utils/AssertionUtils';
import * as config from '../pages/AcePage';


let browser;
let page;

let hook;
let action;
let assertion;

test.beforeAll(async ({browser}) => {    
    allure.startSuite("Edit Central - POC");
    allure.addEnvironment('Browser', 'Chromium');
     browser = await chromium.launch();
     page    = await browser.newPage();
   });

test('launch URL', async({browser}) => {      
    page = await browser.newPage();     
    hook = new HookPage(page);
    await hook.openUrl(testdata.url);    
})

test('verify ace icon', async() => {
    test.setTimeout(120000);
    assertion = new AssertionPage(page);   
    action = new ActionPage(page);
    await assertion.elementVisible(config.aceIcon)
    
})

test('click ace icon', async() => {       
    await action.elementClick(config.aceIcon)
})

test('verify first ace instance is checked', async() => {
    await assertion.elementChecked(config.aceFirstInstance)
})

test('verify accept button is enabled', async() => {
    await assertion.elementEnabled(config.aceAccept)
})

// test('close the url', async({browser}) => {   
//     page = await browser.close()
//     await hook.closeUrl()
// })

// test.beforeAll(async () => {
//     // Extend timeout for all tests running this hook by 30 seconds.
//     test.setTimeout(120000);
//   });