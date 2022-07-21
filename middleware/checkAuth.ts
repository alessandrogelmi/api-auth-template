import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const checkAuth = function (req: Request, res: Response, next: NextFunction) {
  const token = req.header("authorization")!.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Access denied" });
  }

  try {
    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid token" });
  }
};

export default checkAuth;