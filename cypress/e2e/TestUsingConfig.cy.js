describe('Handling multiple environment', ()=>{
    it('Handling Multiple Environemnts', ()=>{
        cy.visit('');
        cy.log(Cypress.env('username'))
    })
})