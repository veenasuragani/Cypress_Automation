describe('traditional test', ()=>{
    beforeEach(()=>{
        cy.viewport(1600, 1200)
    })

    it('login', ()=>{
        loadLoginPage()
        verifyLoginPage()
        login()
        verifyMainPage()

    })

    function loadLoginPage(){
        cy.visit('https://demo.applitools.com/')
    }

    function verifyLoginPage(){
        cy.get('img[src="img/logo-big.png"]').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#log-in').should('be.visible')
        cy.get('input[type="checkbox"]').should('be.visible')
    }

    function login(){
        cy.get('#username').type('andy')
        cy.get('#password').type('i<3pands')
        cy.get('#log-in').click()
    }

    function verifyMainPage(){
        cy.get('.logo-element').should('be.visible')
        cy.get('.btn.btn-primary.btn-sm').should('be.visible')
        cy.get('.btn.btn-primary.btn-sm').should('be.visible')
        cy.get('div[class="balance hidden-mobile"] div[class="balance-title"]').should('be.visible')
    }
})