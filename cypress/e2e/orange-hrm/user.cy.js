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
        invalidCredentialAlertMessage: "[role='alert']",
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-grid-item .oxd-input",
        comboboxButton: ".oxd-grid-item .oxd-select-text-input",
        comboboxDropdown: '.oxd-select-dropdown',
        radioButton: ".oxd-grid-item .oxd-radio-input",
        checkBox: '.oxd-grid-item .oxd-checkbox-input',
        toastCloseButton: '.oxd-toast-close',
        calendarCloseButton: '.--close',
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

    it.only('Login > My Info > Personal Details', () => {
        cy.get(selectors.usernameField).type(_userData.valid.username)
        cy.get(selectors.passwordField).type(_userData.valid.password)
        cy.get(selectors.submitButton).click()

        cy.get(selectors.myInfoButton).click() // get to my info
        cy.get(selectors.firstNameField).clear().type("Antonio") // first name
        cy.get(selectors.middleNameField).clear().type("Pereira") // middle name
        cy.get(selectors.lastNameField).clear().type("da Silva") // last name
        cy.get(selectors.genericField).eq(3).clear().type("Tonho") // nickname

        cy.get(selectors.genericField).eq(4).clear().type("12345") // employee id
        cy.get(selectors.genericField).eq(5).clear().type("54321") // other id

        cy.get(selectors.genericField).eq(6).clear().type("98765") // drivers license number
        cy.get(selectors.genericField).eq(7).clear().type("2023-06-10") // license exp date
        cy.get(selectors.calendarCloseButton).click()
        
        cy.get(selectors.comboboxButton).eq(0).click() // nationality
        cy.get(selectors.comboboxDropdown).children().eq(2).click() // select country
        cy.get(selectors.comboboxButton).eq(1).click() // marital status
        cy.get(selectors.comboboxDropdown).children().eq(1).click() // select single

        cy.get(selectors.genericField).eq(8).clear().type("12345") // SSN number
        cy.get(selectors.genericField).eq(9).clear().type("12345") // SIN number
        
        cy.get(selectors.genericField).eq(10).clear().type("1990-06-10") // date of birth
        cy.get(selectors.calendarCloseButton).click()
        
        cy.get(selectors.radioButton).eq(1).click() // gender female
        cy.get(selectors.radioButton).eq(0).click() // gender male
        
        cy.get(selectors.genericField).eq(11).clear().type("2000-06-10") // millitary service
        cy.get(selectors.checkBox).click() // smoker

        cy.get(selectors.submitButton).eq(0).click() // submit
        cy.get(selectors.toastCloseButton).should('exist') // toast message
        
        cy.get(selectors.comboboxButton).eq(2).click() // blood type
        cy.get(selectors.comboboxDropdown).children().eq(3).click() // select a type

        cy.get(selectors.submitButton).eq(1).click() // submit
        cy.get(selectors.toastCloseButton).should('exist') // toast message
    })
})
