describe('IgnoreCase', ()=>{
    it('ignorecase', ()=>{
        cy.visit('')
        cy.contains('BOOKS',{matchCase:false}).click()
    })
})