Feature: CRUD

Scenario: GET pessoa
  Given que o usuario tenha pelo menos uma pessoa cadastrada
  When o usuario envia uma requisicao GET para o endpoint
  Then o usuario recebera informacoes sobre a pessoa cadastrada
