import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

describe.only('test', () => {
    const loginPage = new LoginPage();

    it('User can login and logout', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        loginPage.Logout();
    });
});
    