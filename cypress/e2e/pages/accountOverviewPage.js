class AccountOverviewPage {
    //Locators
    openAccountOverviewLink = 'a[href="overview.htm"]';
    balanceAmount = '#accountTable tbody tr td:nth-child(2)';


    //Methods
    clickOpenAccountOverviewLink() {
        cy.get(this.openAccountOverviewLink).click();
    }
    getBalanceAmount(){
        cy.get(this.balanceAmount).first().invoke('text').then((text) => {
            cy.log(text.trim());        // Log in Cypress test runner
            console.log(text.trim());   // Log in browser console
        });
    }
    getTotalAmount(){
        cy.get(this.balanceAmount).last().invoke('text').then((text) => {
            cy.log(text.trim());        // Log in Cypress test runner
            console.log(text.trim());   // Log in browser console
        });
    }
    
}

export default AccountOverviewPage;