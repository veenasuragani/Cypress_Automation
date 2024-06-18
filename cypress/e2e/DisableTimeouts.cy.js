describe('disable_Timeouts', ()=>{
    it('disableTimeouts', ()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account.com')
        //if locator is not found, it will wait for 4s to throw an error, if we mention timeout as below then it immediately throws an error
        cy.get('[id="input-email1"]', {timeout:0}.type("testing@gmail.com"))
    })
})