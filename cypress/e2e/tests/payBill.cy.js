import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import BillPayPage from '../pages/billPayPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const billPayPage = new BillPayPage();

    it('Pay Bill', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        billPayPage.clickBillPayLink();
        billPayPage.requestLoan();
        loginPage.Logout();
    });
});
    