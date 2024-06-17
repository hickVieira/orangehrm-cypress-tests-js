import _SiteData from './SiteData.json'
import _UserData from './UserData.json'
import LoginPage from './LoginPage.js'

const _loginPage = new LoginPage()

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit(_SiteData.links.Login)
    })

    it('Login with valid username + password', () => {
        _loginPage.loginSuccess(_UserData.valid.username, _UserData.valid.password)
    })

    it('Login with invalid password', () => {
        _loginPage.loginFail(_UserData.valid.username, _UserData.invalid.password)
    })

    it('Login with invalid username', () => {
        _loginPage.loginFail(_UserData.invalid.username, _UserData.valid.password)
    })
})
