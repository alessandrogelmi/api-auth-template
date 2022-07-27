const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection");
const authRoutes = require("./routes/authRoutes");
const indexRoutes = require("./routes/indexRoutes");
const colors = require("colors");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const app = express();

databaseConnection();

app.use(express.json());
app.use(cors());

app.use("/", indexRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
