class TransferFundPage {
    //Locators
    openTransferFundLink = 'a[href="transfer.htm"]';
    amountField = 'input[id="amount"]';
    transferBtn = 'input[value="Transfer"]';
    successMsg = 'Transfer Complete!';

    //Methods
    clickTransferFundLink() {
        cy.get(this.openTransferFundLink).click();
    }
    insertTransferAmount(){
        cy.wait(1000); // wait for 1 second
        cy.get(this.amountField).type("50");
    }
    clickTransferButton(){
        cy.get(this.transferBtn).click();
    }
    assertSuccessMessageShown(){
        cy.contains('h1', this.successMsg).should('exist');
    }
    transferAmount(){
        this.insertTransferAmount();
        this.clickTransferButton();
        this.assertSuccessMessageShown();
    }
    
}

export default TransferFundPage;