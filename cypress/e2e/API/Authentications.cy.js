describe('Different types of Authentications', ()=>{
    it('basic', ()=>{
        cy.request({
            method:'GET',
            url: '',
            auth:{
                user: '',
                pass: ''
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })
    
    it('digest authentication', ()=>{
        cy.request({
            method:'GET',
            url: '',
            auth:{
                username:'',
                password:'',
                method: 'digest'
            }
        })
    }).then((Response)=>{
        expect(Response.status).to.eq(200)
    })

    const token="ghp_jgfusyafduksgfyrfgiusaghdfjgeir"
    it('Bearer Token Auth', ()=>{
        cy.request({
            method: 'GET',
            url: '',
            headers:{
                Authorization: 'Bearer '+token
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })

    it('API Key Auth', ()=>{
        cy.request({
            method: 'GET',
            url: '',
            qs:{
                appid: 'ksjlagdfiwugf273659o48y598shdjchsdiuf'
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })
})