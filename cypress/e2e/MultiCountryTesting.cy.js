describe('Testing Multiple Countries', ()=>{
    const country_code=['/in/', '/ae/', '/uk/', '/ca/']
    it('MultiCountries', ()=>{        
        country_code.forEach((country)=>{
            cy.visit(`https://www.apple.com${country}`)
            cy.url().should('include', country)
            cy.verifycountry(country).then((text)=>{
                cy.get('[title="Choose your country or region"]').should('have.text', text)
            })
        })
    })
})