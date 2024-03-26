import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/DB/conectDB.js";

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Helo world");
});

app.listen(process.env.PORT, () => {
  console.log(`Examle listeing on the port ${process.env.PORT}`);
});
