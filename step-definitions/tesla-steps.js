module.export=function(){

this.Given('I am on the tesla portal',function(){
    return helpers.loadpage('https://www.tesla.com/');
})

this.When('I click on ShopAvailable',function(){
    return page.tesla.clickElement('ShopAvailable');
})


}