import { faker } from "@faker-js/faker";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let payload;

let userName = 'lisa.simpson'
let password = 'golisa'

before(() => {
    cy.fixture('bodyUser').then((body) => {
        payload = { ...body };
    });
});

Given('que o usuário precise cadastrar pelo menos uma pessoa', () => {
    return true;
})

When('o usuário envia uma requisicao POST para o endpoint de login de usuário', () => {
    const payloadUser = {...payload}
    payloadUser.username = userName;
    payloadUser.password = password;

    cy.log('Payload enviado:', JSON.stringify(payloadUser, null, 2));
    
    cy.postBody('api/login', payloadUser).then(() => {
        cy.log('Response:', JSON.stringify(payloadUser, null, 2));
    });
})

Then('o usuário recebera o código 200 OK, usuário logado', () => {
    return true;
})