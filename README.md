# React Pokemon GraphQL

## Deploy

- [hugo-marcelo.gitlab.io/pokedex-gql](https://hugo-marcelo.gitlab.io/pokedex-gql/)

## 💼 Sobre o projeto

Crie um projeto utilizando React e a API GraphQL Pokémon (https://github.com/lucasbento/graphql-pokemon) seguindo as especificações abaixo.

Funcionalidades esperadas:

- Crie uma lista de cards para exibir os pokemons mostrando a imagem, o nome e os tipos dele; - Possibilite o usuário buscar pokemons; - Na lista, o usuário pode ir para a página de detalhes do pokemon e ver a lista de ataques dele (além das mesmas informações exibidas no card); - Crie um formulário para editar um pokemon (salvando apenas no client-side);

Restrições técnicas:

- Utilize o create-react-app como base; - Utilize redux para gerenciar o estado; - Utilize react-router para trocar de página; - Utilize @testing-library/react para testes;

Diferenciais:

- Crie uma pipeline no GitLab; (Exemplo: build => test => deploy); - Entregar o projeto publicado e funcionando em alguma URL; - Garanta 100% de cobertura no projeto com testes unitários; - Substituir o redux pelo Local state management do Apollo Client;

## ⚙️ Tecnologias

- [React.js](https://pt-br.reactjs.org/)
- [Material-UI framework](https://material-ui.com/pt/)
- [Graphql](https://graphql.org/)
- [Jest](https://jestjs.io/en/)
- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [Docker](https://www.docker.com/)

## 💻 Executando o projeto

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/hugo-marcelo/pokedex-gql && cd pokedex-gql
```

1. Utilizando Npm

```sh
$ npm install
$ npm run test
$ npm start
```

2. Utlizando yarn

```sh
$ yarn
$ yarn test
$ yarn start
```

3. Utilizando Docker

```sh
$ docker build . -t pokedex-gql
$ docker container run -it -p 5000:5000 pokedex-gql:latest
```

Made by Hugo Marcelo 👋 [Veja meu linkedin](https://www.linkedin.com/in/hugo-marcelo-dev/)
