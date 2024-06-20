describe('modern test with applitools', ()=>{
    
    it('login', ()=>{

        cy.eyesOpen({
            appName: 'Applitools Demo App',
            testName: 'login',
        })
        loadLoginPage()
        verifyLoginPage()
        login()
        verifyMainPage()

    })

    afterEach(()=>{
        cy.eyesClose()
    })

    function loadLoginPage(){
        cy.visit('https://demo.applitools.com/')
    }

    function verifyLoginPage(){
       cy.eyesCheckWindow({
        tag: "login page",
        target: 'window',
        fully: true
       })
    }

    function login(){
        cy.get('#username').type('andy')
        cy.get('#password').type('i<3pands')
        cy.get('#log-in').click()
    }

    function verifyMainPage(){
        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'

        })
    }
})