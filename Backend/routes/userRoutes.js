const express = require("express");
const { signup, signin,todo } = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/todo", todo);

module.exports = userRouter;
