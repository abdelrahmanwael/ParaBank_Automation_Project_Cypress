import loginCredentials from "../test-data/loginCredentials"

class RegisterPage {
    //Locators
    firstNameTextBox = 'input[name="customer.firstName"]';
    lastNameTextBox = 'input[name="customer.lastName"]';
    addressTextBox = 'input[name="customer.address.street"]';
    cityTextBox = 'input[name="customer.address.city"]';
    stateTextBox = 'input[name="customer.address.state"]';
    zipCodeTextBox = 'input[name="customer.address.zipCode"]';
    phoneTextBox = 'input[name="customer.phoneNumber"]';
    ssnTextBox = 'input[name="customer.ssn"]';
    usernameTextBox = 'input[name="customer.username"]';
    passwordTextBox = 'input[name="customer.password"]';
    confirmPasswordTextBox = 'input[name="repeatedPassword"]';
    registerBtn = 'input[value="Register"]';


    //Methods
    fillRegistrationInfo(){
        cy.get(this.firstNameTextBox).type("Abdelrahman");
        cy.get(this.lastNameTextBox).type("Wael");
        cy.get(this.addressTextBox).type("223St. london sqaure");
        cy.get(this.cityTextBox).type("Cairo");
        cy.get(this.stateTextBox).type("Cairo");
        cy.get(this.zipCodeTextBox).type("11525");
        cy.get(this.phoneTextBox).type("011111111111");
        cy.get(this.ssnTextBox).type("5454545454878");
        cy.get(this.usernameTextBox).type(loginCredentials.userName);
        cy.get(this.passwordTextBox).type(loginCredentials.password);
        cy.get(this.confirmPasswordTextBox).type(loginCredentials.password);
    }
    clickRegisterButton(){
        cy.get(this.registerBtn).click();
    }
    registerNewUser(){
        this.fillRegistrationInfo();
        this.clickRegisterButton();
    }
    // login(username,password) {
    //     cy.get(this.userNameField).type(username);
    //     cy.get(this.passwordField).type(password);
    //     cy.get(this.signInBtn).click();
    //     //expect(this.productsPageTitle).to.exist;
    // }
}

export default RegisterPage;