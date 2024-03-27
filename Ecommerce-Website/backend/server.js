import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/DB/conectDB.js";
import productRoutes from "./src/routes/productRoute.js";
import cors from "cors";

const app = express();
//dot env config
dotenv.config();

//Connected to Database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/product", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
