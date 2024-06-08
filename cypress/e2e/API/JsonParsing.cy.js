describe('JsonParsing', ()=>{
    it('JsonParsing', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
            expect(Response.body[0].id).to.equal(1)
            expect(Response.body[0].rating.rate).to.equal(3.9)

            expect(Response.body[19].price).to.equal(12.99)
            expect(Response.body[19].category).to.equal("women's clothing")
        })
    })

    it.only('Couting the price', ()=>{
        let totalprice
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit: 3}
        }).then((Response)=>{
            Response.body.forEach(element => {
                totalprice=totalprice+element.price                
            });
        })
        cy.log(totalprice)
    })
})