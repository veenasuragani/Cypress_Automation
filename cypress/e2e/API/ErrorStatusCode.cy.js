describe('HowtohandleErrorStatusCodeInCypress', ()=>{
    it('HandleErrorStatusCode', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.be.eq(404)
        })
    })
})