import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/auth", authRouter);
mongoose.set("strictQuery", false);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON ${PORT} PORT`);
    });
  } catch (e) {}
};

start();
