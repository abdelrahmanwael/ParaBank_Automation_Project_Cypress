import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import NewAccountPage from '../pages/newAccountPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const newAccountPage = new NewAccountPage();

    it('open New Account', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        newAccountPage.clickopenNewAccountLink();
        newAccountPage.clickOpenNewAccountButton();
        loginPage.Logout();
    });
});
    