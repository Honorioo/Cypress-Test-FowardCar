import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('que o usuario precise cadastrar pelo menos um carro', () => {
    return true;
})

When('o usuario envia uma requisicao POST para o endpoint', () => {
    cy.createCar();
})

Then('o usuario recebera o código 200 OK, usuário cadastrado', () => {
    return true;
})