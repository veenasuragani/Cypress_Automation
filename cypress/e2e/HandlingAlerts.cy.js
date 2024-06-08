describe('Alerts suite', ()=>{
    //1)Cypress can handle alerts automatically in accepting the alerts but if we want to perform any other validations 
    //or if we want to cancel the alerts then we have to write different events.
    //2)Cypress can handle normal Alert, Confirm Alert, Prompt Alert and aunthenticated Alerts
    it('Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })
        cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })
    it('ConfirmAlert - OK', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (c)=>{
            expect(c).to.contain('I am a JS Confirm')
        })
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it('ConfirmAlert-Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (c)=>{
            expect(c).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm', ()=> false) //By Default cypress will accept the alert, inorder to cancel the alert we need to write this line
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

    it.only('PromptAlert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text', 'You entered: Welcome')
    })

    it('authenticating Alert', ()=>{
        //Approch1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{ username: "admin",
                                                                          password: "admin"
                                                                        }})
        cy.get("p").should('have.contain', 'Congratulations')

        //Approch2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("p").should('have.contain', 'Congratulations')

        


    })

})