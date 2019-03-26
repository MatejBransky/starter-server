import { Router } from 'express';

import User from '../models/User';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const users: User[] = await User.findAll();
    res.send(users);
  })
  .post(async (req, res) => {
    const user = await User.create({
      name: 'Alenka',
      birthday: '10.6.1991',
      hobbies: [],
    });
    res.send(user);
  });

export default router;
