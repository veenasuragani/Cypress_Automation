describe('HTTPRequests', ()=>{
    it('GET', ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    it('POST', ()=>{
        cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body:{                     
                    title: "post Request",
                    body: "This is post call",
                    userId: 1
                }
        })
        .its('status')
        .should('equal', 201)
    })

    it('PUT', ()=>{
        cy.request({
            method: 'Put',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body:{                     
                title: "put Request",
                body: "This is put call",
                userId: 1,
                id:1
            }
    })
    .its('status')
    .should('equal', 200)

    })

    it('DELETE', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal', 200)
    })
})