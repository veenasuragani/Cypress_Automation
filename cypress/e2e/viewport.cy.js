describe('viewport',  ()=>{
    it('viewport', ()=>{
       // cy.viewport(990, 535)
       cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com')
    })
})