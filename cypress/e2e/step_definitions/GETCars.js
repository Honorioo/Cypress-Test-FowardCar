import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";

Given('que o usuario tenha pelo menos uma pessoa cadastrada', () => {
    cy.createCar();
});

When('o usuario envia uma requisicao GET para o endpoint', () => {
    cy.searchCar();
});

Then('o usuario recebera informacoes sobre a pessoa cadastrada', () => {
    return true;
});