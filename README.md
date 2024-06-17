# Cypress Automation Practice Project

This repo is where I keep some test automation practice projects using cypress.

### Running
```bash
# download/update node modules
npm install

# cypress ui
npx cypress open

# or command-line 
npx cypress run
```

1. [**OrangeHRM**](https://opensource-demo.orangehrmlive.com/)
    - [x] Login Page
        - [x] valid login
            - [x] verify invalid login message not showing up
        - [x] invalid login
            - [x] verify invalid login message showing up
    - [ ] Menu Column
        - [ ] My Info
            - [x] Personal Details
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


### Notes
- OrangeHRM keeps changing its front-end
    - some tests break due to that
        - not sure wtf is going on
            - maybe there are toggles somewhere that activate certain fields in different areas
                - this is qa hell
                - good example of what NOT to do
    - almost total lack of html parameter tagging
        - can't find fields by name or anything
            - need to rely on bad methods like, hierarchy child order, or string match
                - results in flaky tests
                - only works on english

<!--
### rant
javascript is awful
- maintaining a js codebase is unsustainable
- no access modifiers for classes/methods?
    - need to use functions with returns to get readonly/static fields?
- lack of a type system = retarded
    - can't do basic stuff like constraining a variable to an int type
        - need to use a bunch of idiotic tests or casts to make sure it won't crash at runtime
        - "but it makes programming easier" get tf out here
- no safety checks or anything
    - you can access fields that don't even exist and no error or warning pops up in IDE
        - you get runtime errors for free though
    - good luck maintaning a codebase with this garbage
- can't refactor
    - changing the name of a variable/method using f2 does not always reflect other references in other files
        - you need to manually go into each file, find each reference, and change by hand
        - might be a vscode problem but whatever
- constant back and forth debugging the simplest things like, making sure something is not null or wrong type
- who tf designed this language?
- why is this crap the most used language on the planet?
- massive waste of time
- massive technical debt
- stop using javascript
-->