import _userData from '../../fixtures/userData.json'

describe('User tests', () => {
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

    it('Login with valid username + password', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.valid.password)
        cy.get(selectors.submitButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectors.dashboardGrid).should('exist')
    })

    it('Login with invalid password', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.invalid.password)
        cy.get(selectors.submitButton).click()
        cy.get(selectors.invalidCredentialAlertMessage).should('exist')
    })

    it('Login with invalid username', () => {
        cy.get(selectors.usernameField).type(_userData.invalid.username)
        cy.get(selectors.passwordField).type(_userData.valid.password)
        cy.get(selectors.submitButton).click()
        cy.get(selectors.invalidCredentialAlertMessage).should('exist')
    })

    it('Login > My Info > Personal Details', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.valid.password)
        cy.get(selectors.submitButton).click()

        cy.get("[href='/web/index.php/pim/viewMyDetails']").click() // get to my info
        cy.get("[name='firstName']").clear().type("Antonio") // first name
        cy.get("[name='middleName']").clear().type("Pereira") // middle name
        cy.get("[name='lastName']").clear().type("da Silva") // last name
        cy.get(".oxd-grid-item .oxd-input").eq(3).clear().type("Tonho") // nickname

        cy.get(".oxd-grid-item .oxd-input").eq(4).clear().type("12345") // employee id
        cy.get(".oxd-grid-item .oxd-input").eq(5).clear().type("54321") // other id

        cy.get(".oxd-grid-item .oxd-input").eq(6).clear().type("98765") // drivers license number
        cy.get(".oxd-grid-item .oxd-input").eq(7).clear().type("2023-06-10") // license exp date
        cy.get('.--close').click()
        
        cy.get(".oxd-grid-item .oxd-select-text-input").eq(0).click() // nationality
        cy.get('.oxd-select-dropdown').children().eq(2).click() // select country
        cy.get(".oxd-grid-item .oxd-select-text-input").eq(1).click() // marital status
        cy.get('.oxd-select-dropdown').children().eq(1).click() // select single

        cy.get(".oxd-grid-item .oxd-input").eq(8).clear().type("12345") // SSN number
        cy.get(".oxd-grid-item .oxd-input").eq(9).clear().type("12345") // SIN number
        
        cy.get(".oxd-grid-item .oxd-input").eq(10).clear().type("1990-06-10") // date of birth
        cy.get('.--close').click()
        
        cy.get(".oxd-grid-item .oxd-radio-input").eq(1).click() // gender female
        cy.get(".oxd-grid-item .oxd-radio-input").eq(0).click() // gender male
        
        cy.get(".oxd-grid-item .oxd-input").eq(11).clear().type("2000-06-10") // millitary service
        cy.get('.oxd-grid-item .oxd-checkbox-input').click() // smoker

        cy.get("[type='submit']").eq(0).click() // submit
        cy.get('.oxd-toast-close').should('exist')
        
        cy.get(".oxd-grid-item .oxd-select-text-input").eq(2).click() // blood type
        cy.get('.oxd-select-dropdown').children().eq(3).click() // select a type

        cy.get("[type='submit']").eq(1).click() // submit
        cy.get('.oxd-toast-close').should('exist')
    })
})
