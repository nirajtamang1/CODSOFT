import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/DB/conectDB.js";
import productRoutes from "./src/routes/productRoute.js";

const app = express();
//dot env config
dotenv.config();

app.use(express.json());
//Connected to Database
connectDB();

app.use("/product", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
