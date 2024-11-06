class UpdateContactInfoPage {
    //Locators
    openUpdateContactInfoLink = 'a[href="updateprofile.htm"]';
    firstNameField = 'input[name="customer.firstName"]';
    lastNameField = 'input[name="customer.lastName"]';
    updateBtn = 'input[value="Update Profile"]';
    successMsg = 'Your updated address and phone number have been added to the system. ';

    //Methods
    clickUpdateContactInfoLink() {
        cy.get(this.openUpdateContactInfoLink).click();
    }
    updateFirstNameField(){
        cy.get(this.firstNameField).clear().type("Abdelrahman");
    }
    updateLastNameField(){
        cy.get(this.lastNameField).clear().type("Wael");
    }
    clickUpdateButton(){
        cy.get(this.updateBtn).click();
    }
    assertSuccessMessageShown(){
        cy.contains('p', this.successMsg).should('exist');
    }
    updateContactInfo(){
        this.updateFirstNameField();
        this.updateLastNameField();
        this.clickUpdateButton();
        this.assertSuccessMessageShown();
    }
    
}

export default UpdateContactInfoPage;