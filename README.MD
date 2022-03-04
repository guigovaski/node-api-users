# Projeto API de usuários que faz conexão diretamente com o Banco de dados
A API adiciona, apresenta, atualiza e deleta usuários (famoso CRUD)

## Para rodar o projeto na sua máquina:

### Você precisa ter o nodemon instalado globalmente. Para instalar:
`npm install nodemon -g or yarn add nodemon -g`

### Para clonar
`git clone https://github.com/guigovaski/node-api-users`

### Para instalar as dependências
`npm install or yarn install`

### Para rodar
`npm run start-dev or yarn start-dev`

## Para o projeto funcionar na sua máquina:

- você precisa criar um arquivo `.env` na raiz do projeto e adicionar as seguintes variáveis, com os valores de acordo com sua preferência:
    - `PORT=3000`
    - `MYSQL_DB=bar`
    - `MYSQL_USER=bar`
    - `MYSQL_PASSWORD=bar`
    - `MYSQL_PORT=bar`
- Você precisa criar um banco de dados com uma tabela de nome `users` e colunas com nomes: `id`, `name`, `age` e `email`
