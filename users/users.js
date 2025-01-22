import { Router } from "express";

const usersRouter = Router();

usersRouter.post('/signin', (req, res) => {
  res.send('signin');
});

usersRouter.post('/signup', (req, res) => {
  res.send('signup');
});

export { usersRouter };
