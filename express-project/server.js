const express = require("express");

const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/friends',friendRouter);
app.use('/messages',messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
