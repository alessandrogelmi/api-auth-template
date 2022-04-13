const router = require("express").Router();
const { userSignUp, userSignIn } = require("../controllers/authController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);

module.exports = router;
