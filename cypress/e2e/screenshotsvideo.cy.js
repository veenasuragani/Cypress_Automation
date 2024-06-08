describe('screenshots&Videos', ()=>{
    it('screenshots', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.screenshot('homepage')
        cy.get("img[alt='nopCommerce demo store']").screenshot('logo')
        //it will automatically create screenshot and video when test got failed only when we run through CLI        
        
        cy.get("h2[class='title'] a[title='Show products in category Electronics']").click()
        cy.get("div[class='page-title'] h1").should('have.text', 'Electroni')

    })
})