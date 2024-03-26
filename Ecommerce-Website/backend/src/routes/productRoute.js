import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProduct,
  getSingleProduct,
} from "../controllers/productController.js";

//Create product
router.post("/", createProduct);

//Get ALL product
router.get("/", getAllProduct);

//Get Single Product
router.get("/:id", getSingleProduct);

export default router;
