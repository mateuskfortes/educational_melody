# educational_melody

O Melodia Educacional é um website idealizado com o objetivo de proporcionar o ensino de teoria musical para aqueles que nunca tiveram contato com o tema ou que possuem curiosidade em aprender. O website combina ensino teórico, exercícios interativos e uma área prática, que busca ser acessível para diferentes públicos.

 
## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Como rodar

### Rodando com docker

1. Adicione ao .env
```env
USE_DOCKER=true
```

2. Rode o container
```bash
docker compose up
```

### Rodando sem docker

1. Crie um usuário mysql com o nome prisma_user e todos os privilégios.
```sql
    create user 'prisma_user'@'localhost' identified by '123456';
    grant all privileges on *.* to 'prisma_user'@'localhost';
    create database educational_melody;
```

2. Acesse a pasta do projeto:

```bash
    cd api
```

3. Crie um arquivo .env com a url do banco de dados
```env
    DATABASE_URL=mysql://prisma_user:123456@localhost:3306/educational_melody
```

4. Instale as dependências:
```bash
    npm install
```

5. Aplique as tabelas do prisma
```bash
    npx prisma db push
```

6. Crie o cliente prisma
```bash
    npx prisma generate
```
7. Inicie o servidor em modo de desenvolvimento:
```bash
    npm run dev
```
