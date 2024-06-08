describe('queryParameter', ()=>{
    it('queryParameter', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {page: 2}
        })
        .then((Response)=>{
            expect(Response.status).to.eq(200)
            expect(Response.body.page).equal(2)
            expect(Response.body.data).has.length(6)
            expect(Response.body.data[0]).has.property('first_name', "Michael")
            expect(Response.body.data[0]).have.property('id', 7)
        })
    })

    it.only('queryParameter', ()=>{
        const queryparameter={page:2}
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryparameter
        })
        .then((Response)=>{
            expect(Response.status).to.eq(200)
            expect(Response.body.page).equal(2)
            expect(Response.body.data).has.length(6)
            expect(Response.body.data[0]).has.property('first_name', "Michael")
            expect(Response.body.data[0]).have.property('id', 7)
        })
    })
})