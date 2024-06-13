describe('Login page tests', () => {
    // happens before each test
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    let input_valid_username = 'Admin'
    let input_valid_password = 'admin123'
    let input_invalid_password = '123'
    let path_username = "[name='username']"
    let path_password = "[name='password']"
    let path_button = "[type='submit']"
    let path_alert = "[role='alert']"

    it('valid name + password', () => {
        cy.get(path_username).type(input_valid_username)
        cy.get(path_password).type(input_valid_password)
        cy.get(path_button).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it('invalid password', () => {
        cy.get(path_username).type(input_valid_username)
        cy.get(path_password).type(input_invalid_password)
        cy.get(path_button).click()
        cy.get(path_alert).should('exist')
    })
})
