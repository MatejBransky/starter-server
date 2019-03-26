require('dotenv').config();
import path from 'path';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import Keycloak from 'keycloak-connect';

import users from './routes/users';
import hobbies from './routes/hobbies';
import sequelize from './sequelize';

// Create a new express application instance
const app = express();

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak(
  { store: memoryStore },
  path.join(
    __dirname,
    '../',
    process.env.NODE_ENV === 'development'
      ? 'keycloak.dev.json'
      : 'keycloak.json'
  )
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));
app.use('/users', keycloak.middleware(), users);
app.use('/hobbies', hobbies);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, function() {
    /* eslint-disable-next-line */
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
