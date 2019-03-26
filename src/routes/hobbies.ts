import { Router } from 'express';

import Hobby from '../models/Hobby';

const router = Router();

router.route('/').get(async (req, res) => {
  const hobbies: Hobby[] = await Hobby.findAll();
  res.send(hobbies);
});

export default router;
