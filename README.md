# Cypress-Test-FowardCar

> Projeto de automação de testes com **Cypress** integrado ao **Cucumber (BDD)** para validação da aplicação FowardCar.

---

## 🚀 Como usar

### Pré-requisitos
- **Node.js** (versão LTS recomendada)
- **npm**

### Instalação
```bash
# clone o repositório
git clone https://github.com/Honorioo/Cypress-Test-FowardCar.git
cd Cypress-Test-FowardCar

# instale as dependências
npm install

Executando os testes

Abrir o Cypress interativo:

npx cypress open

Rodar todos os testes em modo headless:

npx cypress run

📂 Estrutura

cypress/
├─ e2e/            # definições de steps
├─ fixtures/       # massa de dados
├─ support/        # comandos customizados e hooks globais
└─ features/       # cenários em Gherkin (.feature)
cypress.config.js
package.json

🧩 Cucumber (BDD)

    Cenários ficam nos arquivos .feature dentro da pasta features/.

    Steps ficam em cypress/e2e/ utilizando Given / When / Then.

Exemplo de cenário:

Feature: Login
  Scenario: Login bem-sucedido
    Given que o usuário esteja na página de login
    When informar credenciais válidas
    Then deve visualizar a página inicial do sistema

🤝 Contribuição

    Crie uma branch: git checkout -b feat/nova-feature

    Commit: git commit -m "feat: descrição"

    Push: git push origin feat/nova-feature

    Abra um Pull Request
