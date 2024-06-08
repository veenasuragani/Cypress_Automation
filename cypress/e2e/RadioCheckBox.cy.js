describe('radio&checkbox', ()=>{
    it('radiobuttons', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com')
        //verifying the visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
        //check any radiobutton
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('be.not.checked')

    })

    it.only('checkboxes', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com')
        //verifying the visibility of checkboxes

        cy.get(".form-check.form-check-inline input[type=checkbox]").check().should('be.checked')
        cy.get(".form-check.form-check-inline input[type=checkbox]").uncheck().should('be.not.checked')

        cy.get("#wednesday").check().should('be.checked')
        cy.get("#wednesday").uncheck().should('be.not.checked')

        cy.get(".form-check.form-check-inline input[type=checkbox]").first().check().should('be.checked')
        cy.get(".form-check.form-check-inline input[type=checkbox]").last().check().should('be.checked')       

    })
})