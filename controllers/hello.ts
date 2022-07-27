import express = require("express");

const helloWorld = function (req: express.Request, res: express.Response) {
  res.send("Hello World!");
};

export default helloWorld;
