Feature: CRUD

Scenario: POST Negative Dados Vazios
  Given que o usuário precise cadastrar pelo menos um carro
  And passo o JSON vazio do carro no body
  When o usuário envia uma requisicao POST negativa para o endpoint
  Then o usuário recebera o código 400, usuário não pode ser cadastrado

Scenario: POST Negative Dados errados
  Given que o usuário precise cadastrar pelo menos um carro
  And passo o JSON com dados errados do carro no body
  When o usuário envia uma requisicao POST negativa com dados errados para o endpoint
  Then o usuário recebera o código 400 de erro, carro não pode ser cadastrado

