const router = require("express").Router();
const checkAuth = require("../middleware/checkAuth");
const helloWorld = require("../controllers/hello");

router.get("/", checkAuth, helloWorld);

export default router;
