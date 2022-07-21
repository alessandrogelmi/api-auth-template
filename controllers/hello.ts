import { Response, Request } from "express";

const helloWorld = function (req: Request, res: Response) {
  res.send("Hello World!");
};

export default helloWorld;
