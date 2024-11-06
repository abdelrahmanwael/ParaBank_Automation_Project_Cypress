import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import TransferFundPage from '../pages/transferFundPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const transferFundPage = new TransferFundPage();

    it('Transfer Fund', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        transferFundPage.clickTransferFundLink();
        transferFundPage.transferAmount();
        loginPage.Logout();
    });
});
    