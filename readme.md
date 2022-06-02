## Configurando o Express

### Instalando as dependências

```bash
- npm init -y
- npm install typescript ts-node-dev -D
- npx tsc --init
```

### no arquivo de configuração typescript

```bash
- "target": "es2021"
- "strict": false
```

### Script de configuração para rodar o projeto

```script
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
},
```

## Configurando o TypeORM

### Instalando as dependências

```bash
- npm install typeorm
- npm install reflect-metadata
- npm install pg
```

### no arquivo de configuração typescript

```bash
"emitDecoratorMetadata": true,
"experimentalDecorators": true
```

#### Podemos definir algumas variáveis de ambiente disponíveis para o TypeORM

Crie um arquivo .env
```bash
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = username
TYPEORM_PASSWORD = password
TYPEORM_DATABASE = databaseName
TYPEORM_PORT = databasePort(5432)
TYPEORM_SERVERPORT = 3000
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
```

### Migrations

Para trabalhar com as migrations precisamos da Interface de Linha de Comando (CLI). O CLI envia suporte para migrações de projetos.

### Script para configuração do CLI para o TypeORM

```script
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
}
```

#### Para ver as opções de help do CLI TypeORM

```script
npx typeorm
```

#### Para criar uma migration

```script
npm run typeorm migration:create src/db/migrations/nome-da-migration
```

O TypeORM sofreu algumas alterações que ainda não estão refletidas na documentação oficial.

🔹Pra configurar o banco, agora é necessário criar um arquivo dataSource.ts como descrito aqui: https://typeorm.io/data-source
🔹Pra conectar ao banco, chame a função initialize() no próprio arquivo dataSource.ts:   AppDataSource.initialize()  e depois importe ele diretamente no server.js:   import "./db/dataSource"
🔹O script typeorm no package.json deve ser:  ts-node-dev  node_modules/typeorm/cli.js
🔹Pra criar uma migration:   npm run typeorm migration:create src/db/migrations/nome-da-migration
🔹Pra executar as migrations:   npm run typeorm -- migration:run -d src/db/dataSource.ts
🔹Se quiser usar variáveis de ambiente, é preciso instalar o pacote dotenv, e chamar dotenv.config() no topo do dataSource, pois esse arquivo não tem acesso às variáveis por padrão.

Pode ser que essa estrutura mude, então se der problema procure nas issues do Github do TypeORM. 
Mais detalhes sobre a alteração da CLI: https://github.com/typeorm/typeorm/issues/8810

Eu recomendo trocar o TypeORM pelo Prisma logo, é mais simples e não tem esses problemas.