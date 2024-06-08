/// <reference types="Cypress" />
describe('FixturesData', ()=>{
    it('singleData without Fixture', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it('singleData with Fixture', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangehrm').then( (data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)
        })
        
    })

    //if we want to pass the same data to mutiple test cases
    let username;
    let password
    let expected
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            username=data.username;
            password=data.password;
            expected=data.expected;
        })
    })
    it.only('data from before', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[placeholder='Password']").type(password)
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', expected)
    })
})