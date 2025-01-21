import express from 'express';

const { PORT = 3000 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

