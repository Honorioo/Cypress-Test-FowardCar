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
const baseUrl = Cypress.env('baseUrl')

Cypress.Commands.add('getSearch', (url) => {
    cy.request({
        method: 'GET',
        url: baseUrl + url/* 'carShop/cars' */,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
})

Cypress.Commands.add('postBody', (url, body) => {
    cy.request({
        method: 'POST',
        url: baseUrl + url,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
})


//TESTES NEGATIVOS
Cypress.Commands.add('postNegative', (url, body) => {
    cy.request({
        method: 'POST',
        url: baseUrl + url,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(400)
        cy.log(response.body)
    })
})