const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});

friendRouter.post("/", friendsController.postFriends);
friendRouter.get("/", friendsController.getFriends);
friendRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendRouter;
