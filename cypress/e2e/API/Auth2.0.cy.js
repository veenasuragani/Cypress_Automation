describe('OAuth2.0', ()=>{
    let accessToken=""
    it('getAccessToken', ()=>{
        cy.request({
            method: 'POST',
            url: '',
            qs:{
                client_id:'',
                client_secret: '',
                code:'' //this will expire for very short period, need to generate frequently
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
            const param=Response.body.split('&')
            accessToken=param[0].split('=')[1]
        })
    })

    it('using access token',()=>{
        cy.request({
            method: 'GET',
            url: '',
            headers:{
                Authorization: 'Bearer '+accessToken

            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })
})