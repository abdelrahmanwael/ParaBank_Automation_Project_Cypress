import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import RequestLoanPage from '../pages/requestLoanPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const requestLoanPage = new RequestLoanPage();

    it('Request Loan', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        requestLoanPage.clickRequestLoanLink();
        requestLoanPage.requestLoan();
        loginPage.Logout();
    });
});
    