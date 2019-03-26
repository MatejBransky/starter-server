import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

let sequelize;

if (
  process.env.DB_NAME &&
  process.env.DB_PORT &&
  process.env.DB_USER &&
  process.env.DB_PASSWORD
) {
  sequelize = new Sequelize({
    dialect: 'postgres',
    operatorsAliases: Op,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    models: [path.resolve(__dirname + '/models')],
  });
} else {
  throw Error('Undefined environment variables');
}

export default sequelize as Sequelize;
