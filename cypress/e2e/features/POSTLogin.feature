Feature: CRUD

Scenario: POST pessoa
  Given que o usuário precise cadastrar pelo menos uma pessoa 
  When o usuário envia uma requisicao POST para o endpoint de login de usuário
  Then o usuário recebera o código 200 OK, usuário logado