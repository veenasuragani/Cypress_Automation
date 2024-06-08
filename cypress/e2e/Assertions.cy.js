describe('assertions', ()=>{
    it('Implicit assertions', ()=>{
        //Approch1
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive.com')
        cy.url().should('not.contain', 'orange123')
        cy.url().should('include', 'orangehrm')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        //Approch2
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
        .should('contain', 'orangehrmlive.com')
        .should('not.contain', 'orange123')
        .should('include', 'orangehrm')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        //Approch3
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
        .should('contain', 'orangehrmlive.com')
        .and('not.contain', 'orange123')
        .and('include', 'orangehrm')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo is visible or not 
        cy.get('.orangehrm-login-branding > img').should('exist') //logo is exist
        cy.get("a").should('have.length','5')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')



    })

    it.only('explicit assertions', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        let expname='Dashboard'
        cy.xpath("//h6[normalize-space()='Dashboard']").then((x)=>{
            let actualname=x.text()
            //BDD Style
            expect(actualname).to.equal(expname)
            expect(actualname).to.not.equal(expname)
            //TDD Style
            assert.equal(actualname,expname)
            assert.notEqual(actualname,expname)

        })

    })
})