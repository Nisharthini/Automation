const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    autoex: 'https://automationexercise.com/', 
    elements: {
        homepage:'//*[@id="header"]/div/div/div/div[1]/div/a/img',
        LoginButton:'//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a',
        NewUsersignup:'//*[@id="form"]/div/div/div[3]/div/h2',
        Name:'//*[@id="form"]/div/div/div[3]/div/form/input[2]',
        emailid:'//*[@id="form"]/div/div/div[3]/div/form/input[3]',
        SignUp:'//*[@id="form"]/div/div/div[3]/div/form/button',
        Enteraccinfo:'//*[@id="form"]/div/div/div/div[1]/h2/b',
        Password:'//*[@id="password"]', 
        FirstName:'//*[@id="first_name"]',
        LastName:'//*[@id="last_name"]',
        address:'//*[@id="address1"]',
        State:'//*[@id="state"]',
        City:'//*[@id="city"]',
        ZipCode:'//*[@id="zipcode"]',
        Mobilephone:'//*[@id="mobile_number"]',
        CreateAccount:'//*[@id="form"]/div/div/div/div[1]/form/button',
        accountcreatedmsg:'//*[@id="form"]/div/div/div/h2/b',
        Continuebtn:'//*[@id="form"]/div/div/div/div/a',
        loggedinas:'//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a',
        deletebtn:'//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a',
        Accdeleted:'//*[@id="form"]/div/div/div/h2/b',
        Continue:'//*[@id="form"]/div/div/div/div/a',
       
    },

    clickElement: async function (objectKey) { // LoginButton
        // eslint-disable-next-line no-console
        console.log('The objectKey  is: '+objectKey) 
        const selector = this.elements[objectKey];
        console.log('The xpath expression is: '+selector)  
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) { // username or password
        const selector = this.elements[inputname];
        await driver.sleep(8000);
        return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; 
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)); // true // false
    },

}