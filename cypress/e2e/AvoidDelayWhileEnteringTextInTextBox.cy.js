describe('avoiddelaywhileentering', ()=>{
    it('avoiddelay', ()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        cy.get('#user-message').type('test automation in cypress', {delay:0})
    })
})