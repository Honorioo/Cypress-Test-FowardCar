Feature: CRUD

Scenario: POST Negative Dados Vazios
  Given que o carro precise cadastrar pelo menos uma pessoa 
  And passo o JSON vazio do carro no body
  When o carro envia uma requisicao POST para o endpoint
  Then o carro recebera o código 400, usuário não pode ser cadastrado

Scenario: POST Negative Dados errados
  Given que o carro precise cadastrar pelo menos uma pessoa 
  And passo o JSON com dados errados do carro no body
  When o carro envia uma requisicao POST para o endpoint
  Then o carro recebera o código 400 de erro, usuário não pode ser cadastrado