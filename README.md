# Prova-p2

# API Adoção de Pets

## Descrição

API RESTful desenvolvida para gerenciamento de adoção de animais de estimação.

O sistema permite:

* Cadastro de usuários
* Login com JWT
* Cadastro de pets
* Processo de adoção
* Controle de permissões por perfil

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* JWT
* Bcrypt
* ESLint
* Prettier

## Instalação

```bash
npm install
```

## Executar Projeto

```bash
npm run dev
```

## Estrutura

src/

* config
* controllers
* database
* middlewares
* models
* routes
* services

## Autenticação

O sistema utiliza JWT.

## Perfis

### admin

* Gerenciar usuários
* Gerenciar pets
* Visualizar adoções

### adopter

* Atualizar próprio perfil
* Adotar pets