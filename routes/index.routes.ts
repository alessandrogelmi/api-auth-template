const indexRouter = require("express").Router();
const checkAuth = require("../middleware/checkAuth");
const { helloWorld } = require("../controllers/hello.controller");

indexRouter.get("/", checkAuth, helloWorld);

module.exports = indexRouter;
