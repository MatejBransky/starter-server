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
    const user = new User();
    user.name = req.body.name;
    user.birthday = req.body.birthday;
    await user.save();
    res.send(user);
  });

export default router;
