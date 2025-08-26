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
import { faker } from '@faker-js/faker';
const url = Cypress.env('baseUrl')

//body automático
const bodyCar  = {
    "model": {
        "class": "com.ca.lisa.demo.CarModel",
        "id": faker.string.uuid(),
        "fuelType": faker.helpers.arrayElement(['Gas', 'Etanol', 'Diesel']),
        "make": {
            "class": "com.ca.lisa.demo.CarMake",
            "id": faker.string.uuid(),
            "name": faker.helpers.arrayElement(['Chevrolet', 'Ford', 'Honda']),
        },
        "modelYear": faker.date.past().getFullYear(),
        "name": "TL-AWD",
        "subName": "SH-AWD",
        "type": {
            "class": "com.ca.lisa.demo.CarType",
            "id": faker.string.uuid(),
            "name": faker.helpers.arrayElement(['Sedan', 'Hatch', 'SUV'])
        }
    },
    "stockNumber": faker.string.uuid(),
    "price": "312123",
    "milage": "55",
    "owners": "rrfgrge",
    "modelYear":  faker.date.past().getFullYear(),
    "color": faker.color.rgb(),
    "carTrim": "afsfew",
    "engine": "rfrffe",
    "transmission": "grrf",
    "vin": "fe",
    "options": "ewwe",
    "image1": "dewdwef",
    "image2": "wefew"
}

//body automático vazio
const bodyCarEmpty = {
    "model": {
        "class": "com.ca.lisa.demo.CarModel",
        "id": "",
        "fuelType": "",
        "make": {
            "class": "",
            "id": "",
            "name": "",
        },
        "modelYear": "",
        "name": "",
        "subName": "",
        "type": {
            "class": "",
            "id": "",
            "name": ""
        }
    },
    "stockNumber": "",
    "price": "",
    "milage": "",
    "owners": "",
    "modelYear":  "",
    "color": "",
    "carTrim": "",
    "engine": "",
    "transmission": "",
    "vin": "",
    "options": "",
    "image1": "",
    "image2": ""
}

Cypress.Commands.add('searchCar', () => {
    cy.request({
        method: 'GET',
        url: url + 'carShop/cars',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
})

Cypress.Commands.add('createCar', () => {
    cy.request({
        method: 'POST',
        url: url + 'carShop/cars',
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyCar
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
        cy.wrap(response.body.id).as('createdUserId');
    })
})

//TESTES NEGATIVOS
Cypress.Commands.add('bodyEmpty',() => {
    cy.log(bodyCarEmpty)
})

Cypress.Commands.add('postNegativeCar', () => {
    cy.request({
        method: 'POST',
        url: url + 'carShop/cars',
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyCarEmpty,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
})