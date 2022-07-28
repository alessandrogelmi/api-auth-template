const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection");
const authRoutes = require("./routes/auth.routes");
const indexRoutes = require("./routes/index.routes");
const colors = require("colors/safe");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const app = express();

databaseConnection();

app.use(express.json());
app.use(cors());

app.use("/", indexRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () =>
  console.log(
    colors.green(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )
);
