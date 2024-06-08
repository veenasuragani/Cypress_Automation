/// <reference types="Cypress" />
describe('MultipleDataTest', ()=>{
    it('datadriven', ()=>{
        cy.fixture('orangehrm2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
            data.foreach((userdata)=>{
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            })
            if(userdata.username=='Admin'&& userdata.password=='admin123'){
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
            }
            else{

            }
        })
    })
})