Feature: CRUD

Scenario: POST pessoa
  Given que o usuario precise cadastrar pelo menos uma pessoa 
  When o usuario envia uma requisicao POST para o endpoint
  Then o usuario recebera o código 200 OK, usuário cadastrado
