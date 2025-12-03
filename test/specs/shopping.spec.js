const shoppingPage = require("../pageobjects/shopping.page");
const { randomEmail, randomMobile } = require('../utility/random');
const loginURL = 'https://automationexercise.com/';  

describe('Shopping', ()=> {

    let signupname;
    let password;
    let firstname;
    let lastname;
    let address;
    let state;
    let city;
    let zipcode;
    let mobile_number;
    
    before('Give values ​to the above variables.', async () => {

        signupname = 'mike';
        password = 'test';
        firstname = 'mike';
        lastname = 'jordan';
        address = 'humphrey3';
        state = 'illinois';
        city = 'chicago';
        zipcode = '10000';
        mobile_number = randomMobile();
    
        await browser.url(loginURL);
    });

    it('Sign up',  async () => {

        await shoppingPage.consent.click();
        await shoppingPage.signuplogin.click();

        await shoppingPage.signupname.setValue(signupname);
        await shoppingPage.signupemail.setValue(randomEmail());
        await shoppingPage.signupbutton.click();

        await shoppingPage.password.setValue(password);
        await shoppingPage.firstname.setValue(firstname);
        await shoppingPage.lastname.setValue(lastname);
        await shoppingPage.address.setValue(address);
        await shoppingPage.country.click();
        await shoppingPage.countrySelect("United States");
        await shoppingPage.state.setValue(state);
        await shoppingPage.city.setValue(city);
        await shoppingPage.zipcode.setValue(zipcode);
        await shoppingPage.mobilenumber.setValue(mobile_number);
        await shoppingPage.createaccount.click();

        expect (await shoppingPage.accountcreated).toBeDisplayed();
        await shoppingPage.continue.click();
    
    })

    after ('Delete all cookies', async () => {
        await browser.deleteAllCookies();
    });
})