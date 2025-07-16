## Venera Analysis
# Projeto utilizado como Trabalho de Conclusão de Curso - TCC
# Bacharelado em Sistemas de Informação - UNIPAM - 2020

**Venera Analysis** é uma aplicação web desenvolvida com [Nuxt.js](https://nuxt.com), com foco em visualização de dados e análise gráfica utilizando o componente `DoughnutChart` e integração com o ecossistema Vuetify.

São 3 projetos, incluindo esse, que são

* 1 - [Venera-python-api](https://github.com/Hanekawa1/Venera-python-api): api responsável por coletar os comentários das redes sociais.
* 2 - [Venera-node-api](https://github.com/Hanekawa1/Venera-node-api): api responsável por realizar a análise de sentimento dos comentários coletados.
* 3 - [Venera-Analysis](https://github.com/Hanekawa1/Venera-Analysis): interface da aplicação.

## 🌐 Visão Geral

Este projeto tem como objetivo oferecer uma interface simples e visual para análise de dados, utilizando gráficos do tipo doughnut (rosca), organização modular de componentes e integração com Markdown.

---

## 🗂 Estrutura do Projeto

```
VENERA-ANALYSIS/
│
├── assets/                # Arquivos estáticos como imagens e fontes
├── components/            # Componentes reutilizáveis da aplicação
│   └── app/
├── config/
│   └── api.js             # Configurações e utilitários da API
├── content/
│   └── hello.md           # Conteúdo em Markdown
├── layouts/               # Estrutura de layout da aplicação
├── middleware/            # Middlewares do Nuxt (autenticação, redirecionamento, etc.)
├── pages/                 # Páginas do Nuxt.js
│   └── app/
│   └── index.vue
├── plugins/               # Plugins Nuxt.js
├── static/                # Arquivos estáticos públicos
├── store/                 # Vuex store (estado global)
├── package.json           # Dependências do projeto
├── Procfile               # Arquivo de deploy (Heroku)
└── README.md              # Descrição do projeto
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior recomendado)
- Yarn ou NPM

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Hanekawa1/Venera-Analysis.git
cd Venera-Analysis

# Instalar as dependências
yarn install
# ou
npm install
```

### Executar em modo desenvolvimento

```bash
yarn dev
# ou
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 📦 Build para Produção

```bash
yarn build
yarn start
# ou
npm run build
npm run start
```

---