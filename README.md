## 🔖 Projeto

Este projeto foi criado para um teste de seleção para vaga de Desenvolvedor Front-end oferecido pela MKS - Sistemas. Onde o candidato deveria criaro um modelo de marketplace de produtos eletrônicos, tomando como base o design system fornecido. Deveria ser utilizado ReactJS, Redux toolkit, Styled-components e Jest, a partir da consulta a uma API REST para busca dos produtos.

O objetivo principal do teste é avaliar a capacidade de escrever código limpo, bem testado e reutilizável.

### Requisitos

A aplicação deve conter apenas uma página/rota e um carrinho.

- Loja: A lista de produtos deve ser buscada na API, e deve ser utilizado um shimmer/skeleton enquanto estiver em loading.

- Carrinho: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Deve ser implementado responsividade nas páginas, seguindo o modelo passado. Ao finalizar o projeto, deve ser feito o deploy da aplicação.

## 🚀 Tecnologias

O projeto foi criado com o framework [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- ReactJS
- Typescript
- Redux toolkit
- Styled-components
- Jest
- Testing library
- Axios

## 💻 Executando o projeto

Faça o clone do projeto, instale as dependências e depois rode o servidor:

```bash
# executando o projeto usando npm
npm install
npm run dev

# ou usando yarn
yarn
yarn dev
```

Para rodar os testes basta digitar os seguintes comandos no terminal:

```bash
# executando o projeto usando npm
npm run test

# ou usando yarn
yarn test
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## 🎬 Executando online

O deploy foi feito no sistema da Vercel.

Abra [https://mks-shop-test.vercel.app/](https://mks-shop-test.vercel.app/) com seu navegador para ver o resultado.