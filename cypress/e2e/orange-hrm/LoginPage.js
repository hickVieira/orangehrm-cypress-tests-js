import _SiteData from './SiteData.json'

class LoginPage {
    selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",
        invalidCredentialAlertMessage: "[role='alert']",
    }

    login(username, password) {
        cy.get(this.selectors.usernameField).type(username)
        cy.get(this.selectors.passwordField).type(password)
        cy.get(this.selectors.submitButton).click()
        cy.get(this.selectors.invalidCredentialAlertMessage).should('not.exist')
    }
}

export default LoginPage
