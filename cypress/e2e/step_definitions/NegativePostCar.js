import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker';

let payload;
let payloadModificado;
let payloadModificadoErro

before(() => {
    cy.fixture('bodyCar').then((body) => {
        payload = { ...body };
    });
});

Given('que o usuário precise cadastrar pelo menos um carro', () => {
    return true;
});

And('passo o JSON vazio do carro no body', () => {
    payloadModificado = { ...payload };

    // Deixa todos os campos vazios
    payloadModificado.model.class = "com.ca.lisa.demo.CarModel";
    payloadModificado.model.id = '';
    payloadModificado.model.fuelType = '';
    payloadModificado.model.make.class = '';
    payloadModificado.model.make.id = '';
    payloadModificado.model.make.name = '';
    payloadModificado.model.modelYear = '';
    payloadModificado.model.name = '';
    payloadModificado.model.subName = '';
    payloadModificado.model.type.class = '';
    payloadModificado.model.type.id = '';
    payloadModificado.model.type.name = '';
    payloadModificado.model.stockNumber = '';
    payloadModificado.model.price = '';
    payloadModificado.model.milage = '';
    payloadModificado.model.owners = '';
    payloadModificado.model.color = '';
    payloadModificado.model.carTrim = '';
    payloadModificado.model.transmission = '';
    payloadModificado.model.vin = '';
    payloadModificado.model.options = '';
    payloadModificado.model.image1 = '';
    payloadModificado.model.image2 = '';

    cy.log('Payload enviado:', JSON.stringify(payloadModificadoErro, null, 2));
});

When('o usuário envia uma requisicao POST negativa para o endpoint', () => {
    cy.postNegative('carShop/cars', payloadModificado).then(() => {
        cy.log('Response:', JSON.stringify(payloadModificadoErro, null, 2));
    });;
});

Then('o usuário recebera o código 400, usuário não pode ser cadastrado', () => {
    cy.log('Cadastro ERRADO, enviando json VAZIO');
});

And('passo o JSON com dados errados do carro no body', () => {
    payloadModificadoErro = { ...payload };
    // Preenche com dados "errados"
    payloadModificadoErro.model.fuelType = faker.helpers.arrayElement(['Sedan', 'Hatch', 'SUV']); //Dado errado
    payloadModificadoErro.model.make.id = faker.string.uuid();
    payloadModificadoErro.model.make.name = faker.helpers.arrayElement(['Chevrolet', 'Ford', 'Honda']); //Dado errado
    payloadModificadoErro.model.modelYear = faker.date.past().getFullYear();
    payloadModificadoErro.model.type.id = faker.string.uuid();
    payloadModificadoErro.model.type.name = faker.helpers.arrayElement(['Gas', 'Etanol', 'Diesel']);
    payloadModificadoErro.model.stockNumber = faker.person.firstName(); //Dado errado
    payloadModificadoErro.model.price = '312123';
    payloadModificadoErro.model.milage = '100000';
    payloadModificadoErro.model.color = faker.color.rgb();
});

When('o usuário envia uma requisicao POST negativa com dados errados para o endpoint', () => {
    cy.postNegative('carShop/cars', payloadModificadoErro).then(() => {
        cy.log('Payload enviado:', JSON.stringify(payloadModificadoErro, null, 2));
        cy.log('Response:', JSON.stringify(payloadModificadoErro, null, 2));
    });
});

Then('o usuário recebera o código 400 de erro, carro não pode ser cadastrado', () => {
    cy.log('Cadastro ERRADO, enviando json COM DADOS ERRADOS');
});
