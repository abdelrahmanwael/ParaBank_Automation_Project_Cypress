import testUrls from "../test-data/testUrls";


class LoginPage {
    //Locators
    registerLink = 'a[href*="register.htm"]';
    userNameField = 'input[name="username"]';
    passwordField = 'input[name="password"]';
    logInBtn = 'input[value="Log In"]';
    homePageTitle = 'Accounts Overview';
    logout = 'a[href="logout.htm"]';


    //Methods
    visit() {
        cy.visit(testUrls.URL);
    }
    clickRegisterLink(){
        cy.get(this.registerLink).click();
    }
    login(username,password) {
        cy.get(this.userNameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.logInBtn).click();
        cy.contains('h1', this.homePageTitle).should('exist');
    }
    Logout(){
        cy.get(this.logout).click();
    }
}

export default LoginPage;