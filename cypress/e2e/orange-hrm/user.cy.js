import _SiteData from './SiteData.json'
import _UserData from './UserData.json'
import LoginPage from './LoginPage.js'
import DashboardPage from './DashboardPage.js'
import MyInfoPage from './MyInfoPage.js'

const _loginPage = new LoginPage()
const _dashboardPage = new DashboardPage()
const _myInfoPage = new MyInfoPage()

describe('User tests', () => {
    beforeEach(() => {
        cy.visit(_SiteData.links.Login)
    })

    it('Login with valid username + password', () => {
        _loginPage.login(_UserData.valid.username, _UserData.valid.password)
        cy.get(_loginPage.selectors.invalidCredentialAlertMessage).should('not.exist')
    })

    it('Login with invalid password', () => {
        _loginPage.login(_UserData.valid.username, _UserData.invalid.password)
        cy.get(_loginPage.selectors.invalidCredentialAlertMessage).should('exist')
    })

    it('Login with invalid username', () => {
        _loginPage.login(_UserData.invalid.username, _UserData.valid.password)
        cy.get(_loginPage.selectors.invalidCredentialAlertMessage).should('exist')
    })

    it.only('Login > My Info > Personal Details', () => {
        _loginPage.login(_UserData.valid.username, _UserData.valid.password)
        cy.get(_loginPage.selectors.invalidCredentialAlertMessage).should('not.exist')

        cy.get(_SiteData.menu_selectors.MyInfoButton).click() // get to my info

        cy.get(_myInfoPage.selectors.firstNameField).clear().type("Antonio") // first name
        cy.get(_myInfoPage.selectors.middleNameField).clear().type("Pereira") // middle name
        cy.get(_myInfoPage.selectors.lastNameField).clear().type("da Silva") // last name
        cy.get(_myInfoPage.selectors.genericField).eq(3).clear().type("Tonho") // nickname

        cy.get(_myInfoPage.selectors.genericField).eq(4).clear().type("12345") // employee id
        cy.get(_myInfoPage.selectors.genericField).eq(5).clear().type("54321") // other id

        cy.get(_myInfoPage.selectors.genericField).eq(6).clear().type("98765") // drivers license number
        cy.get(_myInfoPage.selectors.genericField).eq(7).clear().type("2023-06-10") // license exp date
        cy.get(_myInfoPage.selectors.calendarCloseButton).click()

        cy.get(_myInfoPage.selectors.comboboxButton).eq(0).click() // nationality
        cy.get(_myInfoPage.selectors.comboboxDropdown).children().eq(2).click() // select country
        cy.get(_myInfoPage.selectors.comboboxButton).eq(1).click() // marital status
        cy.get(_myInfoPage.selectors.comboboxDropdown).children().eq(1).click() // select single

        cy.get(_myInfoPage.selectors.genericField).eq(8).clear().type("12345") // SSN number
        cy.get(_myInfoPage.selectors.genericField).eq(9).clear().type("12345") // SIN number

        cy.get(_myInfoPage.selectors.genericField).eq(10).clear().type("1990-06-10") // date of birth
        cy.get(_myInfoPage.selectors.calendarCloseButton).click()

        cy.get(_myInfoPage.selectors.radioButton).eq(1).click() // gender female
        cy.get(_myInfoPage.selectors.radioButton).eq(0).click() // gender male

        cy.get(_myInfoPage.selectors.genericField).eq(11).clear().type("2000-06-10") // millitary service
        cy.get(_myInfoPage.selectors.checkBox).click() // smoker

        cy.get(_myInfoPage.selectors.submitButton).eq(0).click() // submit
        cy.get(_myInfoPage.selectors.toastCloseButton).should('exist') // toast message

        cy.get(_myInfoPage.selectors.comboboxButton).eq(2).click() // blood type
        cy.get(_myInfoPage.selectors.comboboxDropdown).children().eq(3).click() // select a type

        cy.get(_myInfoPage.selectors.submitButton).eq(1).click() // submit
        cy.get(_myInfoPage.selectors.toastCloseButton).should('exist') // toast message
    })
})
