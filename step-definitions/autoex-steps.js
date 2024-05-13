const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey is: ' + page.autoex[objectKey])
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.autoex[objectKey]);
    });

    this.When(/^I see "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.autoex.elementExists(objectKey);
     });
    
    this.When(/^I click on "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
        return page.autoex.clickElement(objectKey)
    });

    this.When(/^I see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.autoex.elementExists(objectKey);
     });
    
    this.When(/^I enter "([^"]*)" with "([^"]*)"$/,function(Username,Password) { // VehiclesButton, InventoryLink 
        page.autoex.inputElement('Name',Name);
        page.autoex.inputElement('emailid',emailid);
       });
    this.Then(/^I enter inputs to register$/, function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
           page.autoex.inputElement(fields[i][0],fields[i][1]);
        };
        return;
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.autoex.elementExists(objectKey);
     });
    
}