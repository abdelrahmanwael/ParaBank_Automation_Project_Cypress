class NewAccountPage {
    //Locators
    openNewAccountLink = 'a[href="openaccount.htm"]';
    openNewAccountBtn = 'input[value="Open New Account"]';


    //Methods
    clickopenNewAccountLink() {
        cy.get(this.openNewAccountLink).click();
    }
    clickOpenNewAccountButton() {
        cy.wait(1000); // wait for 1 second
        cy.get(this.openNewAccountBtn).click();
    }
}

export default NewAccountPage;