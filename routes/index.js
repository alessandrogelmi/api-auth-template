const router = require("express").Router();
const { helloWorld } = require("../controllers/hello");
const checkAuth = require("../middleware/checkAuth");

router.get("/", checkAuth, helloWorld);

module.exports = router;
