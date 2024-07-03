## OrangeHRM Tests
First project using cypress for test automation. Target site is [OrangeHRM](https://opensource-demo.orangehrmlive.com/). This project uses javascript because I did not know at the time that you could use typescript.

### Running
```shell
# download/update node modules
npm install

# cypress ui
npx cypress open

# or command-line 
npx cypress run
```

### Coverage
- [x] Login Page
    - [x] valid login
        - [x] verify invalid login message not showing up
    - [x] invalid login
        - [x] verify invalid login message showing up
- [ ] My Info > Personal Details
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
- OrangeHRM keeps changing its front-end layout every 5 min or so
    - some tests break due to that
        - not sure wtf is going on
            - maybe there are toggles somewhere that activate certain fields in different areas
                - this is qa hell
                - good example of what NOT to do
    - almost total lack of html attribute tagging
        - can't find fields by name or id or anything
            - need to rely on bad methods like, hierarchy order, or string match
                - results in flaky tests
    - overall automating this site sucks
- Some bad technical choices I made
    - javascript instead of typescript
        - inexistant intelisense
        - no refactoring support
        - no types
        - awful overall
    - use of json instead of static classes (pain to refactor)
        - using json to store data was a bad idea

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