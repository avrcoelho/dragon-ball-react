# DragonBall

> Aplicação que lista os personagens e planetas do DragonBall, utilizando a API [DragonBallAPI](https://dragon-ball-api.herokuapp.com)

## Demonstação

A aplicação está hospedada no [netlify](https://www.netlify.com/). Acesse o link [https://brave-kowalevski-ec8343.netlify.com/](https://brave-kowalevski-ec8343.netlify.com/) para executa-la.

## Instalação

_Tenha instalado em sua maquina o [Git](http://git-scm.com/) e [Node.js](http://nodejs.org/) 10.0.0 (ou superior). Caso prefira, instale o [Yarn](https://yarnpkg.com/)._

1. Fork este repositório e crie um novo branch — ou crie um novo branch caso tenha permissão.

2. Depois de obter sua cópia local, instale suas dependências:

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn
   ```

4) Crie um arquivo `.env` no diretório raiz, com as sequintes variaveis:

   ```sh
   REACT_APP_URL_CORS=https://cors-anywhere.herokuapp.com
   REACT_APP_URL_API=https://dragon-ball-api.herokuapp.com
   ```

## Execução

Após a instalação, você podera executar a aplicação em modo de desenvolvimento:

```sh
npm start
```

ou

```sh
yarn start
```

_Isso iniciará o servidor em `localhost:3000`_

## Build

Execute:

```sh
npm run build
```

ou

```sh
yarn build
```

_Isso irá criar um diretório `build` na raiz, com a aplicacão preparada para ser executada em producão._

## Testes

_Todos os arquivos de testes terminam com `.spec.tsx`_

Use o seguinte comando para executar os testes:

```sh
npm test
```

ou

```sh
yarn test
```

_Caso deseja gerar os aquivos de Coverage, execute:_

```sh
npm run coverage
```

ou

```sh
yarn coverage
```

_Isso irá criar um diretório `__tests__` dentro do diretório `src` com os arquivos de Coverage_

## Dependecias utilizadas

- [axios](https://github.com/axios/axios) - Requisições HTTP
- [font-awesome](https://fontawesome.com/) - Icones
- [redux](https://redux.js.org/) - Compartilhamento de estado entre componentes
- [reacr-redux](https://react-redux.js.org/) - Ligação do react com redux
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Gerenciamento de rotas a aplicação
- [react-toastify](https://github.com/fkhadra/react-toastify) - Exibir mensagens de erro
- [redux-saga](https://redux-saga.js.org/) - Lhe dar com requisições assincronas junto com o redux
- [styled-components](https://styled-components.com/) - Estilização dos elementos
- [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) - Actions no redux

## Licença

[MIT](https://opensource.org/licenses/MIT)
