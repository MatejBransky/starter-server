import { Router } from 'express';

import sequelize from '../sequelize';

const router = Router();

router.get('/', async (req, res) => {
  await sequelize.truncate();
  res.send('DONE!');
  // await sequelize.query('DROP DATABASE db_dev');
  // sequelize.query('CREATE DATABASE db_dev');
});

export default router;
