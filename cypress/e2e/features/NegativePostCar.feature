Feature: CRUD

Scenario: POST Negative Dados Vazios
  Given que o usuário precise cadastrar pelo menos uma carro 
  And passo o JSON vazio do carro no body
  When o usuário envia uma requisicao POST para o endpoint
  Then o usuário recebera o código 400, usuário não pode ser cadastrado

Scenario: POST Negative Dados errados
  Given que o usuário precise cadastrar pelo menos uma carro 
  And passo o JSON com dados errados do carro no body
  When o usuário envia uma requisicao POST para o endpoint
  Then o usuário recebera o código 400 de erro, carro não pode ser cadastrado