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

- `sequelize-typescript` needs `target: "esnext"` in `tsconfig.json` ([comment](https://github.com/RobinBuschmann/sequelize-typescript/issues/504#issuecomment-451201474))
- `sequelize-typescript` can't suggest columns in `Model.create()` instead create instances with `new` ([docs](https://github.com/RobinBuschmann/sequelize-typescript#build-and-create))
- `sequelize-typescript` has some problem with the `foreignKey` ([issue #395](https://github.com/RobinBuschmann/sequelize-typescript/issues/395))

- Keycloak exports realm without client's `secret` so if you need a new secret it needs to be changed manually inside of the exported json (search for 'secret' in `realm-example.json`) and at the same time in Postman's exported collection.

- Changes in env variables must be reflected even in Postman's variables in collection.
