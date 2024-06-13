describe('Login page tests', () => {
    // happens before each test
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",
        invalidCredentialAlertMessage: "[role='alert']"
    }

    const input = {
        valid: {
            username: 'Admin',
            password: 'admin123'
        },
        invalid: {
            username: 'Admino',
            password: '123'
        }
    }

    it('valid name + password', () => {
        cy.get(selectors.usernameField).type(input.valid.username)
        cy.get(selectors.passwordField).type(input.valid.password)
        cy.get(selectors.submitButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    })

    it('invalid password', () => {
        cy.get(selectors.usernameField).type(input.valid.username)
        cy.get(selectors.passwordField).type(input.invalid.password)
        cy.get(selectors.submitButton).click()
        cy.get(selectors.invalidCredentialAlertMessage).should('exist')
    })
})
