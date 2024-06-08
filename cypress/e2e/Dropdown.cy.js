describe('DropDownSuite',()=>{
    it.skip('Select dropdown', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html?src=homepage")
        cy.get("#zcf_address_country").select('India')
        cy.get("#zcf_address_country").should('have.value', 'India')
    })

    it.skip('bootstrap dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Japan").type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', 'Japan')

    })

    it.skip('autosuggest static dropdown', ()=>{
        cy.visit("https://www.wikipedia.org")
        cy.get("#searchInput").type("delhi")
        cy.get(".suggestion-text").should('have.length', 6)
        cy.get(".suggestion-text").contains('Delhi University').click()
    })

    it('autosuggest dynamic dropdown', ()=>{
        cy.visit("https://www.google.com")
        cy.get("#APjFqb").type("Cypress Automation")
        cy.get(".wM6W7d>span").should('have.length', 13)
        cy.get(".wM6W7d>span").each( ($el, index, $list) =>{
            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()
            }
        })
        cy.get("#APjFqb").should('have.value', 'cypress automation tutorial')
    })

})