import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário precise cadastrar pelo menos uma carro', () => {
    return true;
})

And('passo o JSON vazio do carro no body', () => {
    cy.bodyEmpty();
})

When('o usuário envia uma requisicao POST para o endpoint', () => {
    cy.postNegativeEmptyCar();
})


Then('o usuário recebera o código 400, usuário não pode ser cadastrado', () => {
    cy.log('Cadastro ERRADO, enviando json VAZIO');  
})

And('passo o JSON com dados errados do carro no body', () => {
    cy.bodyCarErro();
})

When('o usuário envia uma requisicao POST para o endpoint', () => {
    cy.postNegativeEmptyCar();
})

Then('o usuário recebera o código 400 de erro, usuário não pode ser cadastrado', () => {
    cy.log('Cadastro ERRADO, enviando json COM DADOS ERRADOS');  
})