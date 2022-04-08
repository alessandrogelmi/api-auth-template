const router = require("express").Router();
const { userSignUp } = require("../controllers/authController");

router.post("/signup", userSignUp);

module.exports = router;
