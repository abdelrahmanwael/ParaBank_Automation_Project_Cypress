class RequestLoanPage {
    //Locators
    openRequestLoanLink = 'a[href="requestloan.htm"]';
    loanAmountField = 'input[id="amount"]';
    downPaymentField = 'input[id="downPayment"]';
    applyBtn = 'input[value="Apply Now"]';
    successMsg = 'Congratulations, your loan has been approved.';

    //Methods
    clickRequestLoanLink() {
        cy.get(this.openRequestLoanLink).click();
    }
    insertLoanAmount(){
        //cy.wait(1000); // wait for 1 second
        cy.get(this.loanAmountField).type("500");
    }
    insertDownPaymentAmount(){
        cy.get(this.downPaymentField).type("100");
    }
    clickApplyButton(){
        cy.get(this.applyBtn).click();
    }
    assertSuccessMessageShown(){
        cy.contains('p', this.successMsg).should('exist');
    }
    requestLoan(){
        this.insertLoanAmount();
        this.insertDownPaymentAmount();
        this.clickApplyButton();
        this.assertSuccessMessageShown();
    }
    
}

export default RequestLoanPage;