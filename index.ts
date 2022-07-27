const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { databaseConnection } = require("./config/databaseConnection");
const authRouter = require("./routes/authRoutes");
const indexRouter = require("./routes/indexRoutes");
const colors = require("colors");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const app = express();

databaseConnection();

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
