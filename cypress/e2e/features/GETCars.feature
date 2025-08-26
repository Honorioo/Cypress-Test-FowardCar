Feature: CRUD

Scenario: GET Cars
  Given que o usuario tenha pelo menos um carro cadastrada
  When o usuario envia uma requisicao GET para o endpoint
  Then o usuario recebera informacoes sobre a pessoa cadastrada
