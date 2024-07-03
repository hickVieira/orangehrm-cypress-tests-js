class MyInfoPage {
    selectors = {
        submitButton: "[type='submit']",
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        // genericField: ".oxd-grid-item .oxd-input",
        genericField: ".oxd-input-group",
        comboboxButton: ".oxd-grid-item .oxd-select-text-input",
        comboboxDropdown: '.oxd-select-dropdown',
        radioButton: ".oxd-grid-item .oxd-radio-input",
        checkBox: '.oxd-grid-item .oxd-checkbox-input',
        toastCloseButton: '.oxd-toast-close',
        calendarCloseButton: '.--close',
    }

    hasNickName = false
    hasSSN = false
    hasSIN = false
    hasMillitarySmoker = false

    setPageDetails(hasNickName, hasSSN, hasSIN, hasMillitarySmoker) {
        this.hasNickName = hasNickName
        this.hasSSN = hasSSN
        this.hasSIN = hasSIN
        this.hasMillitarySmoker = hasMillitarySmoker
    }

    setNameDetails(firstName, middleName, lastName, nickName) {
        cy.get(this.selectors.firstNameField).clear().type(firstName) // first name
        cy.get(this.selectors.middleNameField).clear().type(middleName) // middle name
        cy.get(this.selectors.lastNameField).clear().type(lastName) // last name
        if (this.hasNickName)
            cy.get(this.selectors.genericField).find("Nickname").closest("input").clear().type(nickName) // nickname
    }

    setEmpolyeeDetails(employeeID, otherID) {
        cy.get(this.selectors.genericField).contains("Employee Id").parent().parent().find("input").clear().type(employeeID) // employee id
        cy.get(this.selectors.genericField).contains("Other Id").parent().parent().find("input").clear().type(otherID) // other id
    }

    setDriverDetails(licenseNumber, expiryDate) {
        cy.get(this.selectors.genericField).contains("Driver's License Number").parent().parent().find("input").clear().type(licenseNumber) // license number
        cy.get(this.selectors.genericField).contains("License Expiry Date").parent().parent().find("input").clear().type(expiryDate) // license expiry date
        cy.get(this.selectors.calendarCloseButton).click({ force: true }) // close window
    }

    setSSNDetails(ssn) {
        if (this.hasSSN)
            cy.get(this.selectors.genericField).contains("SSN Number").parent().parent().find("input").clear().type(ssn) // SSN number
    }

    setSINDetails(sin) {
        if (this.hasSIN)
            cy.get(this.selectors.genericField).contains("SSI Number").parent().parent().find("input").clear().type(sin) // SIN number
    }

    setNationality(countryName) {
        cy.get(this.selectors.genericField).contains("Nationality").parent().parent().find("i").click() // nationality
        cy.get(this.selectors.comboboxDropdown).children().contains(countryName).click() // click target dropdown
    }

    setMaritalStatus(maritalStatus) {
        cy.get(this.selectors.genericField).contains("Marital Status").parent().parent().find("i").click() // marital status
        cy.get(this.selectors.comboboxDropdown).children().contains(maritalStatus).click() // click target dropdown
    }

    setDateOfBirth(dateOfBirth) {
        cy.get(this.selectors.genericField).contains("Date of Birth").parent().parent().find("input").clear().type(dateOfBirth) // date of birth
        cy.get(this.selectors.calendarCloseButton).click({ force: true }) // close window
    }

    setGender(gender) {
        cy.get(this.selectors.genericField).contains("Gender").parent().parent().contains(gender).click() // click target gender
    }

    setMillitaryServiceDetails(servingDate) {
        if (this.hasMillitarySmoker)
            cy.get(this.selectors.genericField).contains("Gender").parent().parent().find("input").clear().type(servingDate) // millitary service
    }

    setSmoker(isSmoker) {
        if (this.hasMillitarySmoker)
            if (isSmoker)
                cy.get(this.selectors.checkBox).check() // smoker
            else
                cy.get(this.selectors.checkBox).uncheck() // not smoker
    }

    setBloodType(bloodType) {
        cy.get(this.selectors.genericField).contains("Blood Type").parent().parent().find("i").click() // blood type
        cy.get(this.selectors.comboboxDropdown).children().contains(bloodType).click() // click target dropdown
    }

    submit(index) {
        cy.get(this.selectors.submitButton).eq(index).click() // submit
        cy.get(this.selectors.toastCloseButton).should('exist') // toast message
    }
}

export default MyInfoPage