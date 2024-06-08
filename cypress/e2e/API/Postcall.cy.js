describe('Different Approches of post call', ()=>{
    it('Approch1', ()=>{
        const requestBody={
            title:"VeenaSri",
            body:"veenasri@gmail.com",
            userId:1
        }
        cy.request({
                method:'POSt',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body: requestBody
        })
        .then((Response)=>{
            expect(Response.status).to.eq(201)
            expect(Response.body.title).to.eq('VeenaSri')
            expect(Response.body.body).to.eq('veenasri@gmail.com')
        })
    })

    it('Approch2', ()=>{
        const requestBody={
            title:Math.random().toString(4).substring(2),
            body:Math.random().toString(8).substring(4),
            userId:Math.random()
        }
        cy.request({
                method:'POST',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body: requestBody
        })
        .then((Response)=>{
            expect(Response.status).to.eq(201)
            expect(Response.body.title).to.eq(requestBody.title)
            expect(Response.body.body).to.eq(requestBody.body)
        })
    })

    it('Approch3', ()=>{
        cy.fixture('api').then((data)=>{
            const requestBody=data       
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: requestBody
        })
        .then((Response)=>{
            expect(Response.status).to.eq(201)
            expect(Response.body.title).to.eq(requestBody.title)
        })
    })
    })
})