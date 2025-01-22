import { Router, Request, Response } from "express";

const usersRouter = Router();

usersRouter.post('/signin', (_req: Request, res: Response) => {
  res.send('signin');
});

usersRouter.post('/signup', (_req: Request, res: Response) => {
  res.send('signup');
});

export { usersRouter };
