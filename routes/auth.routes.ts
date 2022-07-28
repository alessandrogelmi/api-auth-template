const authRouter = require("express").Router();
const {
  userSignUp,
  userSignIn,
  refreshToken,
} = require("../controllers/auth.controller");

authRouter.post("/signup", userSignUp);
authRouter.post("/signin", userSignIn);
authRouter.post("/refresh", refreshToken);

module.exports = authRouter;
