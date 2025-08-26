Feature: CRUD

Scenario: POST pessoa
  Given que o carro precise cadastrar pelo menos uma pessoa 
  When o carro envia uma requisicao POST para o endpoint
  Then o carro recebera o código 200 OK, carro cadastrado
