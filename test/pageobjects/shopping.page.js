class Shop {
    get consent() {
        return $('[class="fc-button fc-cta-consent fc-primary-button"]');
    }
    get signuplogin() {
        return $('[class="fa fa-lock"]');
    }
    get signupname() {
        return $('[data-qa="signup-name"]');
    }
    get signupemail() {
        return $('[data-qa="signup-email"]');
    }
    get signupbutton() {
        return $('[data-qa="signup-button"]');
    }
    get password() {
        return $('[data-qa="password"]');
    }
    get firstname() {
        return $('[data-qa="first_name"]');
    }
    get lastname() {
        return $('[data-qa="last_name"]');
    }
    get address() {
        return $('[data-qa="address"]');
    }  
    get country() {
    return $('#country');
    }
    get state() {
        return $('[data-qa="state"]');
    }
    get city() {
        return $('[data-qa="city"]');
    }
    get zipcode() {
        return $('[data-qa="zipcode"]');
    }
    get mobilenumber() {
        return $('[data-qa="mobile_number"]');
    }
    get createaccount() {
        return $('[data-qa="create-account"]');
    }
    get accountcreated() {
        return $('[data-qa="account-created"]');
    }
    get continue () {
        return $('[data-qa="continue-button"]');
    }
    async countrySelect(option) {
        await this.country.waitForDisplayed();
        await this.country.selectByVisibleText(option); 
}
}
module.exports = new Shop();


    
   