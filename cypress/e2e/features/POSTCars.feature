Feature: CRUD

Scenario: POST pessoa
  Given que o usuário precise cadastrar pelo menos uma carro 
  When o usuário envia uma requisicao POST para o endpoint
  Then o usuário recebera o código 200 OK, carro cadastrado
