import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import AccountOverviewPage from '../pages/accountOverviewPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const accountOverviewPage = new AccountOverviewPage();

    it('check account balance and total', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        accountOverviewPage.clickOpenAccountOverviewLink();
        accountOverviewPage.getBalanceAmount();
        accountOverviewPage.getTotalAmount();
        loginPage.Logout();
    });
});
    