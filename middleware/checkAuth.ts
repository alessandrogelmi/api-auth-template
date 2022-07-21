import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const checkAuth = function (req: Request, res: Response, next: NextFunction) {
  const tokenKey = process.env.TOKEN_KEY || "";
  const token = req.header("authorization")!.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Access denied" });
  }

  try {
    jwt.verify(token, tokenKey);
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid token" });
  }
};

export default checkAuth;
