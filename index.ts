import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import indexRoutes from "./routes/index";
import authRoutes from "./routes/auth";
import connectDB from "./config/databaseConnection";

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

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
