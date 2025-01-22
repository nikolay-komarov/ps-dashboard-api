import express from 'express';
import { usersRouter } from "./users/users.js";

const { PORT = 3000 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

