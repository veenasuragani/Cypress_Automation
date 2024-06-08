require('@4tw/cypress-drag-drop')

describe('Mouse Operations', ()=>{

    it.skip('MouseHover', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mousehover').click()
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible')

    })

    it.skip('rightclick', ()=>{
        //Approch1
        cy.get('locator of the element').trigger('contextmenu')
        //Approch2
        cy.get('locator of the element').rightclick()
    })

    it.skip('Double Click', ()=>{
        //Approch1
        cy.get('locator').trigger('dblclick')
        //approch2
        cy.get('locator').dblclick()
    })

    it.skip('Drap and Drop', ()=>{
        //Approch1
        //if the element is hidden sometimes, it using force true, it will forecefully click on the element
        cy.get('locator').drag('locator', {force:true}) 
    })
    it.skip('scrolling', ()=>{
        cy.visit('url')
        cy.get('locator which requires to be scrolled into view').scrollIntoView({duration:2000})
    })


})