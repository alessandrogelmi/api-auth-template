import express from "express";
import checkAuth from "../middleware/checkAuth";
import helloWorld from "../controllers/hello";

const router = express.Router();

router.get("/", checkAuth, helloWorld);

export default router;
