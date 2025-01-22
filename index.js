import express from 'express';
import { usersRouter } from "./users/users.js";

const { PORT = 3000 } = process.env;
const app = express();

app.use((req, res, next) => {
  console.log('logTime: ', Date.now());
  next();
})

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/hello', (req, res) => {
  throw new Error('error');
})

app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

