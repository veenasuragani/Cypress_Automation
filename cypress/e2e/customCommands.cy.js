
describe('customCommands', ()=>{
    it('handling links', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        //click using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')


    })

    it('Overriding existing command', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')


    })

    it.only('login',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.login("testing@gmail.com", "test123")

    })
})