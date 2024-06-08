describe('Headers&Cookies', ()=>{
    let authToken=null
    before('Get Access Token', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients',
            headers: {'Content-Type':'application/json'},
            body:{
                clientName: 'Test',
                clientEmail: Math.random.toString(5).substring(2)+"@gmail.com",
            }
        }).then((Response)=>{
            authToken=Response.body.accessToken;
        })
    })

    before('Create Order using Access Token', ()=>{
        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': "Bearer "+authToken
            },
            body:{
                bookId: 2,
                customerName: "veenasri"
            }
        }).then((Response)=>{
            expect(Response.status).equal(201)
            expect(Response.body.created).to.eq(true)
        })
    })

    it('get all orders using accessToken', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api-glitch.me/orders/',
            headers: {
                'Content-Type':'Application/json',
                'Authorization': 'Bearer '+authToken
            },
            Cookies:{
                'cookieName': 'Mycookie'
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
            expect(Response.body).has.length(1)
        })
    })
})