describe('Hooks&Tags', ()=>{
    before(()=>{
        cy.log('====launching application====')
    })
    after(()=>{
        cy.log('=====close application=====')
    })
    beforeEach(()=>{
        cy.log('====login====')
    })
    afterEach(()=>{
        cy.log('====logout=====')
    })
    it('search', ()=>{
        cy.log('===searching====')
    })

    it('advanced search', ()=>{
        cy.log('=====advance search====')
    })

    it('limited no.of products', ()=>{
        cy.log('===limited no.of products====')
    })
})