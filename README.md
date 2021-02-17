<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" width="120px" />
</h1>

<h3 align="center">
  SQL no Node.js com Sequelize
</h3>

## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-nodejs-sql`;
3. Rode `npm i` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `npx sequelize db:create` para criar o banco de dados;
6. Rode `npm run migrate` para executar as migrations;
7. Rode `npm dev` para iniciar o servidor;

## Rotas

1. Para criar usuarios acesse a rota [http://localhost:3333/users] utilizando o metodo POST;
Corpo da requicição:
`
{
	"name": "william",
	"email": "william007.gabriel@gmail.com",
	"age": 21
}
`

2. Para listar usuarios acesse a rota [http://localhost:3333/users] utilizando o metodo GET;
Resposta:
`
[
  {
    "id": 1,
    "name": "william",
    "email": "william007.gabriel@gmail.com",
    "age": 21,
    "createdAt": "2021-02-17T19:06:05.042Z",
    "updatedAt": "2021-02-17T19:06:05.042Z"
  },
  {
    "id": 2,
    "name": "taty",
    "email": "taty@gmail.com",
    "age": 21,
    "createdAt": "2021-02-17T21:05:57.884Z",
    "updatedAt": "2021-02-17T21:05:57.884Z"
  }
]
`

3. Para criar address acesse a rota [http://localhost:3333/users/:user_id/addresses] utilizando o metodo POST;
Corpo da requicição: 
`
{
	"zipcode": "15995-014",
	"street": "RJ", 
	"number": "650", 
}
`

4. Para listar address acesse a rota [http://localhost:3333/users/:user_id/addresses] utilizando o metodo GET;
Resposta:
`
{
  "id": 2,
  "name": "taty",
  "email": "taty@gmail.com",
  "age": 21,
  "createdAt": "2021-02-17T21:05:57.884Z",
  "updatedAt": "2021-02-17T21:05:57.884Z",
  "addresses": [
    {
      "id": 4,
      "zipcode": "15995-014",
      "street": "RJ",
      "number": "650",
      "createdAt": "2021-02-17T21:06:19.341Z",
      "updatedAt": "2021-02-17T21:06:19.341Z",
      "user_id": 3
    }
  ]
}
`

5. Para criar techs acesse a rota [http://localhost:3333/users/:user_id/techs] utilizando o metodo POST;
Corpo da requicição:
`
{
	"name": "node"
}
`

6. Para listar techs acesse a rota [http://localhost:3333/users/:user_id/techs] utilizando o metodo GET;
Resposta:
`
{
  "id": 1,
  "name": "william",
  "email": "william007.gabriel@gmail.com",
  "age": 21,
  "createdAt": "2021-02-17T19:06:05.042Z",
  "updatedAt": "2021-02-17T19:06:05.042Z",
  "techs": [
    {
      "id": 1,
      "name": "react",
      "createdAt": "2021-02-17T20:25:10.781Z",
      "updatedAt": "2021-02-17T20:25:10.781Z"
    },
    {
      "id": 4,
      "name": "java",
      "createdAt": "2021-02-17T20:34:30.882Z",
      "updatedAt": "2021-02-17T20:34:30.882Z"
    },
    {
      "id": 3,
      "name": "node",
      "createdAt": "2021-02-17T20:34:23.053Z",
      "updatedAt": "2021-02-17T20:34:23.053Z"
    }
  ]
}
`

7. Para apagar techs acesse a rota [http://localhost:3333/users/:user_id/techs] utilizando o metodo DELETE;
Corpo da requicição:
`
{
	"name": "node"
}
`

8. Para listar techs acesse a rota [http://localhost:3333/users/techs] utilizando o metodo GET;
Resposta:
`
[
  {
    "id": 1,
    "name": "react",
    "createdAt": "2021-02-17T20:25:10.781Z",
    "updatedAt": "2021-02-17T20:25:10.781Z"
  },
  {
    "id": 2,
    "name": "vue",
    "createdAt": "2021-02-17T20:25:46.231Z",
    "updatedAt": "2021-02-17T20:25:46.231Z"
  },
  {
    "id": 3,
    "name": "node",
    "createdAt": "2021-02-17T20:34:23.053Z",
    "updatedAt": "2021-02-17T20:34:23.053Z"
  }
]
`

9. Para realizar filtros entre users, address e techs acesse a rota [/reports/:email/:street/:tech] utilizando o metodo GET;
Resposta:
`
[
  {
    "id": 1,
    "name": "william gs",
    "email": "williams@gmail.com",
    "addresses": [
      {
        "id": 1,
        "zipcode": "15995-014",
        "street": "SP",
        "number": "650"
      }
    ],
    "techs": [
      {
        "id": 1,
        "name": "react"
      }
    ]
  }
]
`