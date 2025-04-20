<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Projeto de Automação com Cypress</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 3px;
    }
    pre {
      background-color: #eee;
      padding: 10px;
      overflow-x: auto;
      border-radius: 5px;
    }
    ul {
      margin-top: 0;
    }
  </style>
</head>
<body>

  <h1>🧪 Projeto de Automação de Testes com Cypress</h1>

  <p>Este projeto foi desenvolvido como parte de uma <strong>prova técnica para uma vaga Sênior</strong>, com foco em testes automatizados utilizando o <strong>Cypress</strong>, realizando chamadas a dois endpoints (<code>POST</code> e <code>GET</code>) e geração de <strong>relatórios com Allure Reports</strong>.</p>

  <h2>🚀 Tecnologias Utilizadas</h2>
  <ul>
    <li><a href="https://www.cypress.io/">Cypress</a></li>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://docs.qameta.io/allure/">Allure Reports</a></li>
  </ul>

  <h2>📌 Objetivo do Projeto</h2>
  <p>Automatizar chamadas a dois endpoints REST:</p>
  <ul>
    <li><strong>POST</strong>: Envio de dados simulando uma criação de recurso</li>
    <li><strong>GET</strong>: Consulta para validação dos dados criados</li>
  </ul>
  <p>A automação cobre:</p>
  <ul>
    <li>Validação do status de resposta</li>
    <li>Verificação de estrutura e conteúdo do JSON retornado</li>
  </ul>

  <h2>📁 Estrutura do Projeto</h2>
  <pre><code>.
├── cypress/
│   ├── e2e/
│   │   └── getUsers.cy.js
│   │   └── postUsers.cy.js
│   └── allure-results/
├── cypress.config.js
├── package.json
└── README.md
  </code></pre>

  <h2>🔧 Como executar o projeto</h2>
  <h3>1. Clone o repositório</h3>
  <pre><code>git clone https://github.com/EmanuelaGuima/project_aarin
cd project_aarin</code></pre>

  <h3>2. Instale as dependências</h3>
  <pre><code>npm install</code></pre>

  <h3>3. Execute os testes</h3>
  <pre><code>npx cypress run</code></pre>

  <h2>📊 Geração de Relatório (Allure)</h2>
  <p>Após a execução dos testes:</p>
  <ol>
    <li>Os resultados serão salvos na pasta <code>allure-results</code></li>
    <li>Para gerar e abrir o relatório:</li>
  </ol>
  <pre><code>npm install -g allure-commandline --save-dev
allure generate ./allure-results --clean &amp;&amp; allure open</code></pre>

  <h2>✅ Resultados esperados</h2>
  <ul>
    <li>Confirmação de que o endpoint POST cria corretamente os dados</li>
    <li>Validação do retorno do endpoint GET com os dados esperados</li>
    <li>Relatório Allure gerado com detalhes de cada etapa</li>
  </ul>

  <h2>👩‍💻 Sobre mim</h2>
  <p>Desenvolvido por <strong>Emanuela Guimarães</strong> como parte de um desafio técnico para vaga de QE Sênior.<br>

</body>
</html>