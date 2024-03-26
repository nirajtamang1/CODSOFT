import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProduct,
} from "../controllers/productController.js";

//Create product
router.post("/", createProduct);

//Get ALL product
router.get("/", getAllProduct);

export default router;
