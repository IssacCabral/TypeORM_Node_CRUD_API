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

