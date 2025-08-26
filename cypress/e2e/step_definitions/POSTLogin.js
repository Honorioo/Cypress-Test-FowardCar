import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('que o usuário precise cadastrar pelo menos uma pessoa', () => {
    return true;
})

When('o usuário envia uma requisicao POST para o endpoint', () => {
    cy.createUser();
})

Then('o usuário recebera o código 200 OK, usuário cadastrado', () => {
    return true;
})