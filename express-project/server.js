const express = require("express");
const path = require("path");

const friendRouter = require("./routes/friends.router");
const messageRouter = require("./routes/messages.router");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friend Are Very Clever",
    caption: "Let's go skiing!"
  });
});

app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
