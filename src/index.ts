require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/users';
import hobbies from './routes/hobbies';
import sequelize from './sequelize';

// Create a new express application instance
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', users);
app.use('/hobbies', hobbies);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, function() {
    /* eslint-disable-next-line */
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
