describe('API_Chaining', ()=>{
    //POST https://gorest.co.in/public/v2/users
    //PUT https://gorest.co.in/public/v2/users/${userId}
    //DELETE https://gorest.co.in/public/v2/users/${UserId}
    it('API_Chaining', ()=>{
        const authToken='Bearer kjsfilwqefiwufhcdslakjcvouair'
        it('create update delete', ()=>{
            cy.request({
                method: 'POST',
                url:'https://gorest.co.in/public/v2/users',
                body:{
                    name: 'joh',
                    email:'john@gmail.com'
                },
                headers:{
                    Authorization:authToken
                }
            }).then((Response)=>{
                expect(Response.status).to.eq(201)
                const userId=Response.body.id
                cy.request({
                    method: 'PUT',
                    url:'https://gorest.co.in/public/v2/users/${userId}',
                    body:{
                        name: 'veena'
                    },
                    headers:{
                        Authorization:authToken
                    }
                }).then((Response)=>{
                    expect(Response.status).to.eq(200)
                    cy.request({
                        method: 'DELETE',
                        url:'https://gorest.co.in/public/v2/users/${UserId}',
                        headers:{
                            Authorization:authToken
                        }
                    }).then((Response)=>{
                        expect(Response.status).to.eq(201)
                    })
                })
            })
        })
    })
})