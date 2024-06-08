describe('Handling Child Tabs', ()=>{
    it('childtabs-approch1', ()=>{
            cy.visit('https://the-internet.herokuapp.com/windows')
            cy.get('.example>a').invoke('removeAttr', 'target').click()
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
            cy.wait(2000)
            cy.go('back')
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows')
    })

    it.only('childtabs-approch2', ()=>{
            cy.visit('https://the-internet.herokuapp.com/windows')
            cy.get('.example>a').then((e)=>{
                const url=e.prop('href')
                cy.visit(url)
            })
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
            cy.wait(2000)
            cy.go('back')
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows')
    })
})