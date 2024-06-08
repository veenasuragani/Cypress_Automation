describe('browser navigations', ()=>{
    it('browsernavigations', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
        cy.get(':nth-child(1) > .category-item > .title > a').click()
        cy.get("div[class='page-title'] h1").should('have.text', 'Electronics')

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store')
        cy.go('forward')
        cy.get("div[class='page-title'] h1").should('have.text', 'Electronics')

        cy.go(-1)
        cy.title().should('eq', 'nopCommerce demo store')
        cy.go(1)
        cy.get("div[class='page-title'] h1").should('have.text', 'Electronics')

        cy.reload()

    })
})