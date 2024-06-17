This repo is where I keep some test automation practise projects using cypress.

- Notes
    - OrangeHRM keeps changing its front-end
        - some tests break due to that
            - not sure wtf is going on
                - maybe there are toggles somewhere that activate certain fields in different areas
                    - this is a qa hell
                    - good example of what NOT to do
        - almost total lack of html parameter tagging
            - can't find fields
                - need to rely on bad methods like, hierarchy child order
                    - results in flaky tests
    - Javascript sucks
        - maintaining a js codebase is unsustainable
            - can't refactor
                - changing the name of a variable using f2 does not reflect other references in other files
                - you need to manually go into each file, find each reference, and change by hand
                - massive technical debt
            - lack of a type system is hell
                - can't do basic stuff like constraining a variable to an int type
                - need to use a bunch of idiotic tests or casts

1. [**OrangeHRM**](https://opensource-demo.orangehrmlive.com/)
    - [x] Login Page
        - [x] valid login
            - [x] verify invalid login message not showing up
        - [x] invalid login
            - [x] verify invalid login message showing up
    - [ ] Menu Column
        - [ ] My Info
            - [ ] Personal Details
                - [x] first name
                - [x] middle name
                - [x] last name
                - [x] nick name
                - [x] employee id
                - [x] other id
                - [x] drivers license number
                - [x] license expiry date
                - [x] SSN number
                - [x] SIN number
                - [x] nationality
                - [x] marital status
                - [x] date of birth
                - [x] gender
                - [x] millitary service
                - [x] smoker
                - [x] save button
                - [x] blood type
                - [x] test_field
                - [x] save button
                - [ ] attachments