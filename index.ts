import express, { Request, Response, NextFunction } from 'express';
import { usersRouter } from "./users/users";

const { PORT = 3000 } = process.env;
const app = express();

app.use((_req: Request, _res: Response, next: NextFunction) => {
  console.log('logTime: ', Date.now());
  next();
})

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world');
});

app.get('/hello', (_req: Request, _res: Response) => {
  throw new Error('error');
})

app.use('/users', usersRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

