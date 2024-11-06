import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import UpdateContactInfoPage from '../pages/updateContactInfoPage';

describe.only('test', () => {
    const loginPage = new LoginPage();
    const updateContactInfoPage = new UpdateContactInfoPage();

    it('Update Contact Info', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        updateContactInfoPage.clickUpdateContactInfoLink();
        updateContactInfoPage.updateContactInfo();
        loginPage.Logout();
    });
});
    