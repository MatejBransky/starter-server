# starter-server

### Requirements

- Node.js
- npm/Yarn
- Docker

### Development

Start database, adminer and keycloak:

```
$ docker-compose up
```

Start server in development:

```
$ npm start
```

Build and start server in production:

```
$ npm run start:prod
```

### Notices during creating the boilerplate

- `sequelize-typescript` needs `target: "esnext"` in `tsconfig.json`
- `sequelize-typescript` can't suggest columns in `Model.create()`
- `sequelize-typescript` has some problem with the `foreignKey` ([issue #395](https://github.com/RobinBuschmann/sequelize-typescript/issues/395))
