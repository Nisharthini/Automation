const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    JootzaPortal: 'http://www.jootza.com/',
    TeslaWebsite: 'http://www.tesla.com/',
    smartsubmission: 'https://www.smartsubmissions.com/',
    elements: {
        Email:by.name('email'),
        password:by.name('password'), 
        LoginActionButton:'//*[@id="RegistrationForm"]/div[3]/button',
        ErrorMessage:'//*[@id="RegistrationForm"]/div[2]/div[2]',
        LoginButton:'//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',

    },
    clickElement: async function (objectKey) { // LoginButton
        // eslint-disable-next-line no-console
        console.log('The objectKey  is: '+objectKey) 
        const selector = this.elements[objectKey];
        console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) { // username or password
        const selector = this.elements[inputname];
        await driver.sleep(4000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; 
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)); // true // false
    },

}