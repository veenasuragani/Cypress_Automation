// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

//const cypress = require("cypress")

Cypress.Commands.add('getIframe', (iframeLocator)=>{
    return cy.get(iframeLocator)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
})
Cypress.Commands.add('clickLink', (label)=>{
    cy.get('a').contains(label).click()

})

// Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options={})=>{
//     if(typeof text==='object'){
//         options=text
//         text=filter
//         filter=undefined
//     }
//     options.matchCase= false
//     return originalFn(subject, filter, text, options)
// })

Cypress.Commands.add('login', (username, password)=>{
    cy.get('#Email').type(username)
    cy.get('#Password').type(password)
    cy.get("button[class='button-1 login-button']").click()
})