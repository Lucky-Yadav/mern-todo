const express = require("express");
const { signup, signin, todopost , todoget} = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/todo", todopost);
userRouter.get("/todo", todoget);

module.exports = userRouter;
