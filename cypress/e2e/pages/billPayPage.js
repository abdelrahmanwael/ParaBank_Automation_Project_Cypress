class BillPayPage {
    //Locators
    openBillPayLink = 'a[href="billpay.htm"]';
    payeeNameField = 'input[name="payee.name"]';
    addressField = 'input[name="payee.address.street"]';
    cityField = 'input[name="payee.address.city"]';
    stateField = 'input[name="payee.address.state"]';
    zipCodeField = 'input[name="payee.address.zipCode"]';
    phoneField= 'input[name="payee.phoneNumber"]';
    accountField= 'input[name="payee.accountNumber"]';
    accountConfirmationField= 'input[name="verifyAccount"]';
    amountField= 'input[name="amount"]';


    SendBtn = 'input[value="Send Payment"]';
    successMsg = 'Bill Payment Complete';

    //Methods
    clickBillPayLink() {
        cy.get(this.openBillPayLink).click();
    }
    fillPayeeInfo(){
        cy.get(this.payeeNameField).type("Abdelrahman");
        cy.get(this.addressField).type("223St. london sqaure");
        cy.get(this.cityField).type("Cairo");
        cy.get(this.stateField).type("Cairo");
        cy.get(this.zipCodeField).type("11525");
        cy.get(this.phoneField).type("011111111111");
        cy.get(this.accountField).type("5454545454878");
        cy.get(this.accountConfirmationField).type("5454545454878");
        cy.get(this.amountField).type("100");
        cy.wait(2000); // wait for 1 second
    }
    clickSendButton(){
        cy.get(this.SendBtn).click();
        cy.wait(2000); // wait for 1 second
        
    }
    assertSuccessMessageShown(){
        cy.contains('h1', this.successMsg).should('exist');
    }
    requestLoan(){
        this.fillPayeeInfo();
        this.clickSendButton();
        this.assertSuccessMessageShown();
    }
    
}

export default BillPayPage;