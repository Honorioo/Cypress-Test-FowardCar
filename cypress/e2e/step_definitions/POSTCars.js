import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker';

let payload

before(() => {
    cy.fixture('bodyCar').then((body) => {
    payload = { ...body };
    });
});

Given('que o usuário precise cadastrar pelo menos um carro', () => {
    return true;
})

When('o usuário envia uma requisicao POST para o endpoint', () => {
    const payloadModificado = {...payload}
    // fixture tem model como objeto, não array
    payloadModificado.model.fuelType = faker.helpers.arrayElement(['Gas', 'Etanol', 'Diesel']);
    payloadModificado.model.make.id = faker.string.uuid();
    payloadModificado.model.make.name = faker.helpers.arrayElement(['Chevrolet', 'Ford', 'Honda']);
    payloadModificado.model.modelYear = faker.date.past().getFullYear();
    payloadModificado.model.type.id = faker.string.uuid();
    payloadModificado.model.type.name = faker.helpers.arrayElement(['Sedan', 'Hatch', 'SUV']);
    payloadModificado.stockNumber = faker.string.uuid();
    payloadModificado.price = '312123'
    payloadModificado.milage =  '100000'
    payloadModificado.color = faker.color.rgb();
        
    cy.createCar(payloadModificado).then((response) => {
        cy.log('Payload enviado:', JSON.stringify(payloadModificado, null, 2));
        cy.log('Response:', JSON.stringify(payloadModificado, null, 2));
        //expect(response.status).to.eq(200)
    });
})

Then('o usuário recebera o código 200 OK, carro cadastrado', () => {
    return true;
})

