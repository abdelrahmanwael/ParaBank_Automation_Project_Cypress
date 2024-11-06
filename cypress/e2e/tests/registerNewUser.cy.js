import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();

    it('Register New User', () => {
        loginPage.visit();
        loginPage.clickRegisterLink();
        registerPage.registerNewUser();
        loginPage.Logout();
    });
});
    