const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const indexRoutes = require("./routes/index");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => res.send(routes));

app.use(express.json());
app.use(cors());

app.use("/", indexRoutes);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
