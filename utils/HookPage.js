import {test, expect} from '@playwright/test';
exports.HookPage = 
class HookPage {

    constructor(page){
        this.page =page;
    }

    async openUrl(url){
        try
        {
        await this.page.goto(url)        
        console.log("URL is loaded successfully")
        }
        catch(error)
        {
            console.log("Unable to load the URL due to:" +error)
        }
    }

    async closeUrl(){
        try{
            await this.page.close()
            console.log("URL is closed successfully")
        }
        catch(error){
            console.log("Unable to close the URL due to:" +error)
        }
    }
    
}
