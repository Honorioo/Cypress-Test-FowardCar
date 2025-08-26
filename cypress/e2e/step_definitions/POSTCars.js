import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('que o carro precise cadastrar pelo menos um carro', () => {
    return true;
})

When('o carro envia uma requisicao POST para o endpoint', () => {
    cy.createCar();
})

Then('o carro recebera o código 200 OK, carro cadastrado', () => {
    return true;
})