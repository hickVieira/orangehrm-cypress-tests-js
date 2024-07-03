import _SiteData from './SiteData.json'
import _UserData from './UserData.json'
import LoginPage from './LoginPage.js'
import MyInfoPage from './MyInfoPage.js'
const Chance = require('chance')

const _chance = new Chance()
const _loginPage = new LoginPage()
const _myInfoPage = new MyInfoPage()

describe('User pages tests', () => {
    beforeEach(() => {
        cy.visit(_SiteData.links.Login)
    })

    it('Login > Dashboard > My Info > Personal Details', () => {
        _loginPage.loginSuccess(_UserData.valid.username, _UserData.valid.password)

        cy.get(_SiteData.menu_selectors.MyInfoButton).click() // go to my-info page

        _myInfoPage.setPageDetails(false, false, false, false)
        _myInfoPage.setNameDetails(_chance.first(), _chance.last(), _chance.last(), "pinguco")
        _myInfoPage.setEmpolyeeDetails("123456789", "987654321")
        _myInfoPage.setDriverDetails("123456789", "2020-01-01")
        _myInfoPage.setSSNDetails("123456789")
        _myInfoPage.setSINDetails("123456789")
        _myInfoPage.setNationality("Albanian")
        _myInfoPage.setMaritalStatus("Married")
        _myInfoPage.setDateOfBirth("1980-01-01")
        _myInfoPage.setGender("Male")
        _myInfoPage.setMillitaryServiceDetails("2000-01-01")
        _myInfoPage.setSmoker(false)
        _myInfoPage.submit(0)

        _myInfoPage.setBloodType("AB-")
        _myInfoPage.submit(1)
    })
})
