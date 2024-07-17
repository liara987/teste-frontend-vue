# Front end test

bem-vindo ao teste de front end do enjoei!

## Gerenciador de pacotes

para executar o projeto é importante ter o gerenciador de pacotes `yarn` em sua máquina, caso não tenha você pode obtê-lo através do npm:

```
$ npm install -g yarn
```

## Servidor de desenvolvimento
com o gerenciador de pacotes configurado, instale as dependências do projeto:

```
$ yarn install
```

suba o servidor de desenvolvimento com o comando:

```
$ yarn dev
```

acesse `http://localhost:3000/` para poder ler as instruções do teste.

## Testes automatizados

os testes automatizados podem ser executados com o comando:

```
$ yarn test
```

## Estrutura de componentes e páginas

### Componentes

- [x] Navbar
- [x] Card:
  - **Tem**
    - [x] imagem
    - [x] preço
  - **Pode ter**
    - [x] desconto
- [x] Loading
- [x] Pagination
- SearchBar
  - [ ] Deve pegar oque o foi digitado
  - [ ] Quando começar a digitar mostrar botão outlined de limpar campo
  - [ ] Quand apertar no enter ou clickar no icone de lupa fazer a requisição na API
  - [ ] Quando fazer a requisição mostrar quantos itens foram encontrados
  - [ ] Se nenhum item for encontrado redirecionar para pagina de not found
  - [ ] Quando clickar em limpar busca voltar para home

### Páginas

- [x] PageNotFound

### Testes unitários
