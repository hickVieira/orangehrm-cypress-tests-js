import _userData from '../../fixtures/userData.json'

describe('Login page tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",
        dashboardGrid: ".orangehrm-dashboard-grid",
        invalidCredentialAlertMessage: "[role='alert']"
    }

    it('valid username + password', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.valid.password)
        cy.get(selectors.submitButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectors.dashboardGrid).should('exist')
    })

    it('invalid password', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.invalid.password)
        cy.get(selectors.submitButton).click()
        cy.get(selectors.invalidCredentialAlertMessage).should('exist')
    })
})
